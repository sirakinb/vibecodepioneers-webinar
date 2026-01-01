const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="gradient-text">AI Masterclass</span>
                    </div>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} AI Masterclass. Grab your spot for the live session.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
