import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from '../components/ui/button';

describe('Button Component', () => {
  it('renders button with default variant and size', () => {
    render(<Button>Default Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Default Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('applies custom variants correctly', () => {
    render(<Button variant="hero">Hero Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Hero Button' });
    expect(button).toHaveClass('bg-gradient-primary');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);
    let button = screen.getByRole('button', { name: 'Small Button' });
    expect(button).toHaveClass('h-9');
    
    rerender(<Button size="lg">Large Button</Button>);
    button = screen.getByRole('button', { name: 'Large Button' });
    expect(button).toHaveClass('h-14');
    
    rerender(<Button size="xl">Extra Large Button</Button>);
    button = screen.getByRole('button', { name: 'Extra Large Button' });
    expect(button).toHaveClass('h-16');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Clickable Button' });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies medical variant styling', () => {
    render(<Button variant="medical">Medical Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Medical Button' });
    expect(button).toHaveClass('bg-white', 'text-primary', 'border-2');
  });

  it('applies CTA variant styling', () => {
    render(<Button variant="cta">CTA Button</Button>);
    
    const button = screen.getByRole('button', { name: 'CTA Button' });
    expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50');
  });

  it('supports asChild prop for custom elements', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies accessibility focus styles', () => {
    render(<Button>Focus Test</Button>);
    
    const button = screen.getByRole('button', { name: 'Focus Test' });
    expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2');
  });

  it('maintains proper hover states', () => {
    render(<Button variant="outline">Outline Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Outline Button' });
    expect(button).toHaveClass('hover:bg-primary', 'hover:text-primary-foreground');
  });
});
