import { ReactNode } from 'react'
import { ButtonToolbar } from 'rsuite'

export function MenuToolbar({ children }: { children: ReactNode }) {
  return <ButtonToolbar> {children} </ButtonToolbar>
}
