import React from "react";


export default function Services() {
  const services = [
    {
      icon: "bi bi-code-slash",
      title: "Web Development",
      desc: "Modern and responsive websites using React JS and Bootstrap.",
    },
    {
      icon: "bi bi-phone",
      title: "Responsive Design",
      desc: "Mobile friendly and fully responsive website design solutions.",
    },
    {
      icon: "bi bi-palette",
      title: "UI/UX Design",
      desc: "Clean and attractive user interface with smooth experience.",
    },
    {
      icon: "bi bi-speedometer2",
      title: "Fast Performance",
      desc: "Optimized websites with fast loading speed and performance.",
    },
    {
      icon: "bi bi-cart",
      title: "E-Commerce",
      desc: "Professional e-commerce websites with modern layouts.",
    },
    {
      icon: "bi bi-search",
      title: "SEO Optimization",
      desc: "SEO friendly websites to improve visibility and ranking.",
    },
  ];

  return (
    <section className="py-5" id="Services" style={{ background: "#f8f9fa",}} >
      <div className="container">
        <div className="text-center mb-5">
          <h5 style={{color: "#181716",letterSpacing: "2px", fontSize: "30px", }} >
             SERVICES
          </h5>
        </div>

        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card bg-white p-4 h-100 text-center">
                <div className="service-icon d-inline-flex align-items-center justify-content-center mb-4">
                  <i className={item.icon}></i>
                </div>

                <h4 style={{ fontWeight: "700", marginBottom: "15px",}}>
                  {item.title}
                </h4>

                <p className="text-muted"style={{lineHeight: "28px", }}>
                  {item.desc}
                </p>

                <button className="btn service-btn mt-3 px-4">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}