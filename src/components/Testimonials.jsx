// src/components/Testimonials.jsx

import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial-style.css";

const Testimonials = () => {

    const testimonials = [

        {
            id: 1,
            name: "Aarav Sharma",
            role: "Fitness Trainer",
            image: "/imgs/user-1.jpg",
            review:
                "BONAFIDE water feels incredibly pure and refreshing. Perfect for daily hydration and workouts.",
        },

        {
            id: 2,
            name: "Emily Johnson",
            role: "Restaurant Owner",
            image: "/imgs/user-2.jpg",
            review:
                "Our customers love the premium glass bottle presentation. Elegant, sustainable, and refreshing.",
        },

        {
            id: 3,
            name: "Rajveer Singh",
            role: "Health Coach",
            image: "/imgs/user-1.jpg",
            review:
                "Naturally balanced taste with a premium feel. BONAFIDE truly delivers quality hydration.",
        },

        {
            id: 4,
            name: "Sophia Miller",
            role: "Yoga Instructor",
            image: "/imgs/user-3.jpg",
            review:
                "Beautiful packaging and crystal clear water quality. It feels luxurious and healthy.",
        },

    ];


    //   useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     // SECTION HEADING
    //     gsap.from(".testi-heading ", {
    //         scrollTrigger: {
    //             trigger: ".testimonials-section",
    //             start: "top 85%",
    //             toggleActions: "play none none reverse",
                
    //         },
    
    //         y: 80,
    //         opacity: 0,
    //         duration: 1.3,
    //         ease: "power3.out",
    //     });

    // }, []);
    return (

        <section className="testimonials-section">

            {/* Section Glow */}
            <div className="testimonial-glow testimonial-glow-1"></div>
            <div className="testimonial-glow testimonial-glow-2"></div>

            <div className="container-fluid px-lg-5">

                {/* SECTION TITLE */}

                <div className="testi-heading section-heading text-center" 
                     data-aos="fade-up" 
                     data-aos-delay="500"
                >

                    <span className="testi-subtitle section-subtitle">
                        TESTIMONIALS
                    </span>

                    <h2 className="testi-title section-title">
                        What Our Customers
                        <span> Say About BONAFIDE</span>
                    </h2>

                </div>

                {/* SWIPER */}

                <Swiper

                    modules={[Autoplay, Pagination]}

                    spaceBetween={30}

                    slidesPerView={3}

                    loop={true}

                    speed={1200}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true,
                    }}


                    breakpoints={{

                        0: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1200: {
                            slidesPerView: 3,
                        },

                    }}

                    className="testimonial-swiper"
                    data-aos="fade-up" 
                    data-aos-delay="600"
                >

                    {testimonials.map((item) => (

                        <SwiperSlide key={item.id}>

                            <div className="testimonial-card">

                                {/* Quote Icon */}

                                <div className="quote-icon">

                                    <i className="fa-solid fa-quote-right"></i>

                                </div>

                                {/* Review */}

                                <p className="testimonial-text">

                                    {item.review}

                                </p>

                                {/* User */}

                                <div className="testimonial-user">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>

                                        <h4>{item.name}</h4>

                                        <span>{item.role}</span>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>

    );
};

export default Testimonials;