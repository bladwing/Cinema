import React from 'react';
import Social from './social';

function Contact() {
	return(
		 <div className="row auto-clear">
            <div className="col-lg-12 col-md-12">
               <div id="contact-page" className="row">
                  <div className="col-md-12">
                     <div className="content-box-opa dark-bg">
                        <article>
                           <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-12 post post-medium">
                                 <h2 className="title main-head-title text-left">map</h2>
                                 <div className="map-frame">
                                    <iframe title="mapFrame" className="img-responsive" height="450" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=hu&amp;geocode=&amp;q=2+Elizabeth+St,+Melbourne+Victoria+3000+Australia&amp;sll=37.0625,-95.677068&amp;sspn=46.226656,107.138672&amp;ie=UTF8&amp;hq=&amp;hnear=2+Elizabeth+St,+Victoria+3000,+Ausztr%C3%A1lia&amp;t=m&amp;z=14&amp;ll=-37.817917,144.965065&amp;output=embed"></iframe>
                                 </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                 <h2 className="title main-head-title text-left">contact</h2>
                                 <div className="contact-info">
                                    <h3>Tima Ponarenko / Junior FrontEnd Developer</h3>
                                    <ul>
                                       <li className="fa fa-chevron-right">Address: Dolidze Str. #11</li>
                                       <li className="fa fa-chevron-right">Phone: 555 43 12 96</li>
                                       <li className="fa fa-chevron-right">E-mail: timoti.ponarneko@gmail.com</li>
                                    </ul>
                                 </div>

                                 <Social />
                             </div>
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                 <h2 className="title main-head-title text-left">Sent your Question</h2>
                                 <div id="comment-form">
                                    <form name="comment-form1" method="post" action="#" id="comment-form1">
                                       <fieldset>
                                          <div className="row">
                                             <div className="col-md-12">
                                                <input type="text" name="contactname" id="contactname" placeholder="Your name" />
                                             </div>
                                             <div className="col-md-12">
                                                <input type="text" name="contactemail" id="contactemail" placeholder="Enter your email address" />
                                             </div>
                                             <div className="col-md-12">
                                                <textarea rows="10" name="comment" id="comment" cols="5" placeholder="Your message"/>
                                             </div>
                                             <div className="col-md-12">
                                                <button className="subscribe-btn" type="submit" title="Send Message">Send Message</button>
                                             </div>
                                          </div>
                                       </fieldset>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </article>
                     </div>
                  </div>
               </div>
            </div>
         </div>                 
                          
                                 
		)
}
export default Contact;