import React, { useEffect, useRef, Suspense } from 'react'
import Menu from './Menu'
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
import Work from './Work';
import Faq from './Faq';
import Grid from './Grid';

// import VariableProximity from './VariableProximity';
import Threads from './Threads';
import Roadmap from './Roadmap';
import lilly from '../assets/lilly.jpg';
import video from '../assets/video.png';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import team1 from '../assets/1.jpeg';
import team2 from '../assets/2.jpeg';
import team3 from '../assets/3.jpeg';
import Tilt from 'react-parallax-tilt';


const Hyperspeed = React.lazy(() => import('./Hyperspeed'));
const ProfileCard = React.lazy(() => import('./ProfileCard'));
const CircularGallery = React.lazy(() => import('./CircularGallery'));
const CurvedLoop = React.lazy(() => import('./CurvedLoop'));



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

            <div className='w-full absolute left-0 right-0 h-[500px] lg:top-1/2 top-1/3 lg:mt-12'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Threads
                        amplitude={1}
                        distance={0}
                        enableMouseInteraction={true}
                    />
                </Suspense>
            </div>

            <section className="lg:px-20 px-5 lg:h-screen relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-6 pt-12 text-center mx-auto">
                        {/* <div data-aos='fade-up' className='space-y-5'>
                            <div
                                ref={containerRef}
                                style={{ position: 'relative' }}
                            >
                                <Suspense fallback={<div>Loading...</div>}>
                                    <VariableProximity
                                        label={'Powering the Digital Transaction Layer'}
                                        className={'variable-proximity-demo lg:text-[3.5rem] text-3xl font-darker uppercase'}
                                        fromFontVariationSettings="'wght' 500, 'opsz' 9"
                                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                        containerRef={containerRef}
                                        radius={100}
                                        falloff='linear'
                                    />
                                </Suspense>
                            </div>
                            <div
                                ref={containerRef}
                                style={{ position: 'relative' }}

                            >
                                <Suspense fallback={<div>Loading...</div>}>
                                    <VariableProximity
                                        label={'The future is digital So is $FLO'}
                                        className={'variable-proximity-demo lg:text-[3.5rem] text-3xl font-darker uppercase'}
                                        fromFontVariationSettings="'wght' 500, 'opsz' 9"
                                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                        containerRef={containerRef}
                                        radius={100}
                                        falloff='linear'
                                    />
                                </Suspense>
                            </div>
                        </div> */}

                        <img src={video} alt='video' className='lg:w-7/12 flex mx-auto'></img>

                        <div className="flex items-center justify-center md:gap-6 gap-3 mx-auto mt-6">
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

                        <a href='/' className='font-bold underline py-2'>Explore Ecosystem</a>

                        <div className="flex items-center justify-center pb-5 gap-6 mx-auto">
                            <a href='/'>
                                <img loading="lazy" src={telegram} alt='telegram' className='w-10'></img>
                            </a>
                            <a href='/'>
                                <img loading="lazy" src={instagram} alt='telegram' className='w-10'></img>
                            </a>
                            <a href='/'>
                                <img loading="lazy" src={x} alt='telegram' className='w-10'></img>
                            </a>
                            <a href='/'>
                                <img loading="lazy" src={discord} alt='telegram' className='w-10'></img>
                            </a>
                        </div>


                    </div>
                </div>
            </section>

            {/* abous us section */}

            <section id='about' className="lg:px-20 px-5 lg:py-20 pt-16 pb-6">
                <div className='container mx-auto'>

                    <div className='flex flex-col gap-y-5 items-center mx-auto justify-start lg:w-10/12 md:p-16 p-5 border-2 rounded-xl text-center lg:h-[90vh] border-blue-100 relative z-20'>
                        <p className='font-darker md:text-4xl font-bold uppercase'>About FloCoin</p>

                        <p className='font-darker md:text-5xl text-3xl font-extrabold uppercase'>Digital Utility with Real-World Use</p>

                        <p data-aos='fade-in' className='md:text-xl tracking-wide lg:leading-loose'>
                            FloCoin ($FLO) is a Solana-based utility token built for fast, frictionless digital value exchange. Whether it’s access to perks, payments between creators, or powering branded experiences — $FLO bridges Web3 flexibility with real-world outcomes.
                        </p>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Hyperspeed
                                effectOptions={{
                                    onSpeedUp: () => { },
                                    onSlowDown: () => { },
                                    distortion: 'turbulentDistortion',
                                    length: 400,
                                    roadWidth: 10,
                                    islandWidth: 2,
                                    lanesPerRoad: 4,
                                    fov: 90,
                                    fovSpeedUp: 150,
                                    speedUp: 2,
                                    carLightsFade: 0.4,
                                    totalSideLightSticks: 20,
                                    lightPairsPerRoadWay: 40,
                                    shoulderLinesWidthPercentage: 0.05,
                                    brokenLinesWidthPercentage: 0.1,
                                    brokenLinesLengthPercentage: 0.5,
                                    lightStickWidth: [0.12, 0.5],
                                    lightStickHeight: [1.3, 1.7],
                                    movingAwaySpeed: [60, 80],
                                    movingCloserSpeed: [-120, -160],
                                    carLightsLength: [400 * 0.03, 400 * 0.2],
                                    carLightsRadius: [0.05, 0.14],
                                    carWidthPercentage: [0.3, 0.5],
                                    carShiftX: [-0.8, 0.8],
                                    carFloorSeparation: [0, 5],
                                    colors: {
                                        roadColor: 0x080808,
                                        islandColor: 0x0a0a0a,
                                        background: 0x000000,
                                        shoulderLines: 0xFFFFFF,
                                        brokenLines: 0xFFFFFF,
                                        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                                        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                                        sticks: 0x03B3C3,
                                    }
                                }}
                            />
                        </Suspense>
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
                    <Suspense fallback={<div>Loading...</div>}>
                        <CurvedLoop
                            marqueeText="Powering the Digital Transaction layer"
                            speed={1}
                            curveAmount={300}
                            interactive={false}
                        />
                    </Suspense>
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
                                <img loading="lazy" src={utility1} alt='' className='md:w-40 w-24'></img>
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
                                <img loading="lazy" src={utility2} alt='' className='md:w-40 w-16'></img>
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
                                <img loading="lazy" src={utility3} alt='' className='md:w-40 w-24'></img>
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
                                <img loading="lazy" src={utility4} alt='' className='md:w-40 w-24'></img>
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

            <section id='use' className="lg:px-20 px-5 lg:py-20 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className='space-y-8'>
                        <h3 data-aos='fade-right' className='md:text-7xl text-3xl font-darker font-extrabold'>Trust & Security</h3>

                        <p data-aos='fade-left' className='md:text-5xl text-2xl font-black text-yellow-100 uppercase'>
                            Developed by a certified SAFU developer
                        </p>

                        <p className='font-black uppercase'>Audited by CFG NINJA & SOLIDPROOF</p>

                        <div className='flex items-start md:gap-28 gap-12 lg:py-6'>
                            <a href='https://app.solidproof.io/projects/flo-coin-global'>
                                <img loading="lazy" data-aos='zoom-in' src={trust1} alt='trust' className='md:w-52 w-28'></img>
                            </a>
                            <a href='https://audit.cfg.ninja/flo-coin-global'>
                                <img loading="lazy" data-aos='zoom-in' src={trust2} alt='trust' className='md:w-52 w-28'></img>
                            </a>
                        </div>

                        <div className='absolute w-screen h-screen mt-20 flex mx-auto lg:-ml-24'>
                            <Grid spacing={130} />
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
                        <Suspense fallback={<div>Loading...</div>}>
                            <CircularGallery bend={3} borderRadius={0.05} scrollEase={0.02} />
                        </Suspense>
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

                            <div className='flex items-center gap-3'>
                                <img src={team1} alt='team' className='lg:w-44 w-28 lg:h-64 h-56 object-cover'></img>
                                <img src={team2} alt='team' className='lg:w-44 w-28 lg:h-64 h-56 object-cover'></img>
                                <img src={team3} alt='team' className='lg:w-44 w-28 lg:h-64 h-56 object-cover'></img>
                            </div>
                        </div>

                        <div className='flex mx-auto'>
                            <Tilt>
                                <div className='bg-img h-[500px] w-96 rounded-3xl grayscale hover:grayscale-0 transition duration-300 hover:border-2 hover:border-yellow-100'>
                                    <p className='text-2xl py-2 text-center font-bold bg-black-100 bg-opacity-60 translate-y-9 w-full'>Lilly</p>
                                </div>
                            </Tilt>
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
                            <img loading="lazy" src={coin} alt='coin' className='lg:block hidden'></img>
                        </div>
                    </div>
                </div>
            </section>

            {/* roadmap section */}

            <section id='roadmap' className="lg:px-20 px-5 lg:pb-20 py-6">
                <div className='container mx-auto'>

                    <p data-aos='fade-up' className='md:text-5xl text-3xl font-black md:mb-12 mb-6'>Roadmap</p>

                    <div>
                        <Roadmap />
                    </div>
                </div>
            </section>

            {/* partner section */}

            <section id='partner' className="lg:px-20 px-5 lg:pb-20 py-6">
                <div className='container mx-auto'>

                    <p data-aos='fade-up' className='md:text-5xl text-3xl font-black md:mb-12 mb-6'>Partners</p>

                    <div className='grid grid-cols-2 items-center justify-center pt-8 gap-6'>
                        <a href='https://www.dtcgroup.io/'>
                            <img src={partner1} alt='partners' className='lg:w-1/2 w-36'></img>
                        </a>

                        <a href='https://x.com/ctd_events'>
                            <img src={partner2} alt='partners' className='lg:w-1/4 w-24'></img>
                        </a>

                        <a href='https://www.arcadiamarketing.io/'>
                            <img src={partner3} alt='partners' className='lg:w-1/2 w-36'></img>
                        </a>

                        <a href='https://solus.agency/'>
                            <img src={partner4} alt='partners' className='lg:w-1/4 w-24'></img>
                        </a>
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
                            <img loading="lazy" src={telegram} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                        <a href='/'>
                            <img loading="lazy" src={instagram} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                        <a href='/'>
                            <img loading="lazy" src={x} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
                        </a>
                        <a href='/'>
                            <img loading="lazy" src={discord} alt='telegram' className='w-10 hover:-translate-y-2 duration-200'></img>
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
