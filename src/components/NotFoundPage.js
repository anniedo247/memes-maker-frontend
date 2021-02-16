import React from "react";
import notFoundPage from "../images/notFoundPage.png";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container>
      <img style={{width:"40%"}} src={notFoundPage} alt =''/>
      <h1 style={{color:"#e18de8"}}>404</h1>
      <h3 style={{color:"#e18de8"}}>This Page is Melted in the Sun.</h3>
      
    </Container>
  );
};

export default NotFoundPage;
