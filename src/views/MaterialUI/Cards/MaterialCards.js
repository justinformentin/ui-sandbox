import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleCard from './SimpleCard';
import SimpleMediaCard from './SimpleMediaCard';
import MediaControlCard from './MediaControlCard';
import RecipeReviewCard from './RecipeReviewCard';

class MaterialButtons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Simple Card</strong>
              </CardHeader>
              <CardBody>
                <SimpleCard />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>UI Control Card</strong>
              </CardHeader>
              <CardBody>
                <MediaControlCard />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Simple Media Card</strong>
              </CardHeader>
              <CardBody>
                <SimpleMediaCard />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Complex Card</strong>
              </CardHeader>
              <CardBody>
                <RecipeReviewCard />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MaterialButtons;
