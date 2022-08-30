import PlayerCards from '../../../../components/playerCards/PlayerCards'
import Test from '../../../../components/Test'

import { Wrapper, Container, LeftCol, RightCol } from './style'

const MeetPlayers = () => {
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
        </RightCol>
      </Container>
    </Wrapper>
  )
}

export default MeetPlayers
