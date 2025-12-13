import { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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
        <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Decorative blur elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-block mb-6">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-8" />
                        </div>
                        <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-8 tracking-tight">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                            We'd love to hear from you. Whether you're interested in our event services, bespoke fragrances, or lifestyle collection, we're here to help.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-white/60 backdrop-blur-sm border border-stone-300 p-12 md:p-16 mb-16 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200/30 mb-8">
                            <MessageCircle size={28} className="text-rose-400" strokeWidth={1.2} />
                        </div>
                        <h2 className="text-4xl font-extralight text-gray-900 mb-4 tracking-tight">
                            Send Us a Message
                        </h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
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
                                className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
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
                                className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
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
                                className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light resize-none text-gray-900 placeholder:text-gray-400"
                                placeholder="How can we help you? *"
                            />
                        </div>

                        <div className="text-center pt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 py-4 text-sm font-light tracking-widest uppercase hover:shadow-2xl hover:shadow-gray-900/20 hover:from-rose-400 hover:to-amber-400 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} strokeWidth={1.5} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Highlight Banner */}
                <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-rose-50/20 to-amber-50/20 border border-stone-200/50 p-12 text-center max-w-3xl mx-auto">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-rose-100/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-100/20 rounded-full blur-2xl"></div>
                    <p className="relative text-gray-800 text-lg font-light leading-relaxed">
                        We typically respond within 24 hours. Looking forward to connecting with you!
                    </p>
                </div>
            </div>
        </div>
    );
}