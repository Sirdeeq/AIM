import React from "react";
import PageBanner from "../layouts/PageBanner";

import bg from "../assets/images/banner/bnr1.jpg";
import shape1 from "../assets/images/pattern/shape1.png";
import shape3 from "../assets/images/pattern/shape3.png";
import shape5 from "../assets/images/pattern/shape5.png";
import shape6 from "../assets/images/pattern/shape6.png";
import shape7 from "../assets/images/pattern/shape7.png";

// Import gallery images
import gallery1 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/1.jpeg";
import gallery2 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/2.jpeg";
import gallery3 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/3.jpeg";
import gallery4 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/4.jpeg";
import gallery5 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/5.jpeg";
import gallery6 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/6.jpeg";
import gallery7 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/7.jpeg";
import gallery8 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/8.jpeg";
import gallery9 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/9.jpeg";
import gallery10 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/10.jpeg";
import gallery11 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/11.jpeg";
import gallery12 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/12.jpeg";
import gallery13 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/13.jpeg";
import gallery14 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/14.jpeg";
import gallery15 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/15.jpeg";
import gallery16 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/16.jpeg";
import gallery17 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/17.jpeg";
import gallery18 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/18.jpeg";
import gallery19 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/19.jpeg";
import gallery20 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/20.jpeg";
import gallery21 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/21.jpeg";
import gallery22 from "../assets/images/gallery/WhatsApp Unknown 2024-10-02 at 11.38.15 AM/22.jpeg";

const politicalActivities = [
  "Led several youth mobilization efforts for His Excellency Engr. Dr. Rabiu Musa Kwankwaso's campaigns across multiple states.",
  "Actively participated in the Tarauni Local Government reformation projects from 2011-2015.",
  "Spearheaded community sensitization programs for voter registration and electoral participation in Kano State.",
  "Organized and chaired the Kwankwasiya movement at Tarauni Local Government, advocating for political and social reforms.",
  "Served as a key liaison for inter-state presidential campaign efforts in Lagos and Oyo states in 2023.",
];

const galleryImages = [
  gallery1,gallery2,gallery3,gallery4,gallery11,
  gallery6,gallery7,gallery8,gallery9,gallery14,gallery12,gallery13  // Add more images as needed
];

const Activities = () => {
  return (
    <div className="page-content bg-white">
      {/* Page Banner */}
      <PageBanner maintitle="Our Activities" pagetitle="Political Activities & Gallery" background={bg} />
      
      {/* Political Activities Section */}
      <section className="content-inner-1 bg-light section-pattren1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Political Activities</h2>
              <ul>
                {politicalActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <img src={shape1} className="shape-1 move-1" alt="shape" />
        <img src={shape3} className="shape-3 move-1" alt="shape" />
        <img src={shape5} className="shape-4 rotating" alt="shape" />
        <img src={shape6} className="shape-5 rotating" alt="shape" />
      </section>

      {/* Gallery Section */}
      <section className="content-inner-2">
        <div className="container">
          <h2 className="text-center mb-5">Gallery</h2>
          <div className="row">
            {galleryImages.map((image, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="gallery-item">
                  <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
