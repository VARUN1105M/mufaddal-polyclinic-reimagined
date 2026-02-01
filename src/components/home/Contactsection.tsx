import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003C4310] via-white to-[#24595310] py-16 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        * {
          font-family: 'Outfit', sans-serif;
        }

        .contact-form {
          background: linear-gradient(135deg, #245953 0%, #408E91 50%, #003C43 100%);
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 60, 67, 0.2);
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .submit-btn:hover::before {
          width: 400px;
          height: 400px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(36, 89, 83, 0.3);
        }

        .info-card {
          transition: all 0.3s ease;
          border: 2px solid #E5E7EB;
        }

        .info-card:hover {
          border-color: #003C43;
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 60, 67, 0.15);
        }

        .icon-circle {
          transition: all 0.3s ease;
        }

        .info-card:hover .icon-circle {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 60, 67, 0.3);
        }

        textarea {
          resize: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <div className="contact-form rounded-3xl p-10 shadow-xl">
            <form onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-lg">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name here"
                    className="input-field w-full px-5 py-3.5 rounded-full border-none focus:outline-none text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-lg">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email here"
                    className="input-field w-full px-5 py-3.5 rounded-full border-none focus:outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-lg">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="input-field w-full px-5 py-3.5 rounded-full border-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-lg">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your subject"
                    className="input-field w-full px-5 py-3.5 rounded-full border-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-2 text-lg">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-field w-full px-5 py-4 rounded-3xl border-none text-gray-700"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn w-full bg-[#003C43] hover:bg-[#245953] text-white font-bold py-4 rounded-full"
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Right Side - Details */}
          <div>
            <p className="text-[#003C43] font-bold text-sm tracking-wider mb-2">GET IN TOUCH</p>
            <h2 className="text-5xl font-bold text-[#003C43]">Contact Details</h2>

            <div className="space-y-6 mt-12">
              
              {/* Address + Support Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Address */}
                <div className="info-card bg-white rounded-3xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="icon-circle w-16 h-16 bg-[#003C43] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003C43] mb-3">Address</h3>
                  <p className="text-gray-600">123 Serenity Lane, Blissfield,<br />CA 90210</p>
                </div>

                {/* Support */}
                <div className="info-card bg-white rounded-3xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="icon-circle w-16 h-16 bg-[#003C43] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003C43] mb-3">Need Support?</h3>
                  <p className="text-gray-600">(555) 123-4567<br />Info@Yourmail.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="info-card bg-white rounded-3xl p-8">
                <div className="flex items-center gap-6">
                  <div className="icon-circle w-16 h-16 bg-[#003C43] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#003C43] mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">Mon - Fri 8:00 - 6:30</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
