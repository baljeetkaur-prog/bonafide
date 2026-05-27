import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaBuilding,
    FaWineBottle ,
    FaCalendarAlt,
} from "react-icons/fa";

import "./enquirypage-style.css";

const EnquirySection = () => {
    
    useEffect(() => {
            
        AOS.init({

            duration: 1200,

            once: false,

            mirror: true,

            offset: 80,

            easing: "ease-out-cubic",

        });

    }, []);

    return (
        <>

            <Helmet>

                {/* PAGE TITLE */}
                <title>
                    Enquiry | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Send your enquiry to Bonafide for premium glass bottled water solutions for hotels, restaurants, weddings, events, and corporate hospitality."
                />

                <meta
                    name="keywords"
                    content="Bonafide enquiry, bottled water enquiry, premium glass bottled water, hospitality water supplier, hotel water enquiry, restaurant bottled water"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />



                {/* OPEN GRAPH SEO */}
                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:site_name"
                    content="Bonafide"
                />

                <meta
                    property="og:title"
                    content="Enquiry | Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="Contact Bonafide for luxury hospitality and premium glass bottled water enquiries."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/enquiry-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/enquiry"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Enquiry | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Submit your enquiry for premium glass bottled water hospitality solutions."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/enquiry-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/enquiry"
                />

            </Helmet>


            {/* HERO BANNER */}
            <section className="abt-banner-wrapper d-flex justify-content-center align-items-center">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12">

                            <div className="header-banner text-center">

                                <h1 className="abt-banner-head"
                                    data-aos="fade-up" 
                                    data-aos-delay="1000"
                                >

                                    Enquiry Form

                                </h1>

                                <p
                                    data-aos="fade-up" 
                                    data-aos-delay="1000"
                                >

                                    Connect with Bonafide for premium
                                    glass bottled water solutions.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* ENQUIRY SECTION */}
            <section className="enquiry-section py-5">

                <div className="container py-5">

                    <div className="row justify-content-center">

                        <div className="col-lg-10">


                            {/* FORM WRAPPER */}
                            <div className="enquiry-wrapper">

                                <div className="text-center mb-5">

                                    <span className="enquiry-tagline text-uppercase fw-bold" 
                                          data-aos="fade-up" 
                                        data-aos-delay="1000"
                                    >
                                        Hospitality Enquiry

                                    </span>

                                    <h2 className="enquiry-heading mt-3 display-5 fw-bold text-dark"
                                        data-aos="fade-up" 
                                        data-aos-delay="1000"
                                    >

                                        Request Premium Water
                                        Supply Services

                                    </h2>

                                    <p className="enquiry-description mx-auto mt-3"
                                        data-aos="fade-up" 
                                        data-aos-delay="1000"
                                    >

                                        Fill out the enquiry form and our team
                                        will connect with you shortly.

                                    </p>

                                </div>



                                {/* FORM */}
                                <form>

                                    <div className="row g-4" 
                                        data-aos="zoom-in" 
                                        data-aos-delay="1200"
                                    >


                                        {/* FULL NAME */}
                                        <div className="col-md-6">

                                            <label className="form-label">

                                                Full Name

                                            </label>

                                            <div className="input-group custom-group">

                                                <span className="input-group-text">

                                                    <FaUser />

                                                </span>

                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your full name"
                                                />

                                            </div>

                                        </div>



                                        {/* EMAIL */}
                                        <div className="col-md-6">

                                            <label className="form-label">

                                                Email Address

                                            </label>

                                            <div className="input-group custom-group">

                                                <span className="input-group-text">

                                                    <FaEnvelope />

                                                </span>

                                                <input
                                                    type="email"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your email"
                                                />

                                            </div>

                                        </div>



                                        {/* PHONE */}
                                        <div className="col-md-6">

                                            <label className="form-label">

                                                Phone Number

                                            </label>

                                            <div className="input-group custom-group">

                                                <span className="input-group-text">

                                                    <FaPhoneAlt />

                                                </span>

                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your phone number"
                                                />

                                            </div>

                                        </div>



                                        {/* BUSINESS NAME */}
                                        <div className="col-md-6">

                                            <label className="form-label">

                                                Business Name

                                            </label>

                                            <div className="input-group custom-group">

                                                <span className="input-group-text">

                                                    <FaBuilding />

                                                </span>

                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter business name"
                                                />

                                            </div>

                                        </div>



                                        {/* SERVICE TYPE */}
                                        <div className="col-md-6">

                                            <label className="form-label">

                                                Service Type

                                            </label>

                                            <div className="input-group custom-group">

                                                <span className="input-group-text">

                                                    <FaWineBottle  />

                                                </span>

                                                <select
                                                    className="form-select custom-input"
                                                >

                                                    <option>
                                                        Select Service
                                                    </option>

                                                    <option>
                                                        Hotels & Restaurants
                                                    </option>

                                                    <option>
                                                        Events & Weddings
                                                    </option>

                                                    <option>
                                                        Corporate Supply
                                                    </option>

                                                </select>

                                            </div>

                                        </div>



                                        {/* EVENT DATE */}
                                        <div className="col-md-6">

                                            <label className="form-label">

                                                Event / Delivery Date

                                            </label>

                                            <div className="input-group custom-group">

                                                <span className="input-group-text">

                                                    <FaCalendarAlt />

                                                </span>

                                                <input
                                                    type="date"
                                                    className="form-control custom-input"
                                                />

                                            </div>

                                        </div>



                                        {/* MESSAGE */}
                                        <div className="col-12">

                                            <label className="form-label">

                                                Additional Information

                                            </label>

                                            <textarea
                                                rows="6"
                                                className="form-control custom-textarea"
                                                placeholder="Write your requirements..."
                                            ></textarea>

                                        </div>



                                        {/* BUTTON */}
                                        <div className="col-12 text-center">

                                            <button
                                                type="submit"
                                                className="btn btn-dark rounded-pill px-5 py-3"
                                            >

                                                Submit Enquiry

                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default EnquirySection;