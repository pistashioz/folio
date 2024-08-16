import React from 'react';
import RightContent from './RightContent'; 

const MainPage = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full w-full mt-12">
        <div className="lg:fixed top-0 w-full lg:w-1/2 lg:h-screen flex flex-col items-center">
          <div className="mx-auto max-w-screen-xl px-4 lg:py-32 lg:flex lg:h-screen lg:items-center justify-between">
          <div className="mx-auto max-w-xl text-center flex flex-col justify-start">
            <div className="p-4 m-0 h-15 relative flex items-center">
                <img 
                    src="/folio_title.webp" 
                    className='mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-center flex flex-col justify-start' 
                    alt="Folio Title" 
                />
            </div>
              <div className="flex items-start flex-col p-4 my-6">
                <div className="text-zinc-800 text-lg font-medium font-monumentGrotesk">
                  Contact
                </div>
                <div className="flex items-start flex-col">
                  <p className="text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">
                    victoriamartinez.work@gmail.com
                  </p>
                  <p className="text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[15px]">
                    (+351) 928-056-365
                  </p>
                  <a className="underline text-zinc-800 text-sm font-normal font-monumentGrotesk leading-[20px]" href='https://www.linkedin.com/in/victoria-dacosta-mart%C3%ADnez/'>Linkedin</a>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4"></div>
            </div>
          </div>
        </div>
        <div className="ml-auto  w-full lg:w-1/2 h-full overflow-auto flex flex-col p-4 mx-12">
          <RightContent />
        </div>
      </div>
    );
  };
  
  export default MainPage;