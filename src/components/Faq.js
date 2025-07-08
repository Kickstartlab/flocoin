import React, { useState } from "react";

const Faq = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border border-[#FFFFFF29] rounded-lg">
                    <div
                        className={`flex justify-between items-center p-4 cursor-pointer ${activeIndex === index ? "bg-[#FFFFFF0A]" : "bg-[#FFFFFF0A]"
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="md:text-lg font-semibold">{item.title}</h3>
                        <span
                            className={`transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M7.97278 9.34473L6.31226 11.1238L14.6148 20.0195L22.9174 11.1239L21.2569 9.34476L14.6149 16.4612L7.97278 9.34473Z" fill="white" />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[200px] p-4" : "max-h-0"}`}>
                        <p className="text-sm">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
