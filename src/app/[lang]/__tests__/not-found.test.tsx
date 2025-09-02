import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import NotFound from '../not-found'

// Mock the NotFoundContent component
vi.mock('@/components/not-found-content', () => ({
  default: ({ homeHref }: { homeHref?: string }) => (
    <div data-testid="not-found-content" data-home-href={homeHref}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div role="link">Go Home</div>
      <div role="link">Go Back</div>
    </div>
  ),
}))

describe('Language-specific NotFound', () => {
  it('renders NotFoundContent component', () => {
    render(<NotFound />)
    
    const content = screen.getByTestId('not-found-content')
    expect(content).toBeInTheDocument()
  })

  it('passes correct homeHref to NotFoundContent', () => {
    render(<NotFound />)
    
    const content = screen.getByTestId('not-found-content')
    expect(content).toHaveAttribute('data-home-href', '/en')
  })

  it('renders basic 404 content through NotFoundContent', () => {
    render(<NotFound />)
    
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go Back' })).toBeInTheDocument()
  })

  it('uses the same component as root NotFound', () => {
    render(<NotFound />)
    
    // Both should render the same NotFoundContent with same homeHref
    const content = screen.getByTestId('not-found-content')
    expect(content).toHaveAttribute('data-home-href', '/en')
  })
})