import { MenuItem } from '../../menu-item'
import { Icons } from '../../../../../constants/icons'
import { MenuButtonGroup } from '../../menu-button-group'
import { MenuToolbar } from '../../menu-toolbar'
import { Col, Divider, Grid, InputPicker, Row } from 'rsuite'
import { ItemDataType } from 'rsuite/esm/@types/common'

const menuItems = [
  {
    text: 'Bold',
    icon: Icons.bold,
  },
  {
    text: 'Italic',
    icon: Icons.italic,
  },
  {
    text: 'Underline',
    icon: Icons.underline,
  },
  {
    text: 'Align Left',
    icon: Icons.align_left,
  },
  {
    text: 'Align Center',
    icon: Icons.align_center,
  },
  {
    text: 'Align Right',
    icon: Icons.align_right,
  },
]

const textSizeItems = [
  {
    text: 'Size Up',
    icon: Icons.arrow_up,
  },
  {
    text: 'Size Down',
    icon: Icons.arrow_down,
  },
]

const textScriptItems = [
  {
    text: 'Subscript',
    icon: Icons.subscript,
  },
  {
    text: 'Superscript',
    icon: Icons.superscript,
  },
]

const listItems = [
  {
    text: 'Point List',
    icon: Icons.point_list,
  },
  {
    text: 'Number List',
    icon: Icons.number_list,
  },
]

export function EditorContainer() {
  const FontsData: ItemDataType[] = [
    {
      value: '0',
      label: 'Default font',
    },
  ]

  const FontsSizeData: ItemDataType[] = [
    {
      value: '0',
      label: '10',
    },
  ]

  return (
    <Grid fluid className="gridContainer">
      <Row>
        <Col>
          <div>
            <MenuToolbar>
              <InputPicker
                size="xs"
                style={{ width: 140 }}
                data={FontsData}
                menuStyle={{ fontSize: 12 }}
                placeholder="Font"
              ></InputPicker>
              <InputPicker
                size="xs"
                style={{ width: 70 }}
                data={FontsSizeData}
                menuStyle={{ fontSize: 10 }}
                placeholder="10"
              ></InputPicker>
              <MenuButtonGroup menuItems={textSizeItems} />
              <MenuItem icon={Icons.text_deformat} />
            </MenuToolbar>
          </div>

          <div className="innerRow">
            <MenuToolbar>
              <MenuButtonGroup menuItems={menuItems} />
              <MenuButtonGroup menuItems={textScriptItems} />
              <MenuItem icon={Icons.font} />
            </MenuToolbar>
          </div>
        </Col>
        <Col>
          <MenuToolbar>
            <Divider vertical />
            <MenuButtonGroup menuItems={listItems} />
          </MenuToolbar>
        </Col>
      </Row>
    </Grid>
  )
}
