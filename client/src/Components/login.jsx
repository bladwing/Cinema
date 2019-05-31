import React from 'react';

function login() {
	return(
		  <div className="row">
            <div className="container">
               <section className="registration col-lg-12 col-md-12">
                  <div className="row secBg">
                     <div className="large-12 columns">
                        <div className="login-register-content">
                           <div className="row" data-equalizer data-equalize-on="medium" id="test-eq">
                              <div className="col-md-12 text-center login-header">
                                 <h2 className="title main-head-title">User Login - Get Premium</h2>
                              </div>
                              <div className="clearfix spacer"></div>
                              <div className="col-md-5 social-login">
                                 <div className="social-login" data-equalizer-watch>
                                    <h2 className="title main-head-title">Login via Social Profile</h2>
                                    <div className="social-login-btn social-facebook">
                                       <a href="/"><i className="fa fa-facebook"></i>login via facebook</a>
                                    </div>
                                    <div className="social-login-btn social-twitter">
                                       <a href="/"><i className="fa fa-twitter"></i>login via twitter</a>
                                    </div>
                                    <div className="social-login-btn social-google-plus">
                                       <a href="/"><i className="fa fa-google-plus"></i>login via google plus</a>
                                    </div>
                                    <div className="social-login-btn social-youtube">
                                       <a href="/"><i className="fa fa-youtube"></i>login via YouTube</a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-2">
                                 <div className="middle-sep">
                                    <i className="fa fa-arrow-left arrow-left"></i>
                                    <span>OR</span>
                                    <i className="fa fa-arrow-right arrow-right"></i>
                                 </div>
                              </div>
                              <div className="col-md-5">
                                 <div className="register-form">
                                    <h2 className="title main-head-title">Create your account</h2>
                                    <form method="post" data-abide noValidate>
                                       <div className="input-group">
                                          <span className="fa fa-user login-inputicon"></span>
                                          <input type="text" placeholder="Enter your username" required />
                                       </div>
                                       <div className="input-group">
                                          <span className="fa fa-lock login-inputicon"></span>
                                          <input type="password" id="password" placeholder="Enter your password" required /> 
                                       </div>
                                       <div className="checkbox">
                                          <input id="remember" type="checkbox" name="check" value="remember" />
                                          <label className="customLabel" htmlFor="remember">Remember me</label>
                                       </div>
                                       <div className="login-btn-box">
                                          <button className="access-btn" type="submit" name="submit">login Now</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
		)
};
export default login;