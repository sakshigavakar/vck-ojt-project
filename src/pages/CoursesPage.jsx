import React from "react";
import Header from "../components/Header/Header"
import './Courses.css'
import "../components/Header/Header.css";
import "../components/Footer/Footer.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const CoursesPage = () => {
    return (
        <>
            <div><Header /></div>
            <div className="other">
                <section className="head">
                    <h1>Our Academic Programs</h1>
                    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                </section>
                <section className="video">
                    <video controls>
                        <source src="/videos/college-tour-FAmcnyfF.mp4" type="video/mp4"></source>
                    </video>
                </section>
                <section className="c-text">
                    <h2>Undergraduate Programs (UG)</h2>
                    <ul>
                        <li>Bachelor of Science (B.Sc.)
                            <ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                        </li>
                        <li>Bachelor of Commerce (B.Com)
                            <ul>
                                <li>Accounting & Finance (3 years)</li>
                                <li>Banking & Insurance (3 years)</li>
                            </ul>
                        </li>
                        <li>Bachelor of Arts (B.A.)
                            <ul>
                                <li>English Literature (3 years)</li>
                                <li>Psychology (3 years)</li>
                            </ul>
                        </li>
                    </ul> <ul>
                        <li>Bachelor of Science (B.Sc.)
                            <ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                        </li>
                        <li>Bachelor of Commerce (B.Com)
                            <ul>
                                <li>Accounting & Finance (3 years)</li>
                                <li>Banking & Insurance (3 years)</li>
                            </ul>
                        </li>
                        <li>Bachelor of Arts (B.A.)
                            <ul>
                                <li>English Literature (3 years)</li>
                                <li>Psychology (3 years)</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section className="c-text2">
                    <h2>Postgraduate Programs (PG)</h2>
                    <ul>
                        <li>Master of Science (M.Sc.)
                            <ul>
                                <li>Computer Science (2 years)</li>
                                <li>Information Technology (2 years)</li>
                            </ul>
                        </li>
                        <li>Master of Commerce (M.Com) (2 years)</li>
                        <li>Master of Arts (M.A.) (2 years)</li>
                    </ul>
                </section>
                <section className="table">
                    <h2>Program Details & Fee Structure (Annual)
                    </h2>
                    <table>
                        <thead>
                            <tr id="row-h">
                                <th>Program Type</th>
                                <th>Course Name</th>
                                <th>Duration</th>
                                <th>Annual Fee (INR)</th>
                                <th>Eligibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="row1">
                                <td>UG</td>
                                <td>B.Sc. Computer Science</td>
                                <td>3 Years</td>
                                <td>₹ 85,000</td>
                                <td>10+2 with PCM (50%)</td>
                            </tr>
                            <tr id="row2">
                                <td>UG</td>
                                <td>B.Com. Accounting & Finance</td>
                                <td>3 Years</td>
                                <td>₹ 70,000</td>
                                <td>10+2 Commerce (45%)</td>
                            </tr>
                            <tr id="row3">
                                <td>PG</td>
                                <td>M.Sc. Information Technology</td>
                                <td>2 Years</td>
                                <td>₹ 95,000</td>
                                <td>B.Sc. IT/CS (50%)</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="c-text3">
                    <h2>Specialized & Vocational Courses</h2>
                    <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital  Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement</p>
                </section>
                <section className="c-bottom">
                    <h4>Explore detailed syllabi and admission criteria on our Admissions page.</h4>
                    <button><Link to="/contactpage"><b id="bold">Inquire About Courses</b></Link></button>
                </section>
            </div>
            <div><Footer /></div>
        </>
    )
}
export default CoursesPage;
