import { useState, useEffect } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const timeoutId = setTimeout(() => {
            console.log('Form submitted:', formData);
            alert("Thank you for contacting us! We'll get back to you soon.");

            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        }, 1500);

        return () => clearTimeout(timeoutId);
    };

    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <p className="contact-form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
                {/* Full Name */}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email + Phone */}
                <div className="form-row-two-columns">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="+61 412 345 678"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="form-textarea"
                        placeholder="Tell us how we can help you..."
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-form-submit-btn"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
