import { Col, CustomProvider, Grid, Row } from 'rsuite'

import { TopBar } from './components/top-bar'
import 'rsuite/styles/index.less'
import { useEffect, useState } from 'react'
import { Themes } from './data/interfaces/Themes'
import LocalDataStorage from './local-storage'
import { STORAGE_PROPS } from './constants/storage'

import './style.css'
import { Editor } from './components/editor'

export function App() {
  const [appliedTheme, setTheme] = useState<Themes>('dark')
  // const onClick                  = () => {
  //     setTheme(appliedTheme === 'dark' ? 'high-contrast' : appliedTheme === 'high-contrast' ? 'light' : 'dark');
  // }
  //         <Button onClick={ onClick }>Change theme</Button>

  useEffect(() => {
    const theme = LocalDataStorage.getInstance().getValue<Themes>(
      STORAGE_PROPS.theme
    )
    if (theme !== appliedTheme) {
      setTheme(theme)
    }
  }, [])

  return (
    <CustomProvider theme={appliedTheme}>
      <Grid fluid className="mainGrid">
        <Row>
          <TopBar />
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={18}>
            <Editor />
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Grid>
    </CustomProvider>
  )
}
