import React from 'react'
import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Headless CMS</h1>
          <p>
            Activated charcoal letterpress authentic you probably
            haven't heard of them sustainable VHS marxism trust fund
            in. Mustache yuccie dolore paleo occupy hell of af,
            glossier pickled gastropub pok pok hexagon. Austin lorem
            commodo lyft messenger bag gatekeep palo santo poke hella
            banh mi unicorn hell of. Squid blackbird spyplane heirloom
            echo park food truck.
          </p>
        </div>
        <div className='img-container'>
          <img
            src={heroImg}
            alt='woman and the browser'
            className='img'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
