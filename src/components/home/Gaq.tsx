import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] py-16 md:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
            {/* Background Image with Overlay */}
            <div className="absolute top-0 left-0 w-full h-[60%] z-0">
                <img
                    src="/div.quotes-background.png"
                    alt="Therapy session background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#245953]/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#ffffff] text-sm md:text-base font-semibold uppercase tracking-wider mb-4 block">
                        GET A QUOTE
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                        Take <span className="text-[#408E91]">The first step</span> toward a{' '}
                        <span className="text-[#408E91]">healthier</span> mind.
                        <br />
                        Join us today and start your journey to{' '}
                        <span className="text-[#408E91]">well-being!</span>
                    </h2>
                </div>

                {/* Form Container */}
                <div className="grid lg:grid-cols-2 max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left - Form */}
                    <div className="bg-white p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Name + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold text-sm mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name here"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold text-sm mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email here"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone + Date */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold text-sm mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold text-sm mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Time + Subject */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold text-sm mb-2">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold text-sm mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Your subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 font-semibold text-sm mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us your story"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-2 focus:ring-[#003C43] transition-all resize-none"
                                    required
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#003C43] hover:bg-[#245953] text-white 
                                font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                Make An Appointment
                            </button>

                        </form>
                    </div>

                    {/* Right - Contact Info */}
                    <div className="bg-gradient-to-br from-[#408E91]/20 to-[#245953]/20 p-8 md:p-10 flex flex-col justify-center">

                        <h3 className="text-2xl md:text-3xl font-bold text-[#003C43] mb-4">
                            Need Any Help? Get In Touch With Us
                        </h3>

                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                            Every small step counts. We're committed to walking with you through
                            difficult moments and helping you rebuild emotional strength.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-6">

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#003C43] rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-1">Call us anytime</p>
                                    <p className="text-gray-900 font-bold text-lg">(555) 123-4567</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#003C43] rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-1">Email us</p>
                                    <p className="text-gray-900 font-bold text-lg">Info@Yourmail.Com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#003C43] rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-1">Our Location</p>
                                    <p className="text-gray-900 font-bold text-base">
                                        123 Serenity Lane,<br />
                                        Blissfield, CA 90210, US.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
