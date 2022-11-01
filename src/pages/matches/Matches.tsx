import React, { useEffect, useState } from "react"

const data = [
  {
    title: "Hello World",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    title: "Hello World",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adip",
  },
]

const Matches = () => {
  const [name, setName] = useState(data[0])

  useEffect(() => {
    const interval = setTimeout(() => {
      const dataLength = data.length
      const nameIndex = data.indexOf(name)
      let tempName = nameIndex + 1 >= dataLength ? data[0] : data[nameIndex + 1]
      setName(tempName)
    }, 60000)

    return () => clearInterval(interval)
  }, [name])

  return (
    <>
      <h1>{name.title}</h1>
      <h3>{name.subTitle}</h3>
    </>
  )
}

export default Matches
