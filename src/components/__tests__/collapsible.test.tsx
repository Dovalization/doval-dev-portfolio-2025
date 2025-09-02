import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Collapsible from '../collapsible'

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

const mockProject = {
  title: 'Test Project',
  description: 'A test project description',
  sections: [
    { title: 'Problem', body: 'Test problem description' },
    { title: 'Solution', body: 'Test solution description' }
  ],
  banner: { url: '/test-banner.jpg', alt: 'Test banner' },
  logo: { url: '/test-logo.png', alt: 'Test logo', size: 'medium' as const },
  stack: ['React', 'TypeScript', 'Tailwind'],
  liveUrl: 'https://example.com'
}

describe('Collapsible', () => {
  it('renders project title and description', () => {
    render(<Collapsible project={mockProject} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('starts in collapsed state', () => {
    render(<Collapsible project={mockProject} />)

    // Find the content container with max-h classes
    const article = screen.getByText('Test Project').closest('article')
    const contentSection = article?.querySelector('div[class*="max-h-"]')
    expect(contentSection).toHaveClass('max-h-0')
  })

  it('expands when banner is clicked', async () => {
    const user = userEvent.setup()
    render(<Collapsible project={mockProject} />)

    const banner = screen.getByAltText('Test banner').closest('figure')
    await user.click(banner!)

    // Find the content container with max-h classes
    const article = screen.getByText('Test Project').closest('article')
    const contentSection = article?.querySelector('div[class*="max-h-"]')
    expect(contentSection).toHaveClass('max-h-[300vh]')
  })

  it('renders project sections', () => {
    render(<Collapsible project={mockProject} />)

    expect(screen.getByText('Problem')).toBeInTheDocument()
    expect(screen.getByText('Test problem description')).toBeInTheDocument()
    expect(screen.getByText('Solution')).toBeInTheDocument()
    expect(screen.getByText('Test solution description')).toBeInTheDocument()
  })

  it('renders tech stack tags', () => {
    render(<Collapsible project={mockProject} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
  })

  it('renders banner and logo images with correct attributes', () => {
    render(<Collapsible project={mockProject} />)

    const bannerImage = screen.getByAltText('Test banner')
    expect(bannerImage).toHaveAttribute('src', '/test-banner.jpg')

    const logoImage = screen.getByAltText('Test logo')
    expect(logoImage).toHaveAttribute('src', '/test-logo.png')
  })
})