import React, { useEffect, useRef } from 'react'
import Menu from './Menu'
import mesh from '../assets/mesh.png';
import utility1 from '../assets/utility1.png';
import utility2 from '../assets/utility2.png';
import utility3 from '../assets/utility3.png';
import utility4 from '../assets/utility4.png';
import x from '../assets/x.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import instagram from '../assets/instagram.png';
import trust1 from '../assets/trust1.png';
import trust2 from '../assets/trust2.png';
import coin from "../assets/coin.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import CurvedLoop from './CurvedLoop';
import Work from './Work';
import CircularGallery from './CircularGallery';
import ProfileCard from './ProfileCard';
import Faq from './Faq';
import VariableProximity from './VariableProximity';
import Wave from './Wave';


export default function Home() {

    const containerRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    const faqItems = [
        {
            title: "What is FloCoin ($FLO)?",
            content:
                "A utility token on Solana powering real-world use cases — from digital access to branded experiences.",
        },
        {
            title: "How do i get NFTs?",
            content:
                "A utility token on Solana powering real-world use cases — from digital access to branded experiences.",
        },
        {
            title: "Is $FLO audited?",
            content:
                "A utility token on Solana powering real-world use cases — from digital access to branded experiences.",
        },
        {
            title: "Does $FLO offer staking or token burns?",
            content:
                "A utility token on Solana powering real-world use cases — from digital access to branded experiences.",
        },
    ];

    return (
        <div className="bg-black-100 font-mulish overflow-hidden text-white-100">

            <div className='absolute left-0 right-0 top-96 lg:block hidden'>
                <Wave />
            </div>

            <section className="lg:px-20 px-5 lg:h-screen relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-6 lg:pt-28 pt-12 text-center mx-auto">
                        <div data-aos='fade-up' className='space-y-5'>
                            <div
                                ref={containerRef}
                                style={{ position: 'relative' }}
                            >
                                <VariableProximity
                                    label={'Powering the Digital Transaction Layer'}
                                    className={'variable-proximity-demo lg:text-[3.5rem] text-3xl font-darker uppercase'}
                                    fromFontVariationSettings="'wght' 500, 'opsz' 9"
                                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                    containerRef={containerRef}
                                    radius={100}
                                    falloff='linear'
                                />
                            </div>
                            <div
                                ref={containerRef}
                                style={{ position: 'relative' }}

                            >
                                <VariableProximity
                                    label={'The future is digital So is $FLO'}
                                    className={'variable-proximity-demo lg:text-[3.5rem] text-3xl font-darker uppercase'}
                                    fromFontVariationSettings="'wght' 500, 'opsz' 9"
                                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                    containerRef={containerRef}
                                    radius={100}
                                    falloff='linear'
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center py-5 gap-6 mx-auto">
                            <a href='/'>
                                <img src={telegram} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                            </a>
                            <a href='/'>
                                <img src={instagram} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                            </a>
                            <a href='/'>
                                <img src={x} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                            </a>
                            <a href='/'>
                                <img src={discord} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                            </a>
                        </div>

                        <div className="flex items-center justify-center md:gap-8 gap-3 mx-auto ">
                            <a data-aos='fade-left' href="/">
                                <button className="rounded-full py-3 font-extrabold px-5 bg-yellow-100 text-black-100 uppercase">
                                    Launch APP
                                </button>
                            </a>

                            <a data-aos='fade-right' href="/">
                                <button className="rounded-full py-3 font-extrabold px-5 bg-yellow-100 text-black-100 uppercase">
                                    Whitepaper
                                </button>
                            </a>
                        </div>
                        <div className='absolute left-0 right-0 top-80 mt-36 lg:hidden block'>
                            <Wave />
                        </div>
                    </div>
                </div>
            </section>

            {/* abous us section */}

            <section id='about' className="lg:px-20 px-5 lg:py-20 pt-16 pb-6">
                <div className='container mx-auto'>

                    <div className='flex flex-col gap-y-5 items-center mx-auto justify-start lg:w-10/12 md:p-16 p-5 border-2 rounded-xl text-center bg-lines lg:h-[75vh] border-blue-100'>
                        <p className='font-darker md:text-4xl font-bold uppercase'>About FloCoin</p>

                        <p className='font-darker md:text-5xl text-3xl font-extrabold uppercase'>Digital Utility with Real-World Use</p>

                        <p data-aos='fade-in' className='md:text-xl tracking-wide lg:leading-loose'>
                            FloCoin ($FLO) is a Solana-based utility token built for fast, frictionless digital value exchange. Whether it’s access to perks, payments between creators, or powering branded experiences — $FLO bridges Web3 flexibility with real-world outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* How We work */}

            <section id='work' className="lg:px-20 px-5 py-6">
                <div className='container mx-auto'>

                    <div className='flex flex-col justify-center mx-auto lg:w-8/12'>
                        <p data-aos='fade-up' className='font-darker md:text-5xl text-2xl font-extrabold'>How We work</p>

                        <Work />
                    </div>

                    <CurvedLoop
                        marqueeText="Smooth Curved Animation"
                        speed={1}
                        curveAmount={300}
                        interactive={false}
                    />
                </div>
            </section>

            {/* How to Use $FLO section */}

            <section id='use' className="lg:px-20 px-5 lg:py-28 py-6">
                <div className='container mx-auto'>

                    <div data-aos='fade-right' className='space-y-8'>
                        <h3 className='md:text-7xl text-3xl font-darker font-extrabold'>How to Use $FLO</h3>

                        <div>
                            <p className='md:text-7xl text-3xl font-black text-yellow-100'>
                                Get $FLO
                            </p>
                            <p className='text-white-50 font-black uppercase pt-3'>Buy $FLO directly on Raydium using SOL or USDC.</p>
                        </div>
                        <div>
                            <p className='md:text-7xl text-3xl font-black text-yellow-100'>
                                Connect Your Wallet
                            </p>
                            <p className='text-white-50 font-black uppercase pt-3'>
                                Use Phantom, Backpack, or any Solana-compatible wallet.
                            </p>
                        </div>
                        <div>
                            <p className='md:text-7xl text-3xl font-black text-yellow-100'>
                                EARN ACTION POINTS
                            </p>
                            <p className='text-white-50 font-black uppercase pt-3'>
                                Earn points through engagement, referrals, or campaign participation.
                            </p>
                        </div>
                        <div>
                            <p className='md:text-7xl text-3xl font-black text-yellow-100'>
                                REDEEM FOR ACCESS
                            </p>
                            <p className='text-white-50 font-black uppercase pt-3'>
                                Use $FLO or points to access digital goods, utilities, or IRL perks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Utilities section */}

            <section id='utility' className="lg:px-20 px-5 lg:pb-20 py-6">
                <div className='container mx-auto'>

                    <div data-aos='fade-left' className='md:space-y-12 space-y-8'>
                        <h3 className='md:text-7xl text-4xl font-darker font-extrabold'>Core Utilities</h3>

                        <div className='flex lg:items-center items-start md:gap-6 gap-4 pt-5'>
                            <div>
                                <img src={utility1} alt='' className='md:w-40 w-24'></img>
                            </div>
                            <div>
                                <p className='md:text-6xl text-2xl font-black text-yellow-100 uppercase'>
                                    NFT Ticketing
                                </p>
                                <p className='text-white-50 md:font-black font-bold uppercase pt-3'>
                                    On-chain tickets with tradability and authenticity
                                </p>
                            </div>
                        </div>

                        <div className='flex lg:items-center items-start md:gap-6 gap-4'>
                            <div>
                                <img src={utility2} alt='' className='md:w-40 w-16'></img>
                            </div>
                            <div>
                                <p className='md:text-6xl text-2xl font-black text-yellow-100 uppercase'>
                                    INSTANT PAYMENTS
                                </p>
                                <p className='text-white-50 md:font-black font-bold uppercase pt-3'>
                                    Send and receive value instantly
                                </p>
                            </div>
                        </div>

                        <div className='flex lg:items-center items-start md:gap-6 gap-4'>
                            <div>
                                <img src={utility3} alt='' className='md:w-40 w-24'></img>
                            </div>
                            <div>
                                <p className='md:text-6xl text-2xl font-black text-yellow-100 uppercase'>
                                    Campaign Access
                                </p>
                                <p className='text-white-50 md:font-black font-bold uppercase pt-3'>
                                    Fuel brand activations or limited-access drops
                                </p>
                            </div>
                        </div>

                        <div className='flex lg:items-center items-start md:gap-6 gap-4'>
                            <div>
                                <img src={utility4} alt='' className='md:w-40 w-24'></img>
                            </div>
                            <div>
                                <p className='md:text-6xl text-2xl font-black text-yellow-100 uppercase'>
                                    Gamified Rewards
                                </p>
                                <p className='text-white-50 md:font-black font-bold uppercase pt-3'>
                                    Earn Action Points, unlock perks, get rewarded
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust & Security */}

            <section id='use' className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <div className='space-y-8'>
                        <h3 data-aos='fade-right' className='md:text-7xl text-3xl font-darker font-extrabold'>Trust & Security</h3>

                        <p data-aos='fade-left' className='md:text-5xl text-2xl font-black text-yellow-100 uppercase'>
                            Developed by a certified SAFU developer
                        </p>

                        <p className='font-black uppercase'>Audited by CFG NINJA & SOLIDPROOF</p>

                        <div className='flex items-start md:gap-28 gap-12 lg:py-6'>
                            <img data-aos='zoom-in' src={trust1} alt='trust' className='md:w-52 w-28'></img>
                            <img data-aos='zoom-in' src={trust2} alt='trust' className='md:w-52 w-28'></img>
                        </div>

                        <p className='font-black uppercase text-white-50'>FloCoin is built with transparency, performance, and long-term trust in mind.</p>

                        <h3 data-aos='fade-up' className='md:text-7xl text-3xl font-darker font-extrabold lg:pt-12'>Real-World Presence</h3>

                        <p className='font-black text-white-50'>
                            FloCoin doesn’t just live on-chain — it shows up on the streets and on the track.<br></br>
                            We’ve proudly sponsored race events across Europe, including:
                        </p>

                        <ul className='font-black text-white-50 space-y-3'>
                            <li>
                                Motorcycle racing events in top circuits
                            </li>
                            <li>
                                Professional car racing competitions
                            </li>
                            <li>
                                Exclusive supercar showcases attended by high-net-worth audiences
                            </li>
                        </ul>
                    </div>

                    <div style={{ height: '600px', position: 'relative' }}>
                        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                    </div>
                </div>
            </section>

            {/* Team section */}

            <section id='use' className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <div className='flex flex-wrap items-start justify-between md:gap-28 gap-12 lg:py-6'>
                        <div className='space-y-5 lg:w-5/12'>
                            <p data-aos='fade-up' className='md:text-5xl text-3xl font-black'>
                                Team
                            </p>
                            <p data-aos='fade-in' className='md:text-3xl text-xl font-extrabold'>
                                Lilly Douse – Head of Communications
                            </p>
                            <p data-aos='fade-in'>
                                Lilly leads FloCoin’s communications, partnerships, and public image. As one of the project’s public faces, she connects $FLO with audiences across both the Web3 world and real-world activations.
                            </p>
                        </div>

                        <div className='flex mx-auto'>
                            <ProfileCard
                                name="Javi A. Torres"
                                title="Software Engineer"
                                handle="javicodes"
                                status="Online"
                                contactText="Contact Me"
                                avatarUrl="/path/to/avatar.jpg"
                                showUserInfo={true}
                                enableTilt={true}
                                onContactClick={() => console.log('Contact clicked')}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* tokenomics section */}

            <section id='tokenomics' className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <div className='flex flex-wrap items-start justify-between md:gap-28 gap-12 lg:py-6'>
                        <div className=''>
                            <p data-aos='fade-up' className='md:text-5xl text-3xl font-black md:mb-12 mb-6'>Tokenomics</p>

                            <div data-aos='fade-in' className='space-y-8'>
                                <p className='md:text-3xl text-xl font-bold'>Ticker: <span className='text-yellow-100'>$FLO</span></p>
                                <p className='md:text-3xl text-xl font-bold'>Chain: <span className='text-yellow-100'>Solana</span>
                                </p>
                                <p className='md:text-3xl text-xl font-bold'>Total Supply: <span className='text-yellow-100'>1,000,000,000</span>
                                </p>
                                <p className='md:text-3xl text-xl font-bold'>Staking/Burn: <span className='text-yellow-100'>None — utility-first, no gimmicks</span>
                                </p>
                                <p className='md:text-3xl text-xl font-bold'>Launch Strategy: <span className='text-yellow-100'>Low float, high-FDV positioning</span></p>
                                <p className='md:text-3xl text-xl font-bold'>Purpose:  <span className='text-yellow-100'>Built for digital transactions, not speculation</span></p>
                            </div>
                        </div>
                        <div>
                            <img src={coin} alt='coin' className='lg:block hidden'></img>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}

            <section id='faq' className="lg:px-20 px-5 py-6">
                <div className='container mx-auto'>
                    <div className='text-center'>
                        <p className='text-yellow-100 uppercase text-xl tracking-wide font-extrabold pb-2'>
                            Questions
                        </p>
                        <h3 data-aos='fade-up' className='md:text-5xl text-3xl font-black uppercase'>
                            FAq
                        </h3>
                    </div>
                    <div className='lg:py-16 py-8'>
                        <Faq items={faqItems} />
                    </div>

                    <div className="flex items-center justify-center py-6 gap-6 mx-auto">
                        <a href='/'>
                            <img src={telegram} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                        <a href='/'>
                            <img src={instagram} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                        <a href='/'>
                            <img src={x} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                        <a href='/'>
                            <img src={discord} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                    </div>

                    <div className='text-center space-y-5'>
                        <p className=''>
                            Don’t hesitate to subscribe to latest news about ICo markets as well as crucial<br></br> financial knowledge to become successful investors globally
                        </p>

                        <p>© 2025. All rights reserved by flocoin</p>
                    </div>

                </div>
            </section>



        </div>
    )
}  
