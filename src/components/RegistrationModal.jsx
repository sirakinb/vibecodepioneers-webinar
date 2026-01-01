import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Rocket, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RegistrationModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://hook.us1.make.com/e9imhgd7u28m8bpojsljrsv9nq29bat6', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ firstName: '', lastName: '', email: '' });
                onClose();
                navigate('/thank-you');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Error submitting form. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="modal-content glass-premium"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-icon" onClick={onClose}>
                            <X size={20} />
                        </button>

                        <div className="modal-body-content">
                            <div className="modal-decorative-glow"></div>

                            <div className="modal-header-section">
                                <div className="modal-icon-badge">
                                    <Rocket size={24} className="text-secondary" />
                                </div>
                                <h2 className="modal-title">Secure Your Seat</h2>
                                <p className="modal-subtitle">
                                    Join the exclusive live masterclass on building AI-powered apps.
                                </p>
                            </div>

                            <form className="modal-form-modern" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group-modern">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Jordan"
                                            required
                                            className="input-modern"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="form-group-modern">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Smith"
                                            required
                                            className="input-modern"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                                <div className="form-group-modern">
                                    <label>Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="jordan@company.com"
                                        required
                                        className="input-modern"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary-glow full-width"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span>Reserve Free Spot</span>
                                    )}
                                </button>
                            </form>

                            <div className="modal-footer-note">
                                <CheckCircle size={14} className="text-accent" />
                                <span>Limited spots available for this session.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default RegistrationModal
