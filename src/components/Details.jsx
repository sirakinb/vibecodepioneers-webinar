import { Calendar, Clock, MapPin } from 'lucide-react'

const Details = () => {
    return (
        <section id="details" className="details">
            <div className="container">
                <div className="details-card glass">
                    <h2 className="details-title">Webinar Details</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <Calendar className="detail-icon" />
                            <div>
                                <h4>Date</h4>
                                <p>Sunday January 11th</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <Clock className="detail-icon" />
                            <div>
                                <h4>Time</h4>
                                <p>4:00 PM EST (60 Mins)</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <MapPin className="detail-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Live Virtual Session</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
