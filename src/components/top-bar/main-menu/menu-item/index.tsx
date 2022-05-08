import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import { IconButton } from 'rsuite'

interface MenuItemProps {
  children?: ReactNode
  icon?: IconDefinition
  text?: string
}

function ContentMenuItem({ children }: { children?: ReactNode }) {
  return <div>{children}</div>
}

export function MenuItem({ children, text, icon }: MenuItemProps) {
  if (children) return <ContentMenuItem>{children}</ContentMenuItem>
  if (icon)
    return <IconButton size="xs" icon={<FontAwesomeIcon icon={icon} />} />
  return <div>{text}</div>
}
