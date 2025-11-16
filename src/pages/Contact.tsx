import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

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

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
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
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - matching Experiences layout */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-light text-gray-800 mb-4">
                        Have a Question?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        We'd love to hear from you. Whether you're interested in our event services, bespoke fragrances, or lifestyle collection, we're here to help.
                    </p>
                </div>

                {/* Contact Form Section - matching the card style */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-16 max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-light text-gray-800 mb-3">
                            Send Us a Message
                        </h3>
                        <p className="text-gray-600 font-light">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 font-light"
                                placeholder="Your Name *"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 font-light"
                                placeholder="Your Email *"
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 font-light"
                                placeholder="Phone Number (Optional)"
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 font-light resize-none"
                                placeholder="How can we help you? *"
                            />
                        </div>

                        <div className="text-center pt-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-10 py-4 rounded-full text-lg font-light hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Highlight Banner - matching Experiences */}
                <div className="bg-gradient-to-r from-rose-400 to-amber-400 rounded-2xl p-8 text-center shadow-lg">
                    <p className="text-white text-lg font-light">
                        We typically respond within 24 hours. Looking forward to connecting with you!
                    </p>
                </div>
            </div>
        </div>
    );
}