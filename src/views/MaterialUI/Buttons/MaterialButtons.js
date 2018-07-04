import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedButtons from './OutlinedButtons';
import ContainedButtons from './ContainedButtons';
import TButtons from './TButtons';
import FAButtons from './FAButtons';
import TabContainer from './TabContainer';
import ButtonSizes from './ButtonSizes';
import IconLabelButtons from './IconLabelButtons';
import IconButtons from './IconButtons';
import ButtonBases from './ButtonBases'

class MaterialButtons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Text Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" >
                <TButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Outlined Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <OutlinedButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Contained Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                <ContainedButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Icon Label Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <IconLabelButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Floating Action Buttons</strong>
              </CardHeader>
              <CardBody>
                <FAButtons />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Icon Buttons</strong>
              </CardHeader>
              <CardBody>
                <IconButtons />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Tab Container</strong>
              </CardHeader>
              <CardBody>
                <TabContainer />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
              </CardHeader>
              <CardBody>
                <ButtonSizes />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card>
          <CardHeader>
            <strong>Icon Label Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <ButtonBases />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MaterialButtons;
