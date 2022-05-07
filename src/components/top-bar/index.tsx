import { AccountInfo } from './account';
import { Grid, Row, Col } from 'rsuite';
import { MainMenu } from './main-menu';

export function TopBar () {
    return (
        <div>
            <Grid fluid>
                <Row>
                    <Col xs={20}><MainMenu/></Col>
                    <Col xs={4} ><AccountInfo/></Col>
                </Row>
            </Grid>
        </div>);
}
