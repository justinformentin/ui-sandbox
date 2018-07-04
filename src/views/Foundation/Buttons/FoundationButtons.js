import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Button from 'react-foundation-components/lib/button';
import { ButtonGroup } from 'react-foundation-components/lib/button-group';
import { ShowForScreenSize, ShowForScreenReader, HideForScreenSize } from 'react-foundation-components/lib/visibility';
import buttonstyle from './buttonstyle.css';


class FoundationButtons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Standard Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" >
                <Button href="../typography/base">Learn More</Button>
                <Button href="../general/visibility#mainContent">View All Features</Button>
                <Button color="success">Save</Button>
                <Button color="alert">Delete</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Sizing Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button size="tiny">So Tiny</Button>
                <Button size="small">So Basic</Button>
                <Button size="large">So Large</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Coloring Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                <Button color="primary">Primary Color</Button>
                <Button color="secondary">Secondary Color</Button>
                <Button color="success">Success Color</Button>
                <Button color="alert">Alert Color</Button>
                <Button color="warning">Warning Color</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Disabled Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button color="primary" disabled>Primary Color</Button>
                <Button color="secondary" disabled>Secondary Color</Button>
                <Button color="success" disabled>Success Color</Button>
                <Button color="alert" disabled>Alert Color</Button>
                <Button color="warning" disabled>Warning Color</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Hollow Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button color="primary" hollow>Primary Color</Button>
                <Button color="secondary" hollow>Secondary Color</Button>
                <Button color="success" hollow>Success Color</Button>
                <Button color="alert" hollow>Alert Color</Button>
                <Button color="warning" hollow>Warning Color</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Dropdown Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button dropdown size="tiny">Dropdown Button</Button>
                <Button dropdown size="small">Dropdown Button</Button>
                <Button dropdown>Dropdown Button</Button>
                <Button dropdown size="large">Dropdown Button</Button>
                <Button dropdown expanded>Dropdown Button</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Group Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              < ButtonGroup>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Sizing Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" >
              <ButtonGroup size="tiny">
                <Button>Tiny</Button>
                <Button>Button</Button>
                <Button>Group</Button>
                </ButtonGroup>
                <ButtonGroup size="small">
                <Button>Small</Button>
                <Button>Button</Button>
                <Button>Group</Button>
                </ButtonGroup>
                <ButtonGroup size="large">
                <Button>Large</Button>
                <Button>Button</Button>
                <Button>Group</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Coloring Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <ButtonGroup>
                <Button color="primary">Save</Button>
                <Button color="secondary">View</Button>
                <Button color="success">Edit</Button>
                <Button color="warning">Share</Button>
                <Button color="alert">Delete</Button>
                </ButtonGroup>
                <ButtonGroup color="alert">
                <Button>Harder</Button>
                <Button>Better</Button>
                <Button>Faster</Button>
                <Button>Stronger</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Even-Width Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                <ButtonGroup expanded>
                <Button>Expanded</Button>
                <Button>Button</Button>
                <Button>Group</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Stacking Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <ButtonGroup stack>
                <Button>How</Button>
                <Button>Low</Button>
                <Button>Can</Button>
                <Button>You</Button>
                <Button>Go</Button>
                </ButtonGroup>
                <ButtonGroup stack="medium">
                <Button>How</Button>
                <Button>Low</Button>
                <Button>Can</Button>
                <Button>You</Button>
                <Button>Go</Button>
                </ButtonGroup>
                <ButtonGroup stack="small">
                <Button>How</Button>
                <Button>Low</Button>
                <Button>Can</Button>
                <Button>You</Button>
                <Button>Go</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Split Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <ButtonGroup>
                <Button>Primary Action</Button>
                <Button dropdown dropdownArrowOnly>
                <ShowForScreenReader>Show Menu</ShowForScreenReader>
                </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Flexbox Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12">
                <ButtonGroup stack="small">
                <Button color="primary">I</Button>
                <Button color="secondary">Am</Button>
                <Button color="success">Using</Button>
                <Button color="warning">Flexbox</Button>
                <Button color="alert">Yay!</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default FoundationButtons;
