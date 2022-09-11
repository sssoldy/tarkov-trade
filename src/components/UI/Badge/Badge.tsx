import {forwardRef, HTMLAttributes} from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((inProps, ref) => {
  const props = inProps

  return (
    <span
      ref={ref}
      className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
      {...props}
    />
  )
})
