import React from 'react';
import {NavLink} from 'react-router-dom';

function Social() {
	return(
		<ul className="social">
			<li className="social-facebook">
				<NavLink to="https://www.facebook.com/timoti.ponarenko/" className="fa fa-facebook social-icons" target="_blank" rel="noopener noreferrer"> </NavLink>
			</li>
			<li className="social-google-plus">
				<NavLink to="#" className="fa fa-google-plus social-icons" target="_blank" rel="noopener noreferrer"> </NavLink>
			</li>
			<li className="social-twitter">
				<NavLink to="#" className="fa fa-twitter social-icons" target="_blank" rel="noopener noreferrer"> </NavLink>
			</li>
			<li className="social-youtube">
				<NavLink to="#" className="fa fa-youtube social-icons" target="_blank" rel="noopener noreferrer"> </NavLink>
			</li>
			<li className="social-rss">
				<NavLink to="#" className="fa fa-rss social-icons" target="_blank" rel="noopener noreferrer"> </NavLink>
			</li>
		</ul>
		)
}
export default Social;