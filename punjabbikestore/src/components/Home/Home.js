import React from 'react'
import { Container } from 'react-bootstrap'
import Motorcycles from '../Motorcycles/Motorcycles'
import Scooters from '../Scooters/Scooters'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <>
    <Container>
    <h2>Bikes</h2>
    <Motorcycles/>
    </Container>
    <Container>
    <h2>Scooters</h2>
    <Scooters/>
    </Container>
    </>
   )

 }

export default Home