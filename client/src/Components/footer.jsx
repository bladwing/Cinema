import React from 'react';
import Social from './social';
import FooterLogo from '../static/img/footer-logo.png';


function footer() {
	return(
		<div id="footer" className="container-fluid footer-background">
         <div className="container">
               <div className="row copyright-bottom text-center">
                  <div className="col-md-12 text-center">
                     <a href="/" className="footer-logo" title="ponarenko.com">
                      <img src={FooterLogo} className="img-responsive text-center" alt="Ponarenko.com" />
                     </a>	
                     <Social />
                     <p>&copy; Copyright 2019. All Rights Reserved.</p>
                     <a href="http://ponarenko.com" title="Template by Ponarenko">By Ponarenko</a>
                  </div>
               </div>
         </div>
      </div>
		)
}
export default footer;