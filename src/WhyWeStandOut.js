import React, { useState } from 'react';
import './WhyWeStandOut.css';

const data = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description:
      'We empower our clients with innovative workforce solutions, combining expertise in recruitment and workforce management with cutting-edge technology.',
    image: 'https://th.bing.com/th/id/OIP.r_2cgFOGjIcMI72_OXs7bQHaEo?o=7&rm=3&rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    title: 'Human-Centric Approach',
    description:
      'We prioritize people, ensuring ethical and human-focused recruitment practices that build trust and long-term partnerships.',
    image: 'https://th.bing.com/th/id/OIP.r_2cgFOGjIcMI72_OXs7bQHaEo?o=7&rm=3&rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    title: 'Trust & Transparency',
    description:
      'Integrity is at our core. Our clients rely on us for honest, clear, and dependable service in every interaction.',
    image: 'https://th.bing.com/th/id/OIP.r_2cgFOGjIcMI72_OXs7bQHaEo?o=7&rm=3&rs=1&pid=ImgDetMain',
  },
];

function WhyWeStandOut() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="standout-section">
      <h2 className="section-title">Why We Stand Out</h2>
      <div className="circle-container">
        {data.map((item, index) => {
          const isActive = activeId === item.id;
          const activeIndex = data.findIndex((d) => d.id === activeId);

          // this is the responsiveness in js for mobile screens
          let shift = 0;
          const screenWidth = window.innerWidth;
          const isMobile = screenWidth <= 768;
          const activeShift = isMobile ? 140 : 200;
          const neighborShift = isMobile ? 80 : 100;

          if (activeId !== null) {
            if (index < activeIndex) {
              shift = -neighborShift; // left neighbors
            } else if (index > activeIndex) {
              shift = neighborShift;  // right neighbors
            } else {
              shift = -activeShift;   // active one
            }
          }


          return (
            <div
              key={item.id}
              className={`circle-wrapper ${isActive ? 'active' : ''}`}
              style={{
                transform: `translateX(${shift}px)`,
              }}
            >
              <div className="circle-overlay">
                <img
                  src={item.image}
                  alt={item.title}
                  className="standout-image"
                  onClick={() => handleClick(item.id)}
                />
              </div>

              {isActive && (
                <div className="standout-card-right" style={{ left: '270px' }}>
                  <div className="standout-card">
                    <div className="standout-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyWeStandOut;
