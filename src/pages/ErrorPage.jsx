import React from 'react';
import './ErrorPage.css';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="not-found-container">
      {/* Header with logo and icons */}
      <div className="header d-flex justify-content-between align-items-center p-3">
        <div className="logo d-flex align-items-center">
          <div className="logo-icon"></div>
        </div>
        <div className="header-icons d-flex gap-2">
          <div className="header-icon"></div>
          <div className="header-icon"></div>
          <div className="header-icon"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-fluid vh-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-lg-6 col-md-12">
            <div className="content-section px-4 px-lg-5">
              <h1 className="main-title mb-4">So Sorry!</h1>
              <p className="subtitle mb-5">
               {error && <p>{error.data}  </p>}
              </p>
              
              <div className="reasons-section mb-5">
                <h3 className="reasons-title mb-3">Possible Reasons</h3>
                <ul className="reasons-list">
                  <li>The address may have been typed incorrectly;</li>
                  <li>It may be a broken or outdated link.</li>
                </ul>
              </div>

              <div className="action-buttons">
                <NavLink to="/">
                  <button className="btn btn-primary me-3">Go To Home</button>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <div className="illustration-container">
              <div className="green-circle">
                <div className="clouds">
                  <div className="cloud cloud-1"></div>
                  <div className="cloud cloud-2"></div>
                </div>
                
                <div className="sad-envelope">
                  <div className="envelope-body">
                    <div className="envelope-flap"></div>
                    <div className="envelope-face">
                      <div className="eye eye-left"></div>
                      <div className="eye eye-right"></div>
                      <div className="mouth"></div>
                    </div>
                  </div>
                </div>
                
                <div className="scattered-papers">
                  <div className="paper paper-1"></div>
                  <div className="paper paper-2"></div>
                  <div className="paper paper-3"></div>
                  <div className="paper paper-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;