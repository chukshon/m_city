import MatchCard from '../../../../components/match_card/MatchCard'
import { Wrapper, ContainerStyled, MatchGridStyled } from './style'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../../../../components/button_1/Button'

const Matches = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <ContainerStyled>
        <h1 className='header'>Matches</h1>
        <MatchGridStyled>
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </MatchGridStyled>
        <Link to='/matches' className='veiw_all_button'>
          <Button
            text='View All Matches'
            handleClick={() => navigate('/match')}
          />
        </Link>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Matches
