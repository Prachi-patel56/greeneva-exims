import config from "@config/config.json";
import Banner from "../layouts/components/Banner";
import React, { useEffect, useState } from 'react'
import ImageFallback from "../layouts/components/ImageFallback";
import Base from "@layouts/Baseof";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate each field independently
    // const trimmedValue = value.trim();
    // Find the index of the first non-space character
    const indexOfFirstNonSpace = value.search(/\S/);

    // Trim the value starting from the first non-space character
    const trimmedValue = (indexOfFirstNonSpace !== -1) ? value.substring(indexOfFirstNonSpace) : '';

    let isValid = value.length > 0 ? trimmedValue.length > 0 : true;
    // let isValid=false;
    if (name == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(trimmedValue);
    } else {
      isValid = trimmedValue.length > 0;
    }

    // Update form data
    setFormData({ ...formData, [name]: trimmedValue });
  };
console.log("formData",formData);
  const handleFormSubmit = async (e) => {
    console.log("e",e);
    return 
    e.preventDefault();
    try {
      const response = await fetch(service?.API_URL + '/api/mail/mail-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        //clear the input field when the data is correct
        setFormData({
          name: '',
          email: '',
          subject: '',
          description: ''
        });
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
    }
  };
  return (
    <Base>
    <section className="section">
      {/* <Banner title={title} /> */}
      <div className="container">
        <div className="section row items-center justify-center">
        <h2 className="h4 mb-2">Contact Us</h2>
          <p className="mb-4">Looking for assistance or have a question? Reach out to our dedicated team for personalized support and prompt solutions tailored to your needs. Whether it's a product inquiry, feedback, or just a friendly hello, we're here to help. Contact us via email, phone, or visit us in person at our location. Your satisfaction is our priority, and we're committed to providing exceptional service every step of the way. Get in touch today and let us assist you!</p>
          <div className="animate lg:col-6">
            {/* <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14672.512894036243!2d72.8120096!3d23.1655198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dd75b3041e695%3A0x68790dcda277902d!2sGreenEva%20Exims!5e0!3m2!1sen!2sin!4v1717251670470!5m2!1sen!2sin" width="500" height="400" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
          <div className="animate lg:col-5">
            <form
              onSubmit={handleFormSubmit}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formData.name}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={formData.email}
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  placeholder="Enter Your Subject"
                  name="subject"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formData.subject}
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <input type="text"
                className="form-input w-full"
                        placeholder="Enter Your Message"
                        name="message"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={formData.message}
                      />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Base>
  );
};

export default Contact;
