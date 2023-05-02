import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p> GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email address'></input>
          <button type='button'>Get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>More than one thousand and six hundred people requested access</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header
