import styled from 'styled-components';

export const WordContainer = styled.div`
    display: flex;
    position: relative;
    margin: 16px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`
interface LetterProps {
    correct?: boolean
}
export const LetterBox = styled.div<LetterProps>`
    background-color:  ${( props: LetterProps ) => props.correct? '#8FB486'  : 'white' };
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color:  ${( props: LetterProps ) => props.correct? 'white'  : null };;
`
export const GameContainer = styled.div`
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 100vh;
  width: 100%;
`