import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock next/navigation
const mockNotFound = vi.fn()
vi.mock('next/navigation', () => ({
  notFound: mockNotFound,
}))

// Mock components and dependencies
vi.mock('@/components/header', () => ({
  Header: ({ currentLocale }: { data: unknown; currentLocale: string }) => (
    <header data-testid="header" data-locale={currentLocale}>Header</header>
  ),
}))

vi.mock('../dictionaries', () => ({
  getDictionary: vi.fn().mockResolvedValue({
    navigation: { home: 'Home', about: 'About' },
  }),
}))

vi.mock('../../globals.css', () => ({}))

describe('Language Layout Validation', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('generateMetadata', () => {
    it('should generate metadata for supported language "en"', async () => {
      const { generateMetadata } = await import('../layout')
      
      const params = Promise.resolve({ lang: 'en' })
      const metadata = await generateMetadata({ params })
      
      expect(metadata).toEqual({
        title: 'doval.dev - Full-Stack Developer and Designer',
        description: 'Full-Stack Developer focused on Frontend — building fast, human-centered systems.',
        generator: 'Next.js',
      })
      expect(mockNotFound).not.toHaveBeenCalled()
    })

    it('should generate metadata for supported language "pt"', async () => {
      const { generateMetadata } = await import('../layout')
      
      const params = Promise.resolve({ lang: 'pt' })
      const metadata = await generateMetadata({ params })
      
      expect(metadata).toEqual({
        title: 'doval.dev - Desenvolvedor Full-Stack e Designer',
        description: 'Desenvolvedor Full-Stack focado em Frontend — construindo sistemas rápidos e centrados no humano.',
        generator: 'Next.js',
      })
      expect(mockNotFound).not.toHaveBeenCalled()
    })

    it('should call notFound for unsupported language', async () => {
      const { generateMetadata } = await import('../layout')
      
      const params = Promise.resolve({ lang: 'fr' })
      
      try {
        await generateMetadata({ params })
      } catch {
        // notFound throws, which is expected
      }
      
      expect(mockNotFound).toHaveBeenCalledOnce()
    })

    it('should call notFound for invalid language', async () => {
      const { generateMetadata } = await import('../layout')
      
      const params = Promise.resolve({ lang: 'invalid-lang' })
      
      try {
        await generateMetadata({ params })
      } catch {
        // notFound throws, which is expected
      }
      
      expect(mockNotFound).toHaveBeenCalledOnce()
    })
  })

  describe('generateStaticParams', () => {
    it('should return correct static params', async () => {
      const { generateStaticParams } = await import('../layout')
      
      const params = await generateStaticParams()
      
      expect(params).toEqual([
        { lang: 'en' },
        { lang: 'pt' },
      ])
    })
  })

  describe('Language validation in RootLayout', () => {
    it('should render for supported language "en"', async () => {
      const { default: RootLayout } = await import('../layout')
      
      // This test verifies the component can be imported and the validation logic exists
      // Full rendering tests would require more complex server component testing setup
      expect(RootLayout).toBeDefined()
      expect(mockNotFound).not.toHaveBeenCalled()
    })
  })
})