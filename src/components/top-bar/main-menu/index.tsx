import { Nav } from 'rsuite';
import { useState } from 'react';

const EVENT_KEYS = {
    'file':   'file',
    'insert': 'insert',
    'some':   'some',
}

const TABS_TEXT = {
    [EVENT_KEYS.file]:   'File',
    [EVENT_KEYS.insert]: 'Insert',
    [EVENT_KEYS.some]:   'Some',
}

function NavItem ({ eventKey }: { eventKey: string }) {
    return <Nav.Item eventKey={ eventKey }>{ TABS_TEXT[eventKey] }</Nav.Item>
}

export function MainMenu () {
    const [activeTabKey, setActiveTabKey] = useState(EVENT_KEYS.file);

    return (
        <div>
            <div>
                <Nav appearance="tabs" activeKey={ activeTabKey } onSelect={ setActiveTabKey } >
                    { Object.keys(EVENT_KEYS).map((ek, i) =>
                        <NavItem eventKey={ ek } key={ i }/>) }
                </Nav>
            </div>
            <div>
            </div>
        </div>
    )
}
