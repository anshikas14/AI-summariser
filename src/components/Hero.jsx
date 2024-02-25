import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/anshikas14", "_blank")
          }
          className='black_btn'
        >
          SignUp
        </button>
      </nav>

      <h1 className='head_text'>
      Ever heard of Chatgpt for the
 <br className='max-md:hidden' />
        <span className='orange_gradient '> Indian Penal Code(IPC)?
</span>
      </h1>
      <h2 className='desc'>
      A conversational chatbot that tackles the critical challenge of bridging the gap between individuals and their legal rights.
      </h2>
    </header>
  );
};

export default Hero;
