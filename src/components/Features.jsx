import { motion } from 'framer-motion'
import { Code, Zap, Users, Rocket } from 'lucide-react'

const features = [
    {
        icon: <Code size={24} />,
        title: 'The AI Stack',
        description: 'Choosing the right models and tools for your idea. Learn which LLMs actually work for production.'
    },
    {
        icon: <Zap size={24} />,
        title: 'Speed-Building',
        description: 'How to use AI to write code, design UI, and handle logic in record time. From zero to functional application.'
    },
    {
        icon: <Users size={24} />,
        title: 'Your First Users',
        description: 'Real strategies to find and keep your first customers without a marketing budget.'
    },
    {
        icon: <Rocket size={24} />,
        title: 'Scale & Launch',
        description: 'The roadmap for what comes after the initial build. How to pivot from a prototype to a real business.'
    }
]

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What You'll <span className="gradient-text">Master</span></h2>
                    <p className="section-subtitle">Practical skills you need to build and launch in record time.</p>
                </div>

                <div className="features-grid-2x2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="feature-card glass"
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
