import React, { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

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
          <AnimatedSection direction="left" delay={0.1}>
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
          </AnimatedSection>

          {/* Right Side - Details */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <p className="text-[#003C43] font-bold text-sm tracking-wider mb-2">GET IN TOUCH</p>
              <h2 className="text-5xl font-bold text-[#003C43]">Contact Details</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4 mb-8 text-justify">
                Questions or concerns matter. Reach out for clear information, calm guidance, and a
                respectful care experience.
              </p>

              <div className="space-y-6 mt-8">

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
                    <h3 className="text-2xl font-bold text-[#003C43] mb-3">Visit Us</h3>
                    <p className="text-gray-600">4/7 South Madha Church Street<br />Royapuram, Chennai – 600013</p>
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
                    <h3 className="text-2xl font-bold text-[#003C43] mb-3">Call us</h3>
                    <p className="text-gray-600">+91 9840 418 974</p>
                  </div>

                  {/* WhatsApp */}
                  <div className="info-card bg-white rounded-3xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="icon-circle w-16 h-16 bg-[#003C43] rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#003C43] mb-3">WhatsApp</h3>
                    <p className="text-gray-600">+91 7305 088 491</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
