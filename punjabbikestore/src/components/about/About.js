import React, { useState } from 'react';
import firebaseConfig from '../../Firebase.js';
import {Redirect} from 'react-router-dom';
import './index.css';
import { Col, Container, Row } from 'react-bootstrap';
import data from '../../contexts/bikes.json';
function About() {
  
        
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
            
            <Col md="4" sm="6" lg="4" className="component-change">
            <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" className="component-image"/>
          <div style={{fontSize:"calc(17px + .25vw)"}}>11500 Rs</div>
          <div>2016 - 12000 km</div>
          <div>Pulsor</div>
          </a>
            </Col>
            
          </Row>
        </Container>
        </>

    );
}

export default About;