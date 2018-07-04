import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardButtons from './StandardButtons';

class MUICSSButtons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Outline Buttons</strong>
          </CardHeader>
          <CardBody>
            <p>
              Use <code>outline</code> prop
            </p>
            <Row className="align-items-center">
              <Col col="12" >
                <StandardButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Text Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <StandardButtons />
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
                <StandardButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Floating Action Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <StandardButtons />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MUICSSButtons;
