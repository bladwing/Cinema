import React from 'react';
import Social from './social'
import { NavLink } from 'react-router-dom'
 

function Menu() {
	return(
		<div className="row home-mega-menu ">
            <div className="col-md-12">
               <nav className="navbar navbar-default">
                  <div className="navbar-header">
                     <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     </button>
                  </div>
                  <div className="collapse navbar-collapse js-navbar-collapse megabg dropshd ">
                     <ul className="nav navbar-nav">
                        	<li>
                           		<NavLink to="/" activeClassName="selected">Home</NavLink>
                        	</li>
                        	<li>
                        		<NavLink to="/contact">Contact</NavLink>
                        	</li>
                     </ul>
                    <Social/>

                    
                     <div className="search-block">
                        <form>
                           <input type="search" placeholder="Search" />
                        </form>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
     


		)
}
export default Menu;