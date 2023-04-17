import React from 'react';
import Link from 'next/link';
import {BsFillEnvelopeAtFill, BsGlobeAmericas, BsTelephoneFill} from 'react-icons/bs';
import Login from './Login/Login.js';
import Register from './Login/register.js';
import Image from 'next/image';

export default function footer() {
  return (
    <>
      <footer className="text-center text-lg-start" style={{'background':'#FF4C36', color:'white'}}>

        <section className="" style={{paddingTop:"20px"}}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <Image
                    src="/cnt-logo.png"
                    alt="Charge and Tarry Logo"
                    style={{minWidth: "4rem", minHeight:'3rem'}}
                    width='50'
                    height='40'
                  />
                </h6>
                <p>
                  Our mission is to provide users with a sense of community by giving them the ability to share 30-minute
                  activities near charging ports for their electric vehicles.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Users
                </h6>
                <p>
                  <Link href="/authenticated" className="text-reset">Profile Page</Link>
                </p>
                <Register footer='Sign Up Today!'/>
                <Login footer='Sign In'/>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><BsGlobeAmericas/>&nbsp;&nbsp;&nbsp;&nbsp; New York, NY 10012, US</p>
                <p>
                  <BsFillEnvelopeAtFill/>&nbsp;&nbsp;&nbsp;&nbsp;
                  info@ChargeAndTarry.com
                </p>
                <p><BsTelephoneFill/>&nbsp;&nbsp;&nbsp;&nbsp; (999) 999-9999</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.01)"}}>
          © 2023 Copyright: Charge and Tarry Inc.
        </div>
      </footer>
    </>
  )
}