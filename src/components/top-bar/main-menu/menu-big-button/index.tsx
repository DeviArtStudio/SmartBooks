import { IconProps } from '@rsuite/icons/lib/Icon'
import { ReactElement } from 'react'
import { Button } from 'rsuite'

import './style.css'

const style = {
  bigButton: 'bigButton',
}

export function MenuBigButton({
  text,
  icon,
}: {
  text: string
  icon: ReactElement<IconProps>
}) {
  return (
    <Button className={style.bigButton}>
      {icon}
      <div className="bigButtonText">{text}</div>
    </Button>
  )
}
