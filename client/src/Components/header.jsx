import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../static/img/main-logo.png';

function Header() {
   return(
         <div className="row header-top">
            <div className="col-lg-3 col-md-6 col-sm-5 col-xs-8">
               <a className="main-logo" href="/"><img src={Logo} className="main-logo img-responsive" alt="Ponarenko" title="Cinema" /></a>
            </div>

            <div className="col-lg-6 hidden-md text-center hidden-sm hidden-xs"></div>

            <div className="col-lg-3 col-md-6 col-sm-7 hidden-xs">
               <div className="right-box">
                  <NavLink to="/login" className="access-btn">Login In</NavLink>
               </div>
            </div>
         </div>

      )
}
export default Header;
