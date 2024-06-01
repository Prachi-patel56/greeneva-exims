import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14672.512894036243!2d72.8120096!3d23.1655198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dd75b3041e695%3A0x68790dcda277902d!2sGreenEva%20Exims!5e0!3m2!1sen!2sin!4v1717251670470!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
          <div className="animate lg:col-5">
            <form
              method="POST"
              action={config.params.contact_form_action}
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
                  name="subject"
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
                <textarea className="form-textarea w-full" rows="6" />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
