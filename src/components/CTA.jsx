import { motion } from 'framer-motion'

const CTA = ({ onRegisterClick }) => {
    return (
        <section id="register" className="cta">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="cta-card"
                >
                    <h2 className="cta-title">Ready to build?</h2>
                    <p className="cta-subtitle">Join us to be the first to know when we open registration. Spots are limited to keep the session interactive.</p>

                    <div className="cta-actions">
                        <button onClick={onRegisterClick} className="btn-primary">
                            Reserve My Free Spot
                        </button>
                    </div>
                    <p className="cta-note">Strictly no spam. Just the webinar invite.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
