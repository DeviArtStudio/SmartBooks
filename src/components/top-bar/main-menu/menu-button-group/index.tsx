import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonGroup, IconButton } from 'rsuite'

interface MenuButtonGroupProps {
  icon: IconDefinition
  text?: string
}

export function MenuButtonGroup({
  menuItems,
}: {
  menuItems: MenuButtonGroupProps[]
}) {
  const buttons = menuItems.map(item => {
    return <IconButton size="xs" icon={<FontAwesomeIcon icon={item.icon} />} />
  })

  return <ButtonGroup>{buttons}</ButtonGroup>
}
