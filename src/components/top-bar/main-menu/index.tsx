import { Nav } from 'rsuite'
import { useEffect, useState } from 'react'
import { ItemsContainer } from './items-container'
import { Icons } from '../../../constants/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
const styles = {
  navIcon: 'navIcon',
}

const EVENT_KEYS = {
  file: 'file',
  editor: 'editor',
  insert: 'insert',
  account: 'account',
}

const TABS_INFO = {
  [EVENT_KEYS.file]: {
    text: 'File',
    icon: Icons.file,
  },
  [EVENT_KEYS.editor]: {
    text: 'Editor',
    icon: Icons.editor,
  },
  [EVENT_KEYS.insert]: {
    text: 'Insert',
    icon: Icons.paste,
  },
  [EVENT_KEYS.account]: {
    text: 'Account',
    icon: Icons.account,
  },
}

function NavItem({ eventKey }: { eventKey: string }) {
  return (
    <Nav.Item
      eventKey={eventKey}
      icon={
        <FontAwesomeIcon
          className={styles.navIcon}
          size="sm"
          icon={TABS_INFO[eventKey].icon}
        />
      }
    >
      {TABS_INFO[eventKey].text}
    </Nav.Item>
  )
}

export function MainMenu() {
  const [activeTabKey, setActiveTabKey] = useState(EVENT_KEYS.file)

  useEffect(() => {}, [activeTabKey])

  return (
    <div>
      <div>
        <Nav
          appearance="tabs"
          activeKey={activeTabKey}
          onSelect={setActiveTabKey}
        >
          {Object.keys(EVENT_KEYS).map((ek, i) => (
            <NavItem eventKey={ek} key={i} />
          ))}
        </Nav>
      </div>
      <div>
        <ItemsContainer activeKey={activeTabKey}></ItemsContainer>
      </div>
    </div>
  )
}
