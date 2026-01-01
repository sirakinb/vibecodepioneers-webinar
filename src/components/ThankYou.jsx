import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Calendar, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background glow effects */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 60%)',
                opacity: 0.15,
                filter: 'blur(80px)',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-30%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 60%)',
                opacity: 0.1,
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }}></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    maxWidth: '480px',
                    width: '100%',
                    background: 'linear-gradient(180deg, rgba(30, 30, 40, 0.9) 0%, rgba(20, 20, 25, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '24px',
                    padding: '3rem',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                {/* Success icon with animated ring */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(236, 72, 153, 0.2))',
                        border: '2px solid rgba(249, 115, 22, 0.3)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem'
                    }}
                >
                    <CheckCircle size={40} color="var(--accent-primary)" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontSize: '2.25rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #cbd5e1)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontFamily: "'Outfit', sans-serif"
                    }}
                >
                    You're In! 🎉
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        marginBottom: '2rem'
                    }}
                >
                    Thank you for securing your spot! A confirmation email with all the details is on its way to your inbox.
                </motion.p>

                {/* Info cards */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        marginBottom: '2rem'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '12px',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(249, 115, 22, 0.1)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Mail size={20} color="var(--accent-primary)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, marginBottom: '0.25rem' }}>Check your inbox</p>
                            <p style={{ fontSize: '0.95rem', color: 'white', margin: 0, fontWeight: '500' }}>Confirmation email sent</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '12px',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(236, 72, 153, 0.1)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Calendar size={20} color="var(--accent-secondary)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, marginBottom: '0.25rem' }}>Next step</p>
                            <p style={{ fontSize: '0.95rem', color: 'white', margin: 0, fontWeight: '500' }}>Add event to your calendar</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="btn-primary-glow"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none'
                        }}
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>

                {/* Footer sparkle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginTop: '1.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)'
                    }}
                >
                    <Sparkles size={14} color="var(--accent-tertiary)" />
                    <span>See you at the masterclass!</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ThankYou;

