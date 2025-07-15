import React, { useRef, useEffect, useState } from "react";

const roadmapData = [
  {
    phase: "Phase 1: Foundation & Launch",
    items: [
      "Launch on Solana",
      "Raydium listing",
      "Website & tokenomics v2",
      "Smart contract audits",
      "Public rollout via Telegram & X",
    ],
  },
  {
    phase: "Phase 2: IRL Utility & Community Growth",
    items: [
      "Sponsor race events across Europe",
      "Launch NFT Access Passes",
      "Begin CEX listings",
      "First FloCoin IRL activation",
    ],
  },
  {
    phase: "Phase 3: Expansion & Utility",
    items: [
      "Launch FLO-powered mini-games, bots, and merch",
      "Integrate $FLO at events and experiences",
      "Scale brand deals and real-world utility",
    ],
  },
  {
    phase: "Phase 4: Global Scaling",
    items: [
      "Expand into MENA, APAC, and US",
      "Launch the Flo App (wallet + access)",
      "Roll out governance tools and recap community growth",
    ],
  },
];

const Roadmap = () => {
  return (
    <div className="pt-8">
      <div className="relative border-l-2 border-gray-600 ml-4">
        {roadmapData.map((phase, index) => (
          <PhaseBlock key={index} data={phase} />
        ))}
      </div>
    </div>
  );
};

const PhaseBlock = ({ data }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-12 pl-6 relative transition-all duration-500">
      {/* Dot */}
      <div
        className={`w-10 h-10 rounded-full absolute -left-[1.4rem] -top-1.5 border-[7px] border-black-100 ${
          isInView ? "bg-green-400" : "bg-gray-600"
        }`}
      />

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{data.phase}</h3>

      {/* Items */}
      <ul className="list-disc ml-5 md:pt-6 pt-4 space-y-1 lg:flex lg:gap-x-24 lg:gap-y-5 flex-wrap lg:w-8/12">
        {data.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
