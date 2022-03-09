import { Button, Row } from "antd"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Box } from "theme/components"
// #818384

const KeyButton = styled(Button)`
background-color: #bfbfbf;
color: white;
margin: 0 3px;
width: 25px;
height: 35px;
padding: 4px;
justify-content: center ;
align-items: center;
text-align: center;
`
const KeyRow = styled(Row)`
margin: 10px 2px;
`
function Keyboard() {
    const [keyText, setKeyText] = useState('')
    const handleChangeRate = ( value:string) =>{
        setKeyText(value)
    }
    useEffect(() => {
      console.log(keyText)
    }, [keyText])
    
  return (
      <div style={{display: 'flex', position: 'relative'}}>
    <Box justify="center" align="center" direction="column">
    <KeyRow gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("Q")}>Q</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("W")}>W</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("E")}>E</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("R")}>R</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("T")}>T</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("Y")}>Y</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("U")}>U</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("I")}>I</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("O")}>O</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("P")}>P</KeyButton>
    </KeyRow>
    <KeyRow gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}> 
      <KeyButton size={"small"} onClick={()=> handleChangeRate("A")}>A</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("S")}>S</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("D")}>D</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("F")}>F</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("G")}>G</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("H")}>H</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("J")}>J</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("K")}>K</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("L")}>L</KeyButton>
    </KeyRow>
    <KeyRow gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("Z")}>Z</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("X")}>X</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("C")}>C</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("V")}>V</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("B")}>B</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("N")}>N</KeyButton>
      <KeyButton size={"small"} onClick={()=> handleChangeRate("M")}>M</KeyButton>
    </KeyRow>
    </Box>
    </div>
  )
}

export default Keyboard