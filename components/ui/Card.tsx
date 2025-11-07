import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card bg-white shadow-soft p-6',
        hover && 'hover:shadow-card-hover hover:-translate-y-2 transition-all duration-smooth',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props} />
  )
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={cn('text-xl font-heading font-semibold text-forest', className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('text-gray-600', className)} {...props} />
}

export function CardFooter({ className, ...props }: CardProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-200', className)} {...props} />
  )
}

