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

  // Auto-slide every 4 seconds with fade/slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
        setFade(true); // fade in
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full text-white overflow-hidden">
      {/* Slide */}
      <div
        className={`flex items-center justify-center gap-24 transform transition-all duration-300 ease-in-out lg:h-[50vh] ${
          fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
        <div className="space-y-4">
          <p className="font-darker md:text-5xl text-2xl font-bold uppercase text-yellow-100">
            {slides[activeIndex].number}
          </p>
          <p className="font-darker md:text-5xl text-2xl font-bold">
            {slides[activeIndex].title}
          </p>
          <p className="text-slate-400">{slides[activeIndex].desc}</p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={slides[activeIndex].img}
            alt="slide-img"
            className="w-8/12 lg:float-right"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mx-auto h-1.5 bg-white-100 relative overflow-hidden mt-8">
        <div
          key={activeIndex} // this key triggers bar animation reset
          className="h-1.5 bg-yellow-100 transition-all duration-[300ms]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
