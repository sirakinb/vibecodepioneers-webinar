import { motion } from 'framer-motion'
import { Terminal, Hammer, HelpCircle, Globe } from 'lucide-react'

const features = [
    {
        icon: <HelpCircle size={24} />,
        title: 'What is Claude Code?',
        description: "Where does it live? How do you use it? I'll break down what Claude Code actually is and the different environments you can build in—so it stops feeling ethereal and starts making sense."
    },
    {
        icon: <Hammer size={24} />,
        title: 'The Build',
        description: "I'll take an idea and turn it into a working app. You'll see the setup, the prompts, and the workflow in real time."
    },
    {
        icon: <Terminal size={24} />,
        title: 'When to Use What',
        description: "Claude Code vs. tools like Lovable, Bolt, and Replit—when does each make sense? I'll share how I think about choosing the right tool for the job."
    },
    {
        icon: <Globe size={24} />,
        title: 'The Bigger Picture',
        description: "If you've been hearing about AI coding, agents, Claude Skills, Codex—this session will give you the foundation to understand where it's all going and how Claude Code fits in."
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

                <div className="features-grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
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
