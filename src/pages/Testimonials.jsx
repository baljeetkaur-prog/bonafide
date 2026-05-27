import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import AOS from "aos";
import "aos/dist/aos.css";

import "./testimonials-style.css";

const TestimonialsSection = () => {

    const testimonials = [

        {
            id: 1,
            name: "James Walker",
            designation: "Hotel Manager",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
            review:
                "Bonafide completely elevated our guest experience with elegant glass bottled water.",
            rating: 5,
        },

        {
            id: 2,
            name: "Sophia Miller",
            designation: "Restaurant Owner",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
            review:
                "Premium presentation and exceptional quality perfectly match our restaurant atmosphere.",
            rating: 5,
        },

        {
            id: 3,
            name: "Daniel Carter",
            designation: "Event Planner",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
            review:
                "Luxury wedding events feel more refined with Bonafide water bottles.",
            rating: 4,
        },

        {
            id: 4,
            name: "Emma Wilson",
            designation: "Corporate Manager",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop",
            review:
                "Professional and elegant hydration solutions for meetings and conferences.",
            rating: 5,
        },

        {
            id: 5,
            name: "Michael Brown",
            designation: "Resort Director",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
            review:
                "Guests instantly notice the premium quality and presentation difference.",
            rating: 5,
        },

        {
            id: 6,
            name: "Olivia Davis",
            designation: "Wedding Organizer",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
            review:
                "Bonafide adds sophistication and luxury to every wedding celebration.",
            rating: 5,
        },

        {
            id: 7,
            name: "William Scott",
            designation: "Restaurant Director",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
            review:
                "Elegant packaging and premium water quality perfectly fit our luxury dining experience.",
            rating: 4,
        },

        {
            id: 8,
            name: "Ava Johnson",
            designation: "Event Coordinator",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
            review:
                "Every event feels more premium and professional with Bonafide glass bottles.",
            rating: 5,
        },
        {
            id: 9,
            name: "Ava Johnson",
            designation: "Event Coordinator",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
            review:
                "Every event feels more premium and professional with Bonafide glass bottles.",
            rating: 5,
        },
        {
            id: 10,
            name: "Ava Johnson",
            designation: "Event Coordinator",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
            review:
                "Every event feels more premium and professional with Bonafide glass bottles.",
            rating: 5,
        },

    ];


    /* PAGINATION */
    const reviewsPerPage = 9;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        testimonials.length / reviewsPerPage
    );

    const startIndex =
        (currentPage - 1) * reviewsPerPage;

    const currentReviews = testimonials.slice(
        startIndex,
        startIndex + reviewsPerPage
    );


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
                    Testimonials | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Read what hotels, restaurants, event planners, and corporate clients say about Bonafide premium glass bottled water experiences."
                />

                <meta
                    name="keywords"
                    content="Bonafide testimonials, premium bottled water reviews, hotel water service reviews, restaurant hospitality water, luxury bottled water feedback, glass bottled water testimonials"
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
                    content="Client Testimonials | Bonafide"
                />

                <meta
                    property="og:description"
                    content="Explore real client experiences with Bonafide premium glass bottled water solutions."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/testimonials-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/testimonials"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Client Testimonials | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Luxury hospitality partners trust Bonafide premium glass bottled water."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/testimonials-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/testimonials"
                />

            </Helmet>

            {/* HERO SECTION */}
            <section className="abt-banner-wrapper d-flex justify-content-center align-items-center">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12">

                            <div className="header-banner text-center">

                                <h1 className="abt-banner-head">
                                    Testimonials
                                </h1>

                                <p>
                                    What Our Hospitality Partners Say
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* TESTIMONIAL SECTION */}
            <section className="testimonial-section py-5">

                <div className="container py-5">


                    {/* HEADING */}
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="1200">

                        <span className="text-uppercase theme-color testimonial-tagline">
                            Client Reviews
                        </span>

                        <h2 className="display-5 fw-bold testimonial-heading mt-3">
                            Trusted By Hospitality
                            Professionals
                        </h2>

                        <p className="testimonial-description mx-auto mt-3">

                            Discover how Bonafide is enhancing premium hospitality
                            experiences through elegant glass bottled water solutions.

                        </p>

                    </div>



                    {/* REVIEW GRID */}
                    <div className="row g-4">

                        {currentReviews.map((review) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={review.id} 
                                data-aos="fade-up"
                                data-aos-delay={review.id * 100}
                            >

                                <div className="review-card h-100">

                                    {/* TOP AREA */}
                                    <div className="review-top-wrapper">

                                        {/* USER INFO */}
                                        <div className="d-flex align-items-center mb-2">

                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="review-user-image"
                                            />

                                            <div className="ms-3">

                                                <h5 className="review-name">
                                                    {review.name}
                                                </h5>

                                                <span className="review-designation">
                                                    {review.designation}
                                                </span>

                                            </div>

                                        </div>

                                        {/* GOOGLE ICON */}
                                        <div className="google-review-icon">

                                             <FcGoogle />

                                        </div>

                                    </div>



                                    {/* STARS */}
                                    <div className="review-rating-wrapper mb-3">

                                        <div className="review-stars">

                                            {[...Array(5)].map((_, index) => (

                                                <FaStar
                                                    key={index}
                                                    className={
                                                        index < review.rating
                                                            ? "star-icon active"
                                                            : "star-icon"
                                                    }
                                                />

                                            ))}

                                        </div>

                                        <span className="rating-number">

                                            {review.rating}.0

                                        </span>

                                    </div>



                                    {/* REVIEW TEXT */}
                                    <p className="review-text">

                                        {review.review}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>



                    {/* PAGINATION */}
                    <div className="d-flex justify-content-center mt-5">

                        <nav data-aos="fade-up" data-aos-delay="600" >
                            <ul className="pagination custom-pagination">
                                {/* PREVIOUS */}
                                <li
                                    className={`page-item ${
                                        currentPage === 1
                                            ? "disabled"
                                            : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() =>
                                            setCurrentPage(currentPage - 1)
                                        }
                                    >
                                        Previous

                                    </button>
                                </li>



                                {/* PAGE NUMBERS */}
                                {[...Array(totalPages)].map((_, index) => (

                                    <li
                                        key={index}
                                        className={`page-item ${
                                            currentPage === index + 1
                                                ? "active"
                                                : ""
                                        }`}
                                    >

                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                setCurrentPage(index + 1)
                                            }
                                        >

                                            {index + 1}

                                        </button>

                                    </li>

                                ))}



                                {/* NEXT */}
                                <li
                                    className={`page-item ${
                                        currentPage === totalPages
                                            ? "disabled"
                                            : ""
                                    }`}
                                >

                                    <button
                                        className="page-link"
                                        onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                        }
                                    >

                                        Next

                                    </button>

                                </li>

                            </ul>

                        </nav>

                    </div>

                </div>

            </section>
        </>
    );
};

export default TestimonialsSection;