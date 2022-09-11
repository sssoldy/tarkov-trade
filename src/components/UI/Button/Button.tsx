import {ButtonHTMLAttributes, forwardRef} from 'react'
import {classNames} from '../../../utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'huge'
}

const primaryClasses =
  'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300'
const secondaryClasses =
  'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 disabled:bg-indigo-50 disabled:text-indigo-400'

const smallSizeClasses = 'px-2.5 py-1.5'
const mediumSizeClasses = 'px-3 py-2'
const hugeSizeClasses = 'px-4 py-2.5'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (inProps, ref) => {
    const {variant = 'primary', size = 'medium', className, ...other} = inProps

    const isPrimary = variant === 'primary'

    const classes = classNames(
      className,
      isPrimary ? primaryClasses : secondaryClasses,
      size === 'small' && smallSizeClasses,
      size === 'medium' && mediumSizeClasses,
      size === 'huge' && hugeSizeClasses,
      'inline-flex items-center ',
      'border border-transparent rounded shadow-sm',
      'text-xs font-medium',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      'disabled:shadow-none disabled:cursor-not-allowed',
    )

    return <button ref={ref} className={classes} {...other} />
  },
)
