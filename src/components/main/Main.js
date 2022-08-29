import React from "react";
import "./Main.css";
import image from './../../assets/images/woman.jpg';
import addImage from './../../assets/images/strapi-assets-ad1_4f1e1f1e12.png';
import join from './../../assets/images/join-p1.e4ec52fa.png';


export default function Main(props) {
    const bgImage = {
        backgroundImage: `url(${image})`
    }
    const buttonStyle = {backgroundColor: 'transparent', border: 'none', padding: '0px', font: 'inherit', color: 'inherit', cursor: 'pointer'}
    return(
        <div className="blog-page-css">
            <div className="container">
                <div className="ps-xl-0 blog-detail-container">
                    <div className="blog-breadcrumb">
                        <a href="#">Back</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12 col-xs-12">
                        <h2 className="heading blog-detail-heading">4 Research-Backed Tips to Improve Your Online Teaching Presence</h2>
                        <div className="normal text-muted d-flex align-items-center">
                            <img src={image} alt="" className="blog-detail-author-img"/>
                            <div>
                                <span className="blog-detail-author-name">Yamini Nagharajan</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <a href="#">
                                <button type="button" className="tutor-tags text-dark border py-1 px-2 my-1 caption fit-content blog-details-tag btn">Skill Development</button>
                            </a>
                            <a href="#">
                                <button type="button" className="tutor-tags text-dark border py-1 px-2 my-1 caption fit-content blog-details-tag btn">Teaching</button>
                            </a>
                            <a href="#">
                                <button type="button" className="tutor-tags text-dark border py-1 px-2 my-1 caption fit-content blog-details-tag btn">Online Learning</button>
                            </a>

                        </div>
                        <div className="mt-md-5 pt-3 mt-3 blog-detail-heading-image" style={bgImage}>
                        </div>
                        <div className="blog-content">
                            <div>
                                <div className="flex-column-reverse flex-md-row border-md-0 rounded row">
                                    <div className="d-flex flex-column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <span font-size="14" className="wysiwyg body-para blogcard-detail-content" id="blogcard-detail-content"><p>Things dramatically changed when Covid-19 entered our lives in 2020.  things are improving, the effects brought about by this novel virus are still being experienced, including in the educational system. Several educational institutions have switched from physical to online teaching methods. According to research from the University of Potomac, 77% of educators believe online learning is just as good as traditional learning. Nearly 70% of students agreed with their mentors. However, as the physical distance increases between teachers and students, so can the psychological and emotional space. Hence, establishing a strong teaching presence becomes extremely important for an online learning environment. </p>
                                        <p>Here are four research-backed tips to improve your online teaching presence.</p>
                                        <h4 id="1buildconnectionswithyourstudents"><strong>1. Build Connections with Your Students</strong></h4>
                                        <p>Dr. Judith V. Boettcher, the author of A Faculty Guide for Moving Teaching and Learning to the Web, emphasises the importance of interaction between teachers and students. The author says the way teachers interact with their students online plays a big role in creating a relationship of trust. It is essential to demonstrate to kids that the teacher is personally interested and invested in their journey. </p>
                                        <h4 id="2setupstrategicplanning"><strong>2. Set Up Strategic Planning</strong></h4>
                                        <p>Your presence as a teacher doesn't begin in the classroom—it begins long before, as you plan the flow and sequencing of your lessons for an upcoming class. “What we know from research is that effective online learning results from careful instructional design and planning,” Charles Hodges, professor of instructional technology at Georgia Southern University and his colleagues write. Struggling to find files, links, or browser tabs can cause your stress level to rise, which students will feel and mirror. Before you arrive in the classroom, practice moving through a lesson until you feel more familiar with the logistics of toggling between windows, for example, or changing the settings of your tools on the fly as circumstances require.</p>
                                        <p><img src="https://d17thj9kqp1mkn.cloudfront.net/strapi-assets-medium_shot_smiley_woman_with_book_c89a4f0545.jpg" alt="medium-shot-smiley-woman-with-book.jpg" style={{width: '100%'}} /></p>
                                        <h4 id="3createmaintainastrongpresence"><strong>3. Create &amp; Maintain a Strong Presence</strong></h4>
                                        <p>In 2015, a report was conducted involving approximately 50 studies that explored the online learning environment. The results declared that stronger the online presence of the educator, higher the effectiveness of student learning. Consider sending a message to all students (by video, if possible), to welcome them to online learning and reassure them their journey will be just as solid. Get them talking through a discussion boards. You can also communicate with your students in their style by using non-verbal communication, such as emojis. </p>
                                        <h4 id="4receiveincorporatestudentfeedback"><strong>4. Receive &amp; Incorporate Student Feedback</strong></h4>
                                        <p>In a 2019 study, researchers found successful online instructors frequently collected student feedback to identify what was working or not. “An important element in the development of an award-winning course was the way in which instructors had collected data on the course or engaged with existing evaluation data, reflected on how to improve the course and made improvements,” explain the authors of the study.</p>
                                        <p>To make students realise their opinions matter, you can ask them these questions:</p>
                                        <ul>
                                            <li>On a scale from 1 to 5, how comfortable do you feel using technology in our virtual classroom?</li>
                                            <li>Have you encountered any technical issues, such as not being able to hear me, or not being able to connect to the internet?</li>
                                            <li>Are my lessons well-organised and my assignments clear?</li>
                                            <li>Can you easily find what you need?⁣</li>
                                            <li>Do you feel like your voice is heard?</li>
                                            <li>What can I do to improve our online classroom?</li>
                                        </ul>
                                        <p>Simple yet effective strategies—like greeting students at the door; doing a rose and thorn check-in; or asking students to share an appreciation, apology can also make the difference in your virtual classroom. Following these above tips will further set a steady pace when conducting your online classes. Thus, students will be able to keep up with the syllabus and grasp the concepts teachers try so hard to convey.</p></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-block">
                            <div className="blog-details-shareblock">
                                <span className="blog-details-share-text">Share on</span>
                                <div className="blog-details-share">
                                    <div className="blog-details-share-icon" style={{color: 'rgb(87, 109, 224)'}}>
                                            <button aria-label="facebook" className="react-share__ShareButton" style={buttonStyle}>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="blog-details-share-icon" style={{color: 'rgb(102, 176, 240)'}}>
                                        <button aria-label="linkedin" className="react-share__ShareButton" style={buttonStyle}>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="blog-details-share-icon" style={{color: 'rgb(102, 176, 240)'}}>
                                        <button aria-label="twitter" className="react-share__ShareButton" style={buttonStyle}>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="blog-detail-right">
                            <div className="blog-sidebar">
                                <div className="blog-sidebar-content">
                                    <h4>Recent Articles</h4>
                                    <div className="blog-sidebar-cards">
                                        <div className="sidebarcards">
                                            <div className="d-flex">
                                                <div className="sidebarcards-left d-flex align-items-center">
                                                    <a href="/blog-detail/68/4-research-backed-tips-to-improve-your-online-teaching-presence">
                                                        <img src="https://d17thj9kqp1mkn.cloudfront.net/strapi-assets-small_young_beautiful_woman_works_office_speak_video_call_laptop_fab3f4e101.jpg" alt="4 Research-Backed Tips to Improve Your Online Teaching Presence" className="sidebarcard-img"/>
                                                    </a>
                                                </div>
                                                <div className="sidebarcards-right">
                                                    <span>
                                                        <a href="/blog-detail/68/4-research-backed-tips-to-improve-your-online-teaching-presence" className="sidebar-title">
                                                            4 Research-Backed Tips to Improve Your Online Teaching Presence
                                                        </a>
                                                    </span>
                                                    <div className="author-container">
                                                        <span className="author-title-container">
                                                            Article by <span className="author-name">Yamini Nagharajan</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebarcards">
                                            <div className="d-flex">
                                                <div className="sidebarcards-left d-flex align-items-center">
                                                    <a href="/blog-detail/67/8-tips-to-organise-your-curriculum">
                                                        <img src="https://d17thj9kqp1mkn.cloudfront.net/strapi-assets-small_marten_bjork_r_H8_O0_FH_Fpfw_unsplash_ab568c17e7.jpg" alt="8 Tips to Organise Your Curriculum" className="sidebarcard-img"/>
                                                    </a>
                                                </div>
                                                <div className="sidebarcards-right">
                                                    <span>
                                                        <a href="/blog-detail/67/8-tips-to-organise-your-curriculum" className="sidebar-title">
                                                            8 Tips to Organise Your Curriculum
                                                        </a>
                                                    </span>
                                                    <div className="author-container">
                                                        <span className="author-title-container">
                                                            Article by <span className="author-name">Khushboo Motihar</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/blog">
                                            <div className="sidebar-center">
                                                <span> See More Stories </span>
                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-detail-ad">
                                <a href="#" target="_blank">
                                    <img src={addImage} alt="Ad 1" className="blog-detail-ad-img"/>
                                </a>
                            </div>
                            <div className="blog-detail-ad-1">
                                <a href="#" target="_blank">
                                    <img src={addImage} alt="Click for Details" className="blog-detail-ad-img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="ps-xl-0 top-tags-container">
                    <h2 className="heading ">Top Tags</h2>
                    <div>
                        <div xl="12" lg="12" md="12" sm="12" xs="12">
                            <div className="row">
                                <div className="d-flex justify-content-center flex-column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="d-flex flex-wrap">
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Teaching</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Time</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Study</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Preparation</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Tutor</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Education</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Digital</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Exam</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Learning</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Evaluation</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Online Learning</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Skill Development</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Technology</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Subjects</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Virtual</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Test</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Student</button>
                                        </a>
                                        <a href="#">
                                            <button type="button" className="me-3 btn btn-light border text-muted py-1 px-2 my-1 tutor-tags">Classroom</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-container" style={{backgroundColor: '#EEFBF4', padding: '3rem'}}>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <h2 className="heading-bold">Calling all tutors, parents and learners!</h2>
                            <p className="normal md-text mb-4 text-muted">Subscribe to unlock a new world of education.</p>
                            <div className="d-flex">
                                <a href="/auth/signup/tutor">
                                    <div className="justify-content-start mb-3">
                                        <button className="px-3 btn-secondary ">Sign-up as a tutor</button>
                                    </div>
                                </a>
                                <a href="/auth/signup/learner">
                                    <div className=" justify-content-start ms-3 mb-3">
                                        <button className="px-3 btn-secondary ">Sig-up as a learner</button>
                                    </div> 
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <img src="assets/images/Vector.bdbb7fad.png" alt="" className="rounded-top img-fluid float-xl-right float-md-right"/>
                        </div>
                    </div>
                </div>
                <div className="join-container" style={{padding: '3rem'}}>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center flex-column ">
                            <h1 className="heading">Join us and usher in the change</h1>
                            <p className="normal text-muted">You are just a click away from becoming a part of the new age in education. We are a platform that seeks to connect every teacher and learner, and equip them with a whole host of tools that amplify the impact.</p>
                            <div className="d-flex justify-content-between justify-content-md-start join-tutor-btn">
                                <a className="d-flex" href="/auth/signup/tutor">
                                    <div className="px-4 d-flex justify-content-center mx-1 btn-secondary mt-4">Sign-up as a tutor</div>
                                </a>
                                <a className="d-flex" href="/auth/signup/learner">
                                    <div className="px-4 d-flex justify-content-center btn-secondary mt-4">Sig-up as a learner</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 tutor-join">
                            <img src={join} alt="" className="rounded-top img-fluid float-xl-right float-md-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}