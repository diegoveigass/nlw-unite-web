import { ComponentProps, ReactNode } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  children: ReactNode
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a {...rest} className="font-medium text-sm text-zinc-300">
      {children}
    </a>
  )
}
