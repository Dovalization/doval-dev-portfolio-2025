"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Real stellar population data for accurate galaxy simulation
 * Based on astronomical observations of star type frequencies
 */
const starTypes = {
  // Distribution percentages: M, K, G, F, A, B/O class stars
  percentage: [76.45, 12.1, 7.6, 3.0, 0.6, 0.13],
  // Colors from warm red dwarfs to hot blue giants
  color: [0xffcc6f, 0xffd2a1, 0xfff4ea, 0xf8f7ff, 0xcad7ff, 0xaabfff],
  // Relative sizes (smaller red dwarfs to larger blue giants)
  size: [0.7, 0.7, 1.15, 1.48, 2.0, 2.5, 3.5],
};

/**
 * Galaxy structure parameters - controls the shape and density of the spiral galaxy
 */
const GALAXY_CONFIG = {
  NUM_STARS: 5000, // Total number of stars to generate
  ARMS: 3, // Number of spiral arms
  GALAXY_THICKNESS: 1, // Z-axis thickness of the galaxy disk

  // Core region (dense center)
  CORE_X_DIST: 33, // Standard deviation for core X distribution
  CORE_Y_DIST: 33, // Standard deviation for core Y distribution

  // Outer core region (less dense surrounding area)
  OUTER_CORE_X_DIST: 100,
  OUTER_CORE_Y_DIST: 100,

  // Spiral arms parameters
  ARM_X_DIST: 100, // Standard deviation for arm width
  ARM_Y_DIST: 50, // Standard deviation for arm thickness
  ARM_X_MEAN: 200, // Average distance from center for spiral arms
  ARM_Y_MEAN: 100, // Average arm offset

  SPIRAL: 3.0, // How tightly wound the spiral arms are
  HAZE_RATIO: 0.3, // Ratio of haze particles to stars (creates nebula effect)
};

/**
 * Generates random numbers with a normal (Gaussian) distribution
 * Uses Box-Muller transformation for realistic star clustering
 * @param mean - Center value of the distribution
 * @param stdev - Standard deviation (spread) of the distribution
 * @returns Random number following normal distribution
 */
function gaussianRandom(mean = 0, stdev = 1): number {
  const u = 1 - Math.random(); // Uniform random [0,1)
  const v = Math.random(); // Uniform random [0,1)
  // Box-Muller transformation to convert uniform to normal distribution
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdev + mean;
}

/**
 * Constrains a value between minimum and maximum bounds
 * @param value - Input value to constrain
 * @param minimum - Lower bound
 * @param maximum - Upper bound
 * @returns Clamped value
 */
function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

/**
 * Transforms linear coordinates into spiral arm patterns
 * Creates the characteristic spiral shape of galaxies using polar coordinates
 * @param x - X coordinate
 * @param y - Y coordinate  
 * @param z - Z coordinate (unchanged)
 * @param offset - Rotational offset for this spiral arm
 * @returns New 3D position following spiral curve
 */
function spiral(
  x: number,
  y: number,
  z: number,
  offset: number,
): THREE.Vector3 {
  const r = Math.sqrt(x ** 2 + y ** 2); // Distance from center
  let theta = offset; // Starting angle for this arm
  // Calculate angle based on position
  theta += x > 0 ? Math.atan(y / x) : Math.atan(y / x) + Math.PI;
  // Add spiral curvature based on distance from center
  theta += (r / GALAXY_CONFIG.ARM_X_DIST) * GALAXY_CONFIG.SPIRAL;
  // Convert back to Cartesian coordinates
  return new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), z);
}

/**
 * Randomly selects a star type based on realistic stellar population frequencies
 * Uses weighted random selection where more common star types have higher probability
 * @returns Index of the selected star type (0-5)
 */
function generateStarType(): number {
  let num = Math.random() * 100.0; // Random percentage
  const pct = starTypes.percentage; // Cumulative probability array
  
  // Subtract each star type's probability until we find the selected type
  for (let i = 0; i < pct.length; i++) {
    num -= pct[i];
    if (num < 0) {
      return i; // This star type was selected
    }
  }
  return 0; // Fallback to most common star type (M-class red dwarf)
}

/**
 * Represents a single star in the galaxy with realistic properties and behaviors
 */
class Star {
  position: THREE.Vector3; // 3D position in space
  starType: number; // Index into starTypes arrays (determines color, size)
  sprite: THREE.Sprite | null = null; // Three.js rendering object

  /**
   * Creates a new star at the specified position
   * @param position - 3D coordinates where this star is located
   */
  constructor(position: THREE.Vector3) {
    this.position = position;
    this.starType = generateStarType(); // Randomly assign realistic star type
  }

  /**
   * Updates the visual size of the star based on camera distance
   * Closer stars appear larger, distant stars appear smaller (perspective effect)
   * @param camera - Current camera position for distance calculation
   */
  updateScale(camera: THREE.Camera) {
    if (!this.sprite) return;
    
    // Calculate distance from camera, normalized to reasonable scale
    const dist = this.position.distanceTo(camera.position) / 250;
    // Scale star size based on distance and star type, with min/max bounds
    const starSize = clamp(dist * starTypes.size[this.starType], 0.25, 5.0);
    this.sprite.scale.setScalar(starSize);
  }

  /**
   * Creates the visual Three.js sprite object for this star
   * @param scene - Three.js scene to add the sprite to
   * @param materials - Array of materials (one for each star type)
   */
  createSprite(scene: THREE.Group, materials: THREE.SpriteMaterial[]) {
    this.sprite = new THREE.Sprite(materials[this.starType]); // Use material for this star's type
    this.sprite.scale.setScalar(starTypes.size[this.starType]); // Set initial size
    this.sprite.position.copy(this.position); // Position in 3D space
    scene.add(this.sprite); // Add to scene for rendering
  }
}

/**
 * Represents nebula-like haze/dust clouds that add atmospheric depth to the galaxy
 */
class Haze {
  position: THREE.Vector3; // 3D position in space
  sprite: THREE.Sprite | null = null; // Three.js rendering object

  /**
   * Creates a new haze cloud at the specified position
   * @param position - 3D coordinates where this haze is located
   */
  constructor(position: THREE.Vector3) {
    this.position = position;
  }

  /**
   * Updates the opacity of the haze based on viewing distance
   * Distant haze appears more transparent, creating depth perception
   * @param camera - Current camera position for distance calculation
   */
  updateScale(camera: THREE.Camera) {
    if (!this.sprite) return;
    
    // Calculate distance from camera
    const dist = this.position.distanceTo(camera.position) / 250;
    // Opacity increases with distance (squared for realistic falloff)
    const opacity = clamp(0.15 * Math.pow(dist / 2.5, 2), 0, 0.15);
    
    if (this.sprite.material instanceof THREE.SpriteMaterial) {
      this.sprite.material.opacity = opacity;
      this.sprite.material.needsUpdate = true; // Tell Three.js to update the material
    }
  }

  /**
   * Creates the visual Three.js sprite object for this haze cloud
   * @param scene - Three.js scene to add the sprite to  
   * @param material - Shared material for all haze objects
   */
  createSprite(scene: THREE.Group, material: THREE.SpriteMaterial) {
    this.sprite = new THREE.Sprite(material);
    this.sprite.position.copy(this.position); // Position in 3D space
    // Random size variation for realistic cloud diversity
    this.sprite.scale.setScalar(clamp(40 * Math.random(), 15, 40));
    scene.add(this.sprite); // Add to scene for rendering
  }
}

interface GalaxyParticlesProps {
  isVisible?: boolean; // Controls whether animations should run (for performance optimization)
}

/**
 * Main component that generates and manages the entire galaxy particle system
 * Handles star generation, materials, textures, and real-time animations
 * @param isVisible - Whether the component is currently visible (pauses animations when false)
 */
function GalaxyParticles({ isVisible = true }: GalaxyParticlesProps) {
  const groupRef = useRef<THREE.Group>(null); // Reference to the main Three.js group
  const cameraRef = useRef<THREE.Camera | null>(null); // Camera reference for distance calculations

  /**
   * Generate all galaxy objects and materials once on component mount
   * Uses useMemo for performance - only regenerates if dependencies change
   */
  const { stars, hazeObjects, starMaterials, hazeMaterial } = useMemo(() => {
    // === STAR TEXTURE GENERATION ===
    // Create procedural star sprite texture using HTML5 Canvas
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext("2d")!;
    
    // Create radial gradient from center to edges (star glow effect)
    const centerX = 64;
    const centerY = 64;
    
    const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 64);
    gradient.addColorStop(0, "rgba(255,255,255,1)"); // Bright center
    gradient.addColorStop(0.2, "rgba(255,255,255,0.8)"); // Mid glow
    gradient.addColorStop(0.5, "rgba(255,255,255,0.4)"); // Outer glow
    gradient.addColorStop(1, "rgba(255,255,255,0)"); // Transparent edge
    
    // Fill canvas with gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);

    // Convert canvas to Three.js texture
    const starTexture = new THREE.CanvasTexture(canvas);

    // === HAZE TEXTURE GENERATION ===
    // Create nebula/dust cloud texture for atmospheric depth
    const hazeCanvas = document.createElement("canvas");
    hazeCanvas.width = 128;
    hazeCanvas.height = 128;
    const hazeContext = hazeCanvas.getContext("2d")!;
    
    // Blue-tinted radial gradient for nebula effect
    const hazeGradient = hazeContext.createRadialGradient(64, 64, 0, 64, 64, 64);
    hazeGradient.addColorStop(0, "rgba(0,130,255,0.6)"); // Blue center
    hazeGradient.addColorStop(0.3, "rgba(0,130,255,0.3)"); // Fade to transparent
    hazeGradient.addColorStop(1, "rgba(0,130,255,0)"); // Transparent edge
    hazeContext.fillStyle = hazeGradient;
    hazeContext.fillRect(0, 0, 128, 128);

    // Convert to Three.js texture
    const hazeTexture = new THREE.CanvasTexture(hazeCanvas);

    // === MATERIAL CREATION ===
    // Create one material for each star type with appropriate coloring
    const starMaterials = starTypes.color.map((color) => {
      return new THREE.SpriteMaterial({
        map: starTexture, // Use the same base texture for all stars
        color: color, // Tint with star type's color
        transparent: true, // Enable alpha transparency
      });
    });

    // Shared material for all haze particles
    const hazeMaterial = new THREE.SpriteMaterial({
      map: hazeTexture,
      color: 0x0082ff, // Blue tint for nebula effect
      opacity: 0.15, // Semi-transparent
      transparent: true,
      depthTest: false, // Don't interact with depth buffer
      depthWrite: false, // Don't write to depth buffer
    });

    // === GALAXY OBJECT GENERATION ===
    const stars: Star[] = [];
    const hazeObjects: Haze[] = [];

    // === CORE REGION (25% of stars) ===
    // Dense central bulge - most galaxies have concentrated cores
    for (let i = 0; i < GALAXY_CONFIG.NUM_STARS / 4; i++) {
      const pos = new THREE.Vector3(
        gaussianRandom(0, GALAXY_CONFIG.CORE_X_DIST), // X position around center
        gaussianRandom(0, GALAXY_CONFIG.CORE_Y_DIST), // Y position around center  
        gaussianRandom(0, GALAXY_CONFIG.GALAXY_THICKNESS), // Z position (galaxy disk thickness)
      );
      stars.push(new Star(pos));
    }

    // === OUTER CORE REGION (25% of stars) ===
    // Transition zone between dense core and spiral arms
    for (let i = 0; i < GALAXY_CONFIG.NUM_STARS / 4; i++) {
      const pos = new THREE.Vector3(
        gaussianRandom(0, GALAXY_CONFIG.OUTER_CORE_X_DIST), // Wider distribution than core
        gaussianRandom(0, GALAXY_CONFIG.OUTER_CORE_Y_DIST),
        gaussianRandom(0, GALAXY_CONFIG.GALAXY_THICKNESS),
      );
      stars.push(new Star(pos));
    }

    // === SPIRAL ARMS (50% of stars) ===
    // Create realistic spiral arm structure
    for (let j = 0; j < GALAXY_CONFIG.ARMS; j++) {
      for (let i = 0; i < GALAXY_CONFIG.NUM_STARS / 4; i++) {
        // Generate random position that will be transformed into spiral shape
        const pos = spiral(
          gaussianRandom(GALAXY_CONFIG.ARM_X_MEAN, GALAXY_CONFIG.ARM_X_DIST), // Distance from center
          gaussianRandom(GALAXY_CONFIG.ARM_Y_MEAN, GALAXY_CONFIG.ARM_Y_DIST), // Arm thickness variation
          gaussianRandom(0, GALAXY_CONFIG.GALAXY_THICKNESS), // Z-axis variation
          (j * 2 * Math.PI) / GALAXY_CONFIG.ARMS, // Rotational offset for this arm
        );
        stars.push(new Star(pos));
      }
    }

    // === HAZE/NEBULA GENERATION ===
    // Create atmospheric dust clouds for visual depth
    const totalHaze = GALAXY_CONFIG.NUM_STARS * GALAXY_CONFIG.HAZE_RATIO;
    
    for (let i = 0; i < totalHaze; i++) {
      let pos: THREE.Vector3;
      
      // Split haze between core and spiral arms (50/50)
      if (i < totalHaze / 2) {
        // Core haze - larger, more diffuse clouds around galactic center
        pos = new THREE.Vector3(
          gaussianRandom(0, GALAXY_CONFIG.CORE_X_DIST * 2), // 2x wider than star core
          gaussianRandom(0, GALAXY_CONFIG.CORE_Y_DIST * 2), // More spread out
          gaussianRandom(0, GALAXY_CONFIG.GALAXY_THICKNESS),
        );
      } else {
        // Spiral arm haze - follows the same structure as spiral arm stars
        const armIndex = Math.floor(Math.random() * GALAXY_CONFIG.ARMS); // Random arm
        pos = spiral(
          gaussianRandom(GALAXY_CONFIG.ARM_X_MEAN, GALAXY_CONFIG.ARM_X_DIST),
          gaussianRandom(GALAXY_CONFIG.ARM_Y_MEAN, GALAXY_CONFIG.ARM_Y_DIST),
          gaussianRandom(0, GALAXY_CONFIG.GALAXY_THICKNESS),
          (armIndex * 2 * Math.PI) / GALAXY_CONFIG.ARMS, // Arm offset
        );
      }
      hazeObjects.push(new Haze(pos));
    }

    return { stars, hazeObjects, starMaterials, hazeMaterial };
  }, []); // Empty dependency array - only generate once

  /**
   * Effect to add all generated objects to the Three.js scene
   * Runs after stars and haze objects are generated
   */
  useEffect(() => {
    if (!groupRef.current) return;

    const scene = groupRef.current;

    // Create and add all star sprites to the scene
    stars.forEach((star) => star.createSprite(scene, starMaterials));

    // Create and add all haze sprites to the scene  
    hazeObjects.forEach((haze) => haze.createSprite(scene, hazeMaterial));
  }, [stars, hazeObjects, starMaterials, hazeMaterial]);

  /**
   * Animation loop - runs every frame when component is visible
   * Handles galaxy rotation, camera movement, and particle scaling
   */
  useFrame(({ camera, clock }) => {
    // Store camera reference for distance calculations in Star/Haze classes
    cameraRef.current = camera;

    // Performance optimization - skip animations when not visible
    if (!isVisible) {
      return;
    }

    // === GALAXY ROTATION ===
    // Slowly rotate the entire galaxy for dynamic effect
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.05; // 0.05 rad/sec = very slow
    }

    // === CAMERA DRIFT ANIMATION ===
    // Subtle floating motion to add life to the scene
    const time = clock.getElapsedTime();
    camera.position.x = Math.sin(time * 0.1) * 15; // Side-to-side: 15 unit amplitude
    camera.position.y = 300 + Math.cos(time * 0.08) * 10; // Up-down: 300 ± 10 units
    camera.position.z = 450 + Math.sin(time * 0.06) * 20; // Forward-back: 450 ± 20 units

    // === DYNAMIC SCALING ===
    // Update all particles based on new camera position
    stars.forEach((star) => star.updateScale(camera));
    hazeObjects.forEach((haze) => haze.updateScale(camera));
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Rotate galaxy to lay flat like a typical spiral galaxy view */}
      {/* Stars and haze sprites are dynamically added via useEffect */}
    </group>
  );
}

interface ParticleBackgroundProps {
  isVisible?: boolean; // Performance optimization prop
}

/**
 * Main particle background component - creates a full-screen 3D galaxy simulation
 * Features realistic stellar populations, spiral arm structure, and nebula effects
 * Optimized for performance with visibility-based animation pausing
 * 
 * @param isVisible - Whether the component is currently visible (controls animation performance)
 */
export default function ParticleBackground({ isVisible = true }: ParticleBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 300, 450], // Camera positioned above and behind galaxy center
          fov: 60, // 60-degree field of view for good perspective
          rotation: [-Math.PI / 4, 0, 0], // Look down at galaxy from 45-degree angle
        }}
        style={{ background: "transparent" }} // Transparent so page background shows through
        gl={{
          antialias: false, // Disabled for better sprite performance with 5000+ particles
          alpha: true, // Enable transparency
          powerPreference: "high-performance", // Request high-performance GPU
          stencil: false, // Not needed for sprites
          depth: true, // Enable depth testing for realistic layering
        }}
        dpr={[1, typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1]}
        // Cap device pixel ratio at 2 for performance on high-DPI displays
        frameloop={isVisible ? "always" : "never"} // Performance optimization
        // Pause rendering completely when not visible
      >
        <GalaxyParticles isVisible={isVisible} />
      </Canvas>
    </div>
  );
}
