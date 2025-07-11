import { useEffect, useState } from "react";
import jar from "../assets/jar.png";
import coin from "../assets/coin.png";
import dollar from "../assets/dollar.png";
import coins from "../assets/coins.png";

const slides = [
  {
    number: "01.",
    title: "Token Trading",
    desc: "Trade $FLO instantly via Solana DEXs like Raydium",
    img: jar,
  },
  {
    number: "02.",
    title: "Supplier Expansion",
    desc: "Creators, vendors, and platforms accept $FLO for services or rewards.",
    img: coin,
  },
  {
    number: "03.",
    title: "Business Transactions",
    desc: "Use $FLO to fund activations, unlock digital utility, or fuel campaigns.",
    img: dollar,
  },
  {
    number: "04.",
    title: "FloCoin Action Points",
    desc: "Engage and earn — Points convert into $FLO for access and perks",
    img: coins,
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const totalSlides = slides.length;

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      triggerNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Handle manual navigation with fade effect
  const triggerChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const triggerNext = () => {
    triggerChange((activeIndex + 1) % totalSlides);
  };

  const triggerPrev = () => {
    triggerChange((activeIndex - 1 + totalSlides) % totalSlides);
  };

  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full text-white overflow-hidden relative group">
      {/* Slide */}
      <div
        className={`lg:flex items-center justify-center gap-24 transform transition-all duration-300 ease-in-out lg:h-[50vh] lg:space-y-0 space-y-8 ${fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
      >
        <div className="space-y-4 px-4">
          <p className="font-darker md:text-5xl text-3xl font-bold uppercase text-yellow-100">
            {slides[activeIndex].number}
          </p>
          <p className="font-darker md:text-5xl text-3xl font-bold">
            {slides[activeIndex].title}
          </p>
          <p className="text-slate-400">{slides[activeIndex].desc}</p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={slides[activeIndex].img}
            alt="slide-img"
            className="lg:w-8/12 w-5/12 flex mx-auto lg:float-right"
          />
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={triggerPrev}
        className="absolute bottom-2 left-4 transform -translate-y-1/3 text-white text-3xl font-bold duration-150 opacity-0 group-hover:opacity-100"
      >
        ←
      </button>
      <button
        onClick={triggerNext}
        className="absolute bottom-2 right-4 transform -translate-y-1/3 text-white text-3xl font-bold duration-150 opacity-0 group-hover:opacity-100"
      >
        →
      </button>

      {/* Progress Bar */}
      <div className="mx-auto h-1.5 bg-white-100 relative overflow-hidden mt-8">
        <div
          key={activeIndex}
          className="h-1.5 bg-yellow-100 transition-all duration-[300ms]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
