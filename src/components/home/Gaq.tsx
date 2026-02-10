import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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
                        GET A CONSULTATION
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                        Start with a conversation focused on <span className="text-[#64ccc5]">awareness</span>,{' '}
                        <span className="text-[#64ccc5]">guidance</span>, and
                        <br />
                        informed <span className="text-[#64ccc5]">health decisions</span>.
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
                            Questions or concerns matter. Reach out for clear information, calm guidance, and a
                            respectful care experience.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-6">

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#003C43] rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-1">Call us</p>
                                    <p className="text-gray-900 font-bold text-lg">+91 9840 418 974</p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#003C41] rounded-full flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 text-white fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-1">WhatsApp</p>
                                    <p className="text-gray-900 font-bold text-lg">+91 7305 088 491</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#003C43] rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-1">Visit Us</p>
                                    <p className="text-gray-900 font-bold text-base">
                                        4/7 South Madha Church Street<br />
                                        Royapuram, Chennai – 600013
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                                Yearly preventive care helps us reduce health risks and avoid unnecessary medical
                                costs.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
