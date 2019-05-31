import React from 'react';
import Logo from '../static/img/main-logo.png'

function Header() {
   return(
         <div className="row header-top">
            <div className="col-lg-3 col-md-6 col-sm-5 col-xs-8">
               <a className="main-logo" href="/"><img src={Logo} className="main-logo img-responsive" alt="Muvee Reviews" title="Muvee Reviews" /></a>
            </div>
            <div className="col-lg-6 hidden-md text-center hidden-sm hidden-xs">
               
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 hidden-xs">
               <div className="right-box">
                  <a href="/login" className="access-btn" data-toggle="modal" data-target="#enquirypopup">Login In</a>
               </div>
            </div>
         </div>

      )
}



export default Header;
