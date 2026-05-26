import React from "react";


export default function Portfolio() {
  const portfolio = [
    {
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      title: "Mobile App",
      category: "App Design",
    },
    {
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      title: "Creative Branding",
      category: "Branding",
    },
    {
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "Product Design",
      category: "UI/UX",
    },
    {
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Web Development",
      category: "Development",
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Team Project",
      category: "Business",
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Marketing",
      category: "Digital",
    },
  ];

  return (
    <section className="portfolio-section py-5" id="Portfolio">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="portfolio-title"style={{ fontSize: "35px",color:"black"}}>
             Portfolio
          </h1>
        </div>

        <div className="row g-4">
          {portfolio.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="portfolio-card">
                <img
                  src={item.img}
                  alt=""
                  className="img-fluid portfolio-img"
                />

                <div className="portfolio-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <button className="btn portfolio-btn">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}