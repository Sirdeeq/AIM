/* eslint-disable react/prop-types */
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TeamMemberCard = ({
  image,
  name,
  position,
  phoneNumber,
  email,
  socials,
}) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body className="text-center">
        <Card.Title as="h2" className="font-weight-bold">
          {name}
        </Card.Title>
        <Card.Text as="h4" className="text-muted">
          {position}
        </Card.Text>
        <Button variant="link" onClick={handlePhoneClick} className="d-block">
          <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
        </Button>
        <Button variant="link" onClick={handleEmailClick} className="d-block text-lowercase">
           {email}
        </Button>
      </Card.Body>
      {socials?.( <Card.Footer className="text-center">
        <Row>
          {socials?.facebook && (
            <Col>
              <Button variant="link" href={socials.facebook} target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Button>
            </Col>
          )}
          {socials?.twitter && (
            <Col>
              <Button variant="link" href={socials.twitter} target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Button>
            </Col>
          )}
          {socials?.instagram && (
            <Col>
              <Button variant="link" href={socials.instagram} target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Button>
            </Col>
          )}
          {socials?.linkedin && (
            <Col>
              <Button variant="link" href={socials.linkedin} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Button>
            </Col>
          )}
          {socials?.youtube && (
            <Col>
              <Button variant="link" href={socials.youtube} target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Button>
            </Col>
          )}
          {socials?.x && (
            <Col>
              <Button variant="link" href={socials.x} target="_blank">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </Button>
            </Col>
          )}
        </Row>
      </Card.Footer>)}
    </Card>
  );
};

export default TeamMemberCard;
