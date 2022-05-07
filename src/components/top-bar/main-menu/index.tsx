import { Nav } from 'rsuite';

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
    return (
        <div>
            <Nav appearance="tabs">
                { Object.keys(EVENT_KEYS).map((ek, i) => <NavItem eventKey={ ek } key={ i }/>) }
            </Nav>

        </div>
    )
}
