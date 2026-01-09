import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    function calculateTimeLeft() {
        const webinarDate = new Date('2026-01-26T16:00:00-05:00') // EST
        const now = new Date()
        const difference = webinarDate - now

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return timeLeft
    }

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="countdown-container"
        >
            <h3 className="countdown-label">Starting In</h3>
            <div className="countdown-grid">
                {timeUnits.map((unit, index) => (
                    <div key={index} className="countdown-box glass">
                        <div className="countdown-number">{String(unit.value).padStart(2, '0')}</div>
                        <div className="countdown-unit">{unit.label}</div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Countdown
