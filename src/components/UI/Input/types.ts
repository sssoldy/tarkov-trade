import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string
}

export interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  position: 'left' | 'right'
}

export interface IconProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

export interface InputElProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: ReactNode
  loading?: boolean
}
