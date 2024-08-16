"use client";
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('');

  const earlyLifeRef = useRef(null);

  const interestsRef = useRef(null);
  const travelRef = useRef(null);
  const relocationRef = useRef(null);
  const careerRef = useRef(null);

  const sections = {
    earlyLife: earlyLifeRef,
    interests: interestsRef,
    travel: travelRef,
    relocation: relocationRef,
    career: careerRef,
  };

  const options = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.5, 
  };

  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('data-section'));
        }
      });
    }, options);

    Object.values(sections).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sections).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sections]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full p-6 md:p-12 lg:p-12 flex flex-col'>
      <Navbar />
      <main className='flex-grow text-zinc-800 text-base flex items-center justify-center lg:flex-row w-full md:text-lg lg:text-[20px] font-monumentGrotesk'>
    <div className='m-4 w-full lg:w-9/10 lg:h-screen flex'>
    <div className='fixed w-1/10'>
      <h3 className='font-bold text-lg'>Contents</h3>
      <span className="flex items-center mt-2">
        <span className="h-px flex-1 bg-gray-200"></span>
      </span>
      <ul className='mt-2 text-[14px]'>
        <li 
          className={`text-[#26499B] cursor-pointer ${activeSection === '' ? 'font-bold' : ''}`} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >(Top)</li>
        <li 
          className={`text-[#26499B] cursor-pointer ${activeSection === 'earlyLife' ? 'font-bold' : ''}`} 
          onClick={() => scrollToSection(earlyLifeRef)}
        >Early Life</li>
        <li 
          className={`text-[#26499B] cursor-pointer ${activeSection === 'interests' ? 'font-bold' : ''}`} 
          onClick={() => scrollToSection(interestsRef)}
        >Interests</li>
        <li 
          className={`text-[#26499B] cursor-pointer ${activeSection === 'travel' ? 'font-bold' : ''}`} 
          onClick={() => scrollToSection(travelRef)}
        >Travel Adventures</li>
        <li 
          className={`text-[#26499B] cursor-pointer ${activeSection === 'relocation' ? 'font-bold' : ''}`} 
          onClick={() => scrollToSection(relocationRef)}
        >Relocation to Portugal</li>
        <li 
          className={`text-[#26499B] cursor-pointer ${activeSection === 'career' ? 'font-bold' : ''}`} 
          onClick={() => scrollToSection(careerRef)}
        >Career Aspirations</li>
      </ul>
    </div>
      <div className='ml-44 m-2 w-full'>
          <div className='font-normal font-monumentGrotesk lg:text-sm text-2xl mr-12 mt-4'>
          <span class="text-[#303030]">
              <span className='font-bold'>Victoria Martínez</span> is a Venezuelan student currently based in&nbsp;
          </span>
          <a href="https://en.wikipedia.org/wiki/Porto" className='text-[#312af6]' >Porto</a>
          <span class="text-[#303030]">
              , Portugal. She is in her final year, majoring in&nbsp;
          </span>
          <a href="en.wikipedia.org/wiki/web_development" className='text-[#312af6]'>Web Development</a>
 
          <span class="text-[#303030]">
              , with a goal of collaborating with clients in the arts, architecture, fashion, and media industries.<br/>
              Martínez began developing her passion for design by using her grandfather's &nbsp;
          </span>
          <a href="https://en.wikipedia.org/wiki/Cartography" className='text-[#312af6]'>cartographer</a>&nbsp;
          <span class="text-[#303030]">
              tools to sketch house designs. During family road trips, she would often imagine how she could change the aesthetic of old buildings, dreaming up ways to give a new life into them. <br></br> Unlike other children, she preferred architecture and design magazines over dolls or makeup, always needing to know the latest trends. <br></br> Fascinated by&nbsp; 
          </span>
          <a href="https://en.wikipedia.org/wiki/Japan" className='text-[#312af6]'>Japanese&nbsp;</a>
          <span class="text-[#303030]">
              design websites, she found their aesthetics particularly appealing, and she started her journey trough web development.<br/>
              At 19, she discovered the major she is currently pursuing and became enchanted by it. Today, Martínez is seeking an internship for her final year, starting in March 2025.
          </span>
          </div>
            <div ref={earlyLifeRef} data-section="earlyLife" className='font-normal font-monumentGrotesk text-sm mr-12 mt-8'>
              <div className='mb-4'>
                <h2 className='text-2xl'>Early Life and Education</h2>
                <span className="flex items-center mt-2">
                  <span className="h-px flex-1 bg-black"></span>
                </span>
              </div>
              <p className='lg:text-sm text-2xl'>Victoria Martínez is the oldest daughter in her family, known for her strong character and personality. She completed her primary and most of secondary in <a className='text-[#312af6]' href="https://en.wikipedia.org/wiki/Valencia,_Venezuela" title="Valencia, Carabobo">
                    Valencia, Carabobo
                  </a>. Victoria’s early passion for art became evident when she would paint the walls of her home, using shoe polish to create her masterpieces—much to the bewilderment of her parents. From a young age, she felt a deep need to express herself, finding her true voice through design. </p>
            </div>
            <div ref={interestsRef} data-section="interests" className='font-normal font-monumentGrotesk text-sm mr-12 mt-8'>
              <div className='mb-4'>
                <h2 className='text-2xl'>Interests and Activities</h2>
                <span className="flex items-center mt-2">
                  <span className="h-px flex-1 bg-black"></span>
                </span>
              </div>
              <p className='lg:text-sm text-2xl'>Growing up, Martínez engaged in various sports and activities, including flamenco, aerial dance, tennis, hiking, ballet, and swimming. Additionally, she cherished spending time at her grandmother's farm, located in the Venezuelan <a className='text-[#312af6]' href='https://en.wikipedia.org/wiki/Amazon_rainforest'>Amazon rainforest</a>.&nbsp;At the farm, she helped make cheese, rode horses with her cousin, fed the cows, chickens, and pigs, swam in the lake, and relaxed in the hammock. Her greatest wish remains to return to this cherished farm.</p>
            </div>
            <div ref={travelRef} data-section="travel" className='font-normal font-monumentGrotesk text-sm mr-12 mt-6'>
              <div className='mb-4 '>
                <h2 className='text-2xl'>Travel Adventures</h2>
                <span className="flex items-center mt-2">
                  <span className="h-px flex-1 bg-black"></span>
                </span>
              </div>
                <p className='lg:text-sm text-2xl'>Martínez has always loved to travel. She has visited several countries, including:</p>
                <ul className="list-disc pl-4 lg:text-sm text-2xl">
                  <li>United States: Florida, California</li>
                  <li>United Kingdom: London</li>
                  <li>Türkiye: Istanbul</li>
                  <li>Spain: Barcelona, Madrid, Malaga, Marbella, Vigo</li>
                  <li>Germany: Berlin</li>
                  <li>The Netherlands: Amsterdam, Vught</li>
                  <li>Curaçao: Willemstad</li>
                  <li>Aruba: Oranjestad</li>
                  <li>Brazil: Roraima</li>
                  <li>Panama: Panama City</li>
                </ul>

            </div>
            <div ref={relocationRef} data-section="relocation" className='font-normal font-monumentGrotesk text-sm mt-8 w-full lg:w-[160%] lg:mr-[-25%]'>
              <div className='mb-4'>
                <h2 className='text-2xl'>Relocation to Portugal</h2>
                    <span className="flex items-center mt-2">
                      <span className="h-px flex-1 bg-black"></span>
                    </span>
                  </div>
                  <p className='lg:text-sm text-2xl'>In mid-2017, at the age of 13, Martínez fled the dictatorship in Venezuela and relocated to Portugal. This transition required her to start anew, adapting to a different culture, learning a new language, and rebuilding her life from scratch. Despite having lived in Portugal for seven years, she still struggles with the winter weather, as she prefers the warm, <a href="https://en.wikipedia.org/wiki/Caribbean" className='text-[#312af6]'>Caribbean</a> climate year-round.

    However, Martínez has embraced Portuguese culture wholeheartedly. She loves traditional Portuguese cuisine, particularly obsessed with <a href="https://en.wikipedia.org/wiki/Pastel_de_nata" className='text-[#312af6]'>Pastéis de Nata</a> and <a href="https://en.wikipedia.org/wiki/Francesinha" className='text-[#312af6]'>Francesinha</a>, and she encourages everyone to try these dishes at least once in their lifetime. Additionally, she enjoys traveling by train within Portugal and is enthusiastic about recommending the best spots in <a href="https://en.wikipedia.org/wiki/Porto" className='text-[#312af6]' >Porto</a> to tourists, sharing her local insights and experiences.</p>
            </div>
            <div ref={careerRef} data-section="career" className='font-normal font-monumentGrotesk text-sm mt-8 w-full lg:w-[160%] lg:mr-[-25%] pb-24'>
              <div className='mb-4'>
                <h2 className='text-2xl'>Career Aspirations</h2>
                    <span className="flex items-center mt-2">
                      <span className="h-px flex-1 bg-black"></span>
                    </span>
                  </div>
                  <p className='lg:text-sm text-2xl' >After taking a gap year to explore her options, Martínez discovered a strong interest in web development and design, fields in which she has since developed both confidence and passion. She aspires to specialize in web design or software engineering, or potentially both. Additionally, inspired by her childhood fascination with revitalizing old buildings, she is considering pursuing a major in architecture as well.</p>
            </div>
    
          </div>
          
<div class='m-4 md:m-8 lg:m-8 bg-graywiki stroke-gray-100 lg:w-[375px] w-full max-w-xs h-[750px] lg:h-[900px] flex flex-col items-center justify-center border border-gray-400'>
  <div class='m-4 lg:m-8 w-full h-full flex flex-col items-center justify-between table-row-group align-middle border-color:inherit'>
    <div class='mb-4 mt-4 lg:mt-8 flex flex-col items-center justify-between'>
      <h3 class='font-bold font-monumentGrotesk text-base md:text-md lg:text-md'>Victoria Martínez</h3>
      <div class='bg-white w-32 md:w-48 lg:w-56 h-auto'>
        <img
          src='/foto_folio.png' 
          alt='Victoria Martínez'
          class='w-full h-auto'
        />
      </div>
      <p className='font-normal font-monumentGrotesk text-xs md:text-sm lg:text-sm'>Martinez in 2024</p>
    </div>
    <div className='mt-4 p-2'>
      <div className='flex flex-col md:flex-row justify-between p-2'>
        <span className='font-bold font-monumentGrotesk text-xs md:text-sm lg:text-sm text-left w-24 md:w-32'>Born</span>
        <span className='font-normal font-monumentGrotesk text-xs md:text-sm lg:text-sm'>
          <div>Victoria Martínez</div>
          <div>September 27, 2003 (age 20)</div>
          <div className='inline'>
            <a className='text-[#312af6]' href="https://en.wikipedia.org/wiki/Valencia,_Venezuela" title="Valencia, Carabobo">
              Valencia, Carabobo
            </a>, Venezuela
          </div>
        </span>
      </div>

      <div className='flex flex-col md:flex-row justify-between p-2 mt-2'>
        <span className='font-bold font-monumentGrotesk text-xs md:text-sm lg:text-sm text-left w-24 md:w-32'>Occupations</span>
        <span className='font-normal font-monumentGrotesk text-xs md:text-sm lg:text-sm'>
          Student · aerial dance teacher · web developer · web designer
        </span>
      </div>
      <div className='flex flex-col md:flex-row justify-between p-2 mt-2'>
        <span className='font-bold font-monumentGrotesk text-xs md:text-sm lg:text-sm text-left w-24 md:w-32'>Technologies</span>
        <span className='font-normal font-monumentGrotesk text-xs md:text-sm lg:text-sm'>
          React.js · VueJS · Express.js · Javascript ES6+ · Python · Processing · Figma
        </span>
      </div>
      <div className='flex flex-col md:flex-row justify-between p-2 mt-2'>
        <span className='font-bold font-monumentGrotesk text-xs md:text-sm lg:text-sm text-left w-24 md:w-32'>Languages</span>
        <span className='font-normal font-monumentGrotesk text-xs md:text-sm lg:text-sm'>
          Spanish (Native) · English (Fluent) · Portuguese (Fluent) · German (A1)
        </span>
      </div>
      <div className='flex flex-col md:flex-row justify-between p-2'>
        <span></span>
        <span className='font-bold font-monumentGrotesk text-xs md:text-sm lg:text-sm ml-4'>
          <a
            className="underline"
            href="/Resume.pdf"
            target="_blank"  
            rel="noopener noreferrer"
          >Her resume
          </a>
        </span>
      </div>
    </div>
  </div>
</div>

        </div>
      </main>
    </div>
  );
};

export default AboutPage;
