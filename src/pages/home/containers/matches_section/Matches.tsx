import MatchCard from "../../../../components/match_card/MatchCard"
import { Wrapper, ContainerStyled, MatchGridStyled } from "./style"
import { useNavigate } from "react-router-dom"

import Button from "../../../../components/button_1/Button"

const Matches = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <ContainerStyled>
        <h1 className="header">Matches</h1>
        <MatchGridStyled>
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </MatchGridStyled>
        <div className="veiw_all_button">
          <Button
            text="View All Matches"
            handleClick={() => navigate("/matches")}
          />
        </div>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Matches
