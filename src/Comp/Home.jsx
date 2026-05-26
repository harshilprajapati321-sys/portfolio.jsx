import React from "react";

export default function Home() {
  return (
    <section
      className="hero d-flex align-items-center"id="Home" style={{ minHeight: "100vh",  backgroundImage:"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')", backgroundSize: "cover", backgroundPosition: "center", }} >

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-white">
            <h4 style={{color: "#d4a373",letterSpacing: "2px",marginBottom: "15px",}}>HELLO I'M</h4>
            <h1 style={{fontSize: "65px",fontWeight: "700", marginBottom: "20px",}} > Harshil Prajapati </h1>
            <h2 style={{fontSize: "32px",fontWeight: "300",marginBottom: "20px", }}> Web Developer & React Developer </h2>

            <p style={{maxWidth: "600px",color: "#ddd",lineHeight: "30px",marginBottom: "30px", }} >
              I create modern, responsive and user-friendly websites using
              React, Bootstrap and JavaScript. Passionate about clean UI and
              smooth user experience.
            </p>

            
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn px-4 py-2"style={{  background: "#d4a373", color: "#fff", borderRadius: "30px", }} >
                View My Work
              </button>

              <button className="btn btn-outline-light px-4 py-2" style={{ borderRadius: "30px", }} >
                Get In Touch
              </button>
            </div>

           
            <div className="d-flex gap-4 mt-5">
              <a href="#" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <img src="https://bootstrapmade.com/content/demo/Folio/assets/img/profile-img.jpg" alt="profile" className="img-fluid" style={{
                width: "380px",
                borderRadius: "30px",
                border: "5px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }} />
          </div>

        </div>
      </div>
    </section>
  );
}