import React, { useState } from 'react';
import './index.css';
import { Col, Container, Row } from 'react-bootstrap';
import data from '../../contexts/bikes.json';
function Motorcycles() {
  
        
    return(
      <>
      
        
        <Container>
          <Row>
          {data.map((details,index)=>{
            return <Col md="4" sm="6" lg="4" className="component-change">
            <a href="#">
          <img src={details.pic} className="component-image"/>
          <div style={{fontSize:"calc(17px + .25vw)"}}>{details.amount} Rs</div>
          <div>{details.year} - {details.km} km</div>
          <div>{details.title}</div>
          </a>
            </Col>
          })}
            
            
          </Row>
        </Container>
        </>

    );
}

export default Motorcycles;