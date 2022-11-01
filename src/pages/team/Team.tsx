import PlayerCard from "../../components/playerCard/PlayerCard"
import { Wrapper, Container, CategoryGrid } from "./style"
import React, { useEffect, useState } from "react"

const data = [
  {
    title: "Hello World",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    title: "Hello Mister mans",
    subTitle: "Hello Mister mans",
  },
]
const Team = () => {
  const [currentInfo, setCurrentInfo] = useState(data[0])

  useEffect(() => {
    const interval = setTimeout(() => {
      const dataLength = data.length
      const currentInfoIndex = data.indexOf(currentInfo)
      let tempInfo =
        currentInfoIndex + 1 >= dataLength
          ? data[0]
          : data[currentInfoIndex + 1]
      setCurrentInfo(tempInfo)
    }, 1000)

    return () => clearInterval(interval)
  }, [currentInfo])
  return (
    <Wrapper>
      <Container>
        <h1>Keepers</h1>
        <CategoryGrid>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </CategoryGrid>
        <h1>Defence</h1>
        <CategoryGrid>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </CategoryGrid>
        <h1>Midfield</h1>
        <CategoryGrid>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </CategoryGrid>
        <h1>Strikers</h1>
        <CategoryGrid>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </CategoryGrid>

        <>
          <h1>{currentInfo.title}</h1>
          <h3>{currentInfo.subTitle}</h3>
        </>
      </Container>
    </Wrapper>
  )
}

export default Team
