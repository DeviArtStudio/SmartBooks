import { MainMenu } from './main-menu'

import './style.css'

const style = {
  topBar: 'topBar',
}

export function TopBar() {
  return (
    <div className={style.topBar}>
      <MainMenu />
    </div>
  )
}
