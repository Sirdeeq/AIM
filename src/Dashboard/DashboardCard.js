/* eslint-disable react/prop-types */
import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

const DashboardCard = ({
  graph,
  title,
  number,
  description,
  rangePercentage,
  isPositive,
}) => {
  return (
    <Card xs={12} md={12}
      className="dashboard-card">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            {graph}
          </Col>
          <Col xs={12} md={8}>
            <h5 className="card-title">{title}</h5>
            <h2 className="number-display">{number}</h2>
            <p className="card-description">{description}</p>
            <div className="range-percentage">
              <span
                className={`percentage-text ${
                  isPositive ? "text-success" : "text-danger"
                }`}
              >
                {rangePercentage}%
              </span>
            </div>
            <ProgressBar
              now={rangePercentage}
              variant={isPositive ? "success" : "danger"}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
