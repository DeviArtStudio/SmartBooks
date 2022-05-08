import { Icons } from '../../../../../constants/icons'
import { Col, Grid, Row } from 'rsuite'
import { MenuBigButton } from '../../menu-big-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function FileContainer() {
  return (
    <Grid fluid className="gridContainer">
      <Row>
        <Col>
          <MenuBigButton
            icon={<FontAwesomeIcon size="lg" icon={Icons.open} />}
            text="Open"
          />
        </Col>
        <Col>
          <MenuBigButton
            icon={<FontAwesomeIcon size="lg" icon={Icons.save} />}
            text="Save"
          />
        </Col>
        <Col>
          <MenuBigButton
            icon={<FontAwesomeIcon size="lg" icon={Icons.save_as} />}
            text="Save As"
          />
        </Col>
      </Row>
    </Grid>
  )
}
