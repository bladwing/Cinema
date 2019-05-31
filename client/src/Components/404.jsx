import React from 'react';
import notFound from '../static/img/404.jpg';

function NotFound() {
	return(
		 <div className="row">
            <div className="container">
                     <div className="video-info dropshd">
                        <h2 className="title main-head-title">Ooops, there is nothing. Please go to <a href="/">Home page</a>.</h2>
                        <div className="thumbr">
                           <img className="img-responsive" src={notFound} alt="#" />
                        </div>
                     </div>
               </div>
            </div>
		)
};
export default NotFound;