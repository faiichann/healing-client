import { Button } from "antd";
import styled, { css } from "styled-components";

export const Box = styled.div<{ justify?: "flex-start" 
| "flex-end" 
| "center" 
| "space-between" 
| "space-around "
| "space-evenly" 
; align: "flex-start" 
| "flex-end" 
| "center"
| "baseline"
| "stretch" 
; direction : "row" | "column"}>`
display: flex;
justify-content: ${({ justify }) => (justify ? justify: " ")};
align-items: ${({ align }) => (align ? align: " ")};
flex-direction: ${({ direction }) => (direction ? direction: " ")};
width: 100%;
`;

type Sizebutton = "Large" | "Medium" | "Small" ;
type Typebutton = "Light" | "Text";
interface ButtonProps {
    sizebutton?: number
    backgroundbutton?: string
    colorbutton?: any
    typebutton ?: Sizebutton
    pattern?: Typebutton    
  }
 
export const ButtonStyle = styled(Button)<ButtonProps>`
      ${css`
    width : ${(props: ButtonProps) => props.sizebutton? props.sizebutton  : 100 }%;
    color:  ${(props: ButtonProps) => props.colorbutton? props.colorbutton : 'var(--White)'};
    `}  
    font-weight: 600;
    border-radius: var(--Radius-115);
    box-shadow: var(--Shadow-btn);
    ${( props: ButtonProps ) =>  {
       if ( props.typebutton === "Large"){
        return css`
        height: 55px; 
        `
    }else if(props.typebutton === "Medium"){
        return css`
        height: 45px; 
        `
    }else if(props.typebutton === "Small"){
        return css`
        height: 35px; 
        `
    }else{
        return css`
        height: 55px; 
        `
    }}
    }
    ${( props: ButtonProps ) =>  {
       if ( props.backgroundbutton ){
        return css`
        background-color: ${props.backgroundbutton} !important ;
        box-shadow: 0px 7px 30px 10px ${props.backgroundbutton};
        &:hover{
            border: 2px solid ${props.backgroundbutton};
            color: ${props.backgroundbutton};
            background-color: white !important ;
        }
        `
    }else{
        return css`
         background-color: var(--Pink-300);
        `
    }}
    }
    ${( props: ButtonProps ) =>  {
       if ( props.pattern === "Light"){
        return css`
        background-color: transparent !important;
        border: 3px solid var(--Green-300);
        color: var(--Green-600);
        box-shadow: none;
        &:hover{
            color: var(--White);
            background-color: var(--Green-300);
            border: 3px solid var(--Green-300) !important;
        }
        `
        }else if( props.pattern === "Text"){
            return css`
            background-color: transparent;
            border: none;
            color: var(--Green-300);
            box-shadow: none;
            font-size: 24px;
            font-weight: 700;
            `
        }
        else{
        return css`
         background-color: var(--Pink-300);
        `
    }}
    }
    `;
