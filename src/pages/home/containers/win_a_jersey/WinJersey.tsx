import React from 'react'
import { Wrapper, Container, TopSection, EnterEmailSection } from './style'
import jersey from '../../../../assets/jersey.jpg'

const WinJersey = () => {
  return (
    <Wrapper>
      <Container>
        <TopSection>
          <h1>WIN A JERSEY</h1>
          <img src={jersey} alt='' />
        </TopSection>
        <EnterEmailSection>
          <h2>Enter Your Email</h2>
          <form>
            <input type='text' placeholder='Enter Your Email' />
            <div className='button_container'>
              <button>Enroll</button>
              <p></p>
            </div>
          </form>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </EnterEmailSection>
      </Container>
    </Wrapper>
  )
}

export default WinJersey
