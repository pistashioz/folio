"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const RightContent = () => {
    const videoRef = useRef(null);
    const revealRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 });

        revealRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            revealRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);
    return (
        <div id="right-content" className="flex flex-col items-center justify-center space-y-10 hide-scrollbar overflow-hidden">
            <section id="my-works" className="w-full flex flex-col items-start">
                <div>
                    <p className="text-zinc-800 text-lg italic font-monumentGrotesk leading-[30px]">WORKS</p>
                </div>
                <div id="project-2" className="w-full flex flex-col reveal" ref={addToRefs}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-zinc-800 text-[20px] regular font-monumentGrotesk leading-[30px]">✽ Brutalismo Latinoamericano</p>
                        <div className='flex justify-end w-24 mr-4 flex space-x-4 p-2'>
                            <a href="https://www.figma.com/design/ceJGy7BKiVyIjNUPELGlWs/High-fidelity-prototype?node-id=0-1&t=5bAJHhcLAuiFyfNv-1" target="_blank" rel="noopener noreferrer" className=' w-auto h-max'>
                                <FontAwesomeIcon icon={faFigma} />
                            </a>
                        </div>
                    </div>
                    <div className=" mt-[15px] flex flex-row justify-between items-start w-full">
                        <div>
                            <p className="lg:w-[300px] w-[200px] pr-4 text-neutral-400 text-sm font-monumentGrotesk leading-[15px]">Web design project exploring Brutalist architecture in Latin America. It highlights significant structures and architects, emphasizing the movement's importance and influence. This project is currently ongoing.</p>
                        </div>
                        <p className="flex justify-end  lg:w-[220px] w-[140px] text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">Figma, Whimsical, Adobe Illustrator</p>
                    </div>
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-12 gap-4">
                        <Image className="col-span-12 bg-gray-300 h-80 w-full object-cover" src="/brutalismo_latinoamericano_mockup.webp" alt="Brutalismo Latinoamericano Mockup" layout="responsive" width={700} height={400} />
                            <Image className="col-span-6 bg-gray-300 w-full object-cover" src="/brutalismo_latinoamericano_about.webp" alt="Brutalismo Latinoamericano About" layout="responsive" width={350} height={400} />
                            <Image className="col-span-6 bg-gray-300 w-full  object-cover" src="/Lina_Bo_Bardi.webp" alt="Lina Bo Bardi" layout="responsive" width={350} height={400} />
                        </div>
                    </div>
                </div>
                <div id="project-1" className="w-full flex flex-col reveal" ref={addToRefs}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-zinc-800 text-[20px] regular font-monumentGrotesk leading-[30px]">✽ Book Loop</p>
                        <div className='flex justify-end w-24 mr-4 flex space-x-4 p-2'>
                            <a href="https://github.com/pistashioz/Book-Loop" target="_blank" rel="noopener noreferrer" className=' w-auto h-max'>
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-[15px] flex flex-row justify-between items-start w-full">
                        <div>
                            <p className="lg:w-[300px] w-[200px] pr-4 text-neutral-400 text-sm font-monumentGrotesk leading-[15px]">Backend-focused project for buying and selling used books and discovering new literary works. Recognized as the best project in class for its advanced backend development. Currently improving the user interface</p>
                        </div>
                        <p className="flex justify-end mr-4 lg:w-[220px] w-[140px] text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">NodeJS (ExpressJS), POSTMAN, SQL, Figma, Whimsical, Adobe Illustrator, Render, Tailwind CSS, Nuxt.js</p>
                    </div>
                    <div className="container mx-auto p-4">
                        <div className="flex flex-col items-center p-4">
                            <Image className="bg-gray-300 object-cover" src="/poster_book_loop.webp" alt="Poster Book Loop" layout="intrinsic" width={300} height={200} />
                        </div>
                    </div>
                </div>
                <div id="project-3" className="w-full flex flex-col reveal pb-5" ref={addToRefs}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="w-19px text-zinc-800 text-[20px] regular font-monumentGrotesk leading-[30px]">✽ zerozero</p>
                    </div>
                    <div className="mt-[15px] flex flex-row justify-between items-start w-full">
                        <div>
                            <p className="lg:w-[300px] w-[200px] pr-4 text-neutral-400 text-sm font-monumentGrotesk leading-[15px]">This project modernizes the classic Arkanoid game by incorporating body movement controls, upgrading the interactive gaming experience. Recognized in class for its innovative approach.</p>
                        </div>
                        <p className="flex justify-end  mr-4 w-[220px] text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">Processing (Java)</p>
                    </div>
                    <div
                        className="container flex flex-col items-center p-4 h-60 lg:h-[340px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
  <iframe src="https://player.vimeo.com/video/1002377759?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="video_zerozero"></iframe>
                    </div>
                </div>
                <div id="project-4" className="w-full flex flex-col reveal" ref={addToRefs}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-zinc-800 text-[20px] regular font-monumentGrotesk leading-[30px]">✽ Nimbus</p>
                        <div className='flex justify-end w-24 mr-4 flex space-x-4 p-2'>
                            <a href="https://www.figma.com/design/5UuOgpC0lQId2KB5eCrcJe/High-Fidelity-Prototype-(Copy)?node-id=92-1240&t=OcrXqlwZ8AVBTVvx-1" target="_blank" rel="noopener noreferrer" className=' w-auto h-max'>
                                <FontAwesomeIcon icon={faFigma} />
                            </a>
                            <a href="https://github.com/pistashioz/Nimbus" target="_blank" rel="noopener noreferrer" className=' w-auto h-max'>
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-[15px] flex flex-row justify-between items-start w-full">
                        <div>
                            <p className="lg:w-[300px] w-[200px] pr-4 text-neutral-400 text-sm font-monumentGrotesk leading-[15px]">Frontend-focused weather forecast website using multiple APIs. Features geolocation and interactive weather data presentation. Currently undergoing Responsiveness improvements.</p>
                        </div>
                        <p className="flex justify-end mr-4 lg:w-[220px] w-[140px] text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">VueJS, REST API, Tailwind CSS, Figma, Whimsical, Adobe Illustrator, Adobe Photoshop, Adobe InDesign</p>
                    </div>
                    <div className="container mx-auto p-4">
                    <div class="grid grid-cols-12 gap-4">
                    <Image className="col-span-8 bg-gray-300 w-full object-cover" src="/nimbus_pic.webp" alt="Nimbus Pic" layout="responsive" width={700} height={400} />
                    <Image className="col-span-4 bg-gray-300 w-full" src="/Poster.webp" alt="Nimbus Poster" layout="responsive" width={350} height={400} />
                    <Image className="col-span-12 bg-gray-300 w-full" src="/nimbus_gif.gif"    preload="auto"    priority alt="Nimbus GIF" layout="responsive" width={1050} height={400} />
                  </div>
                    </div>
                </div>
                <div id="project-5" className="w-full flex flex-col reveal" ref={addToRefs}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-zinc-800 text-[20px] regular font-monumentGrotesk leading-[30px]">✽ Flower</p>
                        <div className='flex justify-end w-24 mr-4 flex space-x-4 p-2'>
                        <a href="https://github.com/pistashioz/Flower" target="_blank" rel="noopener noreferrer" className=' w-auto h-max'>
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://yoyisflower.vercel.app/" target="_blank" rel="noopener noreferrer" className='w-auto h-max'>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                        </div>
                    </div>
                    <div className="mt-[15px] flex flex-row justify-between items-start w-full">
                        <div>
                            <p className="lg:w-[300px] w-[200px] pr-4 text-neutral-400 text-sm font-monumentGrotesk leading-[15px]">Immersive platform that creates and displays dynamic graphics, simulating a flower's ambiance throughout the day and night.</p>
                        </div>
                        <p className="flex justify-end mr-4 lg:w-[220px] w-[140px] text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">Javascript (ThreeJS)</p>
                    </div>
                    <div className="container mx-auto p-4">
                        <div className="container flex flex-col items-end p-4 h-40 lg:h-[350px]">
                            <Image className="col-span-8 bg-gray-300 w-full h-full object-cover" src="/flower_project.webp" alt="Flower image" layout="responsive" width={700} height={400} />
                        </div>
           
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RightContent;
