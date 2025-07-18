import React, { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description:
      'We empower our clients with innovative workforce solutions, combining expertise in recruitment and workforce management with cutting-edge technology.',
    image:
      'https://th.bing.com/th/id/OIP.r_2cgFOGjIcMI72_OXs7bQHaEo?o=7&rm=3&rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    title: 'Human-Centric Approach',
    description:
      'We prioritize people, ensuring ethical and human-focused recruitment practices that build trust and long-term partnerships.',
    image:
      'https://th.bing.com/th/id/OIP.r_2cgFOGjIcMI72_OXs7bQHaEo?o=7&rm=3&rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    title: 'Trust & Transparency',
    description:
      'Integrity is at our core. Our clients rely on us for honest, clear, and dependable service in every interaction.',
    image:
      'https://th.bing.com/th/id/OIP.r_2cgFOGjIcMI72_OXs7bQHaEo?o=7&rm=3&rs=1&pid=ImgDetMain',
  },
];

function WhyWeStandOut() {
  const [activeId, setActiveId] = useState(null);

  // NEW handlers
  const handleMouseEnter = (id) => setActiveId(id);   // show card
  const handleMouseLeave = () => setActiveId(null);   // hide card


  return (
    <section className="bg-[#e0e0e0] relative -top-28 text-center scroll-mt-[100px] rounded-b-[4rem] my-[60px] mx-auto px-[10px] md:px-[20px] py-[20px] md:pt-[80px] md:pb-[30px]">
      <h2 className="text-[2rem] md:text-[3.1rem] font-extrabold my-[40px] md:my-[60px] md:mb-[40px]">
        Why We Stand Out
      </h2>

      <div className="flex justify-center md:gap-[120px] relative transition-all duration-500 ease-in-out flex-nowrap overflow-x-auto md:overflow-visible pb-[20px] md:pb-0 pl-[0px] md:pl-0">

        {data.map((item, index) => {
          const isActive = activeId === item.id;
          const activeIndex = data.findIndex((d) => d.id === activeId);

          const screenWidth = window.innerWidth;
          const isMobile = screenWidth <= 768;
          const activeShift = isMobile ? 80 : 200;
          const neighborShift = isMobile ? 60 : 100;

          let shift = 0;
          if (activeId !== null) {
            if (index < activeIndex) {
              shift = -neighborShift;
            } else if (index > activeIndex) {
              shift = neighborShift;
            } else {
              shift = -activeShift;
            }
          }

          return (
            <div
              key={item.id}
              className="relative flex items-center min-w-[150px] transition-transform duration-500 ease-in-out z-20"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `translateX(${shift}px)` }}
            >
              {/* Image */}
              <div className="relative z-30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[120px] h-[120px] md:w-[270px] md:h-[270px] rounded-full border-[6px] border-white object-cover bg-white cursor-pointer transition-transform duration-300 ease-in-out shadow-[0_6px_12px_rgba(0,0,0,0.2)] 
             hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)"
                />
              </div>

              {/* Card Container */}
              {isActive && (
                <div className="absolute left-[205px] md:left-[270px] transition-all duration-500 ease-in-out z-10">
                  <div className="flex items-center justify-center bg-[#cb3737] h-[100px] md:h-[250px] w-[220px] md:w-[550px] rounded-[100px] md:rounded-[120px] px-[20px] md:px-[30px] pl-[80px] md:pl-[130px] ml-[-150px] md:ml-[-170px] text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] relative z-10">
                    <div className="pl-[15px] md:pl-[50px] ml-[-25px] md:ml-[10px] text-left max-w-[200px] md:max-w-[400px] break-words flex-1">
                      <h3 className="text-[0.7rem] md:text-[1.8rem] font-extrabold mb-[5px] text-black">
                        {item.title}
                      </h3>
                      <p className="text-[0.5rem] md:text-[1rem] font-normal text-black">
                        {item.description}
                      </p>
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
