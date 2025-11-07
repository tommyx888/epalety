import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-smooth',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            // Primary - Orange CTA button
            'bg-orange text-white hover:bg-orange-dark transform hover:-translate-y-0.5 shadow-soft hover:shadow-card':
              variant === 'primary',
            // Secondary - Green outline button
            'bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-white':
              variant === 'secondary',
            // Tertiary - Text link style
            'text-forest hover:text-orange hover:underline bg-transparent border-0 p-0':
              variant === 'tertiary',
            // Outline - Gray outline
            'border-2 border-gray-300 text-gray-900 hover:border-gray-400':
              variant === 'outline',
            // Sizes
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

