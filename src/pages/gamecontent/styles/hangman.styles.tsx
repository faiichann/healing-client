import styled from 'styled-components';

export const WordContainer = styled.div`
    display: flex;
    position: relative;
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
    display: contents ;
    margin: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const WrongContainer = styled.div`
    color: #F9A186;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    display: flex;
    position: relative;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 600;
`
export const FigureContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
`