import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ButtonLink from '../button-link'

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('ButtonLink', () => {
  it('renders with correct text and href', () => {
    render(
      <ButtonLink href="/test" variant="primary">
        Test Button
      </ButtonLink>
    )

    const button = screen.getByRole('link', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/test')
  })

  it('applies primary variant classes by default', () => {
    render(<ButtonLink href="/test">Primary Button</ButtonLink>)

    const button = screen.getByRole('link')
    expect(button).toHaveClass('bg-orange-secondary', 'text-dark-primary')
  })

  it('applies secondary variant classes', () => {
    render(
      <ButtonLink href="/test" variant="secondary">
        Secondary Button
      </ButtonLink>
    )

    const button = screen.getByRole('link')
    expect(button).toHaveClass('border-orange-secondary', 'bg-transparent')
  })

  it('renders children correctly', () => {
    render(
      <ButtonLink href="/test">
        <span>Complex Child</span>
      </ButtonLink>
    )

    expect(screen.getByText('Complex Child')).toBeInTheDocument()
  })
})