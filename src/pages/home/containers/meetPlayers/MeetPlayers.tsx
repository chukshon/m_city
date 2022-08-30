import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/button_1/Button'
import PlayerCards from '../../../../components/playerCards/PlayerCards'

import { Wrapper, Container, LeftCol, RightCol } from './style'

const MeetPlayers = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <LeftCol>
          <PlayerCards />
        </LeftCol>
        <RightCol>
          <h2>Meet</h2>
          <h2>The</h2>
          <h2>Players</h2>
          <div className='button_col'>
            <Button
              text='Meet Them Here'
              handleClick={() => {
                navigate('/team')
              }}
            />
          </div>
        </RightCol>
      </Container>
    </Wrapper>
  )
}

export default MeetPlayers
