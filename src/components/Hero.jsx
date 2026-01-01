import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ onRegisterClick }) => {
    return (
        <section className="hero">
            <div className="hero-bg-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="badge"
                    >
                        <div className="glowing-dot"></div>
                        <span>Live Webinar</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-title"
                    >
                        Build and Launch an <br />
                        <span className="gradient-text">App with AI</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        And get your first users or customers. A live masterclass on building functional,
                        market-ready applications using the power of AI.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <button
                            onClick={onRegisterClick}
                            className="btn-primary"
                        >
                            Reserve My Free Spot
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
