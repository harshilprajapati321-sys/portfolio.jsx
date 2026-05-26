import React from "react";

export default function About() {
  return (
    <>
      <section className="about-section py-5" id="About" style={{ background: "#f5f5f5" }} >
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: "55px", color: "#0a0a0a", fontFamily: "serif", }} >
              About
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0 position-relative">
              <div style={{border: "25px solid #c2a57a",width: "75%",height: "450px",position: "absolute",top: "40px",left: "0", zIndex: "1",}} ></div>

              <img src="https://bootstrapmade.com/content/demo/Folio/assets/img/profile-img.jpg" alt="profile" className="img-fluid position-relative"style={{ width: "80%",marginLeft: "60px",zIndex: "2",}} />
            </div>

            
            <div className="col-lg-7">
              <h1 style={{fontSize: "30px",fontWeight: "100",color: "#7a6c61",lineHeight: "1.2",fontFamily: "serif", }}>
                Im a Web developer austin based who loves clean, simple & unique
                design. i also enjoy crafting brand identities, icons, & illustration
                work.
              </h1>

              <p className="mt-4"  style={{    fontSize: "22px",    color: "#777",    lineHeight: "1.8",  }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

            
              <div className="mt-5">
                <p style={{   fontSize: "22px",   color: "#777",   marginBottom: "25px", }} >
                  ✓ Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p style={{   fontSize: "22px",   color: "#777",   marginBottom: "25px", }} >
                  ✓ Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>

                <p style={{   fontSize: "22px",   color: "#777",   lineHeight: "1.8", }} >
                  ✓ Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}