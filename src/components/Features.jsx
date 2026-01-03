import { motion } from 'framer-motion'
import { Eye, Layers, ArrowRight } from 'lucide-react'

const features = [
    {
        icon: <Eye size={24} />,
        title: 'The Build',
        description: "I'll take an idea and turn it into a working app in 60 minutes. You'll see every step—the tools, the prompts, the decisions."
    },
    {
        icon: <Layers size={24} />,
        title: 'The Stack',
        description: 'Which AI tools actually work for building apps fast. What I use every day.'
    },
    {
        icon: <ArrowRight size={24} />,
        title: 'The Path Forward',
        description: "What to do after the webinar if you want to build your own. I'll show you exactly where to start."
    }
]

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What You'll <span className="gradient-text">See</span></h2>
                    <p className="section-subtitle">This isn't a lecture. It's a live build.</p>
                </div>

                <div className="features-grid-3">
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
