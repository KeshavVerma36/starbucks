'use client';

import React from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const [activeImage, setActiveImage] = React.useState('/images/img1.png');
  const [activeColor, setActiveColor] = React.useState('#017143');

  const imgslider = (image: string) => {
    setActiveImage(image);
  };

  const changecolor = (color: string) => {
    setActiveColor(color);
  };

  return (
    <section className="relative w-full min-h-screen p-24 flex justify-between items-center bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full clip-path-circle animate-pulse transition-colors duration-1000"
        style={{ backgroundColor: activeColor }}
        data-aos="fade-in"
      ></div>
      <header className="absolute top-0 left-0 w-full p-5 md:p-10 flex justify-between items-center" data-aos="slide-down">
        <a href="#" className="logo">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </a>
        <ul className="list-none flex space-x-10 text-gray-800">
          <li><a href="#" className="transition-colors duration-300 hover:text-[#017143]">Home</a></li>
          <li><a href="#" className="transition-colors duration-300 hover:text-[#017143]">Menu</a></li>
          <li><a href="#" className="transition-colors duration-300 hover:text-[#017143]">Whats New</a></li>
          <li><a href="#" className="transition-colors duration-300 hover:text-[#017143]">Contact</a></li>
        </ul>
      </header>
      <div className="relative w-full flex justify-between items-center" data-aos="fade-up">
        <div className="relative max-w-lg">
          <h2 className="text-gray-800 text-5xl leading-tight font-bold mb-4">
            Its not just Coffee <br /> Its <span className="text-[#017143] font-extrabold">Star Bucks</span>
          </h2>
          <p className="text-gray-800 mb-4">
            Coffee lovers around the world who reach for their favorite morning brew probably arent thinking about its health benefits or risks. And yet this beverage has been subject to a long history of debate. In 1991 coffee was included in a list of possible carcinogens by the World Health Organization. By 2016 it was exonerated, as research found that the beverage was not associated with an increased risk of cancer.
          </p>
          <a href="#" className="inline-block mt-5 py-2 px-5 bg-[#017143] text-white rounded-full font-medium tracking-wide transition-transform duration-300 hover:bg-[#014a36]">Learn More</a>
        </div>
        <div className="w-96 flex justify-end pr-12 mt-12">
          <div className="relative transition-opacity duration-500">
            <Image src={activeImage} alt="Starbucks Image" width={400} height={400} className="transition-transform duration-300 transform scale-100 hover:scale-105" />
          </div>
        </div>
      </div>
      <ul className="absolute left-1/2 bottom-12 transform -translate-x-1/2 flex space-x-5" data-aos="fade-in">
        <li>
          <img
            src="/images/thumb1.png"
            alt="Thumbnail 1"
            onClick={() => { imgslider('/images/img1.png'); changecolor('#017143'); }}
            className="transition-transform duration-300 hover:translate-y-[-30px] hover:scale-110 cursor-pointer"
          />
        </li>
        <li>
          <img
            src="/images/thumb2.png"
            alt="Thumbnail 2"
            onClick={() => { imgslider('/images/img2.png'); changecolor('#eb7495'); }}
            className="transition-transform duration-300 hover:translate-y-[-30px] hover:scale-110 cursor-pointer"
          />
        </li>
        <li>
          <img
            src="/images/thumb3.png"
            alt="Thumbnail 3"
            onClick={() => { imgslider('/images/img3.png'); changecolor('#d752b1'); }}
            className="transition-transform duration-300 hover:translate-y-[-30px] hover:scale-110 cursor-pointer"
          />
        </li>
      </ul>
      <ul className="text-4xl flex flex-col items-center justify-center absolute top-1/2 transform -translate-y-1/2 space-y-4" data-aos="fade-in">
        <li className="text-white">
          <a href="#" className="fa fa-facebook transition-transform duration-300 hover:scale-110"></a>
        </li>
        <li className="text-white">
          <a href="#" className="fa fa-twitter transition-transform duration-300 hover:scale-110"></a>
        </li>
        <li className="text-white">
          <a href="#" className="fa fa-instagram transition-transform duration-300 hover:scale-110"></a>
        </li>
      </ul>
    </section>
  );
}
  
