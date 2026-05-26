import React from "react";


export default function Contact() {
  return (
    <section className="contact-section py-5" id="Contact" >
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="contact-subtitle" style={{ fontSize: "30px",color:"black"}}>
            CONTACT 
          </h5>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="contact-info-box mb-4">
              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div>
                <h5>Location</h5>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>

            <div className="contact-info-box mb-4">
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>

              <div>
                <h5>Email</h5>
                <p>harshil@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                <i className="bi bi-telephone"></i>
              </div>

              <div>
                <h5>Phone</h5>
                <p>+91 9876543210</p>
              </div>
            </div>

          </div>

          <div className="col-lg-7">
            <div className="contact-form-box">
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input type="text" className="form-control custom-input" placeholder="Your Name"/>
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control custom-input" placeholder="Your Email"/>
                  </div>

                  <div className="col-12">
                    <input type="text" className="form-control custom-input" placeholder="Subject"/>
                  </div>

                  <div className="col-12">
                    <textarea className="form-control custom-input" rows="6" placeholder="Your Message" ></textarea>
                  </div>

                  <div className="text-center">
                    <button className="btn contact-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}