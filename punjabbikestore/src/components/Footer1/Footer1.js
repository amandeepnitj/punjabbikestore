import React from 'react';
import './index.css';
/**
* @author
* @function Footer1
**/

const Footer1 = () => {
  return(
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Punjab Motorcycle Store</h4>
          <h4 className="list-unstyled">
            <li>+919372764039</li>
            <li>Amritsar, Punjab</li>
          </h4>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Social Media Links</h4>
          <ui className="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href=" #">Twitter</a></li>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>Social Media Links</h4>
          <ui className="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href=" #">Twitter</a></li>
          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} PUNJAB BIKE STORE | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
   )

 }

export default Footer1