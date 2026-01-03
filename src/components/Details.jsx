import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, CheckCircle, XCircle, User } from 'lucide-react'

const Details = () => {
    return (
        <section id="details" className="details">
            <div className="container">
                {/* Webinar Details Card */}
                <div className="details-card glass">
                    <h2 className="details-title">Webinar Details</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <Calendar className="detail-icon" />
                            <div>
                                <h4>Date</h4>
                                <p>Saturday, January 11th, 2026</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <Clock className="detail-icon" />
                            <div>
                                <h4>Time</h4>
                                <p>4:00 PM EST</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <MapPin className="detail-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Zoom (link sent after registration)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who This Is For Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="audience-card glass"
                >
                    <h2 className="details-title">Who This Is For</h2>
                    <ul className="audience-list">
                        <li className="audience-item">
                            <CheckCircle className="check-icon" />
                            <span>Designers who want to build functional products, not just mockups</span>
                        </li>
                        <li className="audience-item">
                            <CheckCircle className="check-icon" />
                            <span>Developers curious about AI-native workflows</span>
                        </li>
                        <li className="audience-item">
                            <CheckCircle className="check-icon" />
                            <span>Creators and consultants who want to turn ideas into software</span>
                        </li>
                        <li className="audience-item">
                            <CheckCircle className="check-icon" />
                            <span>Anyone who's been meaning to build something but hasn't started</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Who This Isn't For Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="audience-card glass not-for"
                >
                    <h2 className="details-title">Who This Isn't For</h2>
                    <ul className="audience-list">
                        <li className="audience-item">
                            <XCircle className="x-icon" />
                            <span>People looking for a passive course to watch later</span>
                        </li>
                        <li className="audience-item">
                            <XCircle className="x-icon" />
                            <span>Anyone not willing to actually build something</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Meet Your Host Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="host-card glass"
                >
                    <h2 className="details-title">Meet Your Host</h2>
                    <div className="host-content">
                        <img
                            src="/builder.png"
                            alt="Akinyemi Bajulaiye"
                            className="host-photo"
                        />
                        <div className="host-info">
                            <h3 className="host-name">Akinyemi Bajulaiye</h3>
                            <p className="host-bio">
                                I've built 20+ functional apps over the last year and a half—web apps, mobile apps, chrome extensions—for consumer and B2B use cases. I'm a big advocate for the new era of building with AI, formally known as vibe coding.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Details
