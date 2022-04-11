import styled from 'styled-components'
import { Image, Layout, Drawer, Col } from 'antd';

const { Content } = Layout;

export const LayoutHome = styled(Layout)`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    z-index: 0;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`

export const ContainerHome = styled(Content)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
`
export const SectionFirst = styled.div`
    width: 100vw;
    height: max-content;
    max-height: 750px;
    @media (min-width: 768px) {
        max-height: 1000px;
  }
    max-width: 500px;
    background: linear-gradient(180deg,#BADEB3 0%,rgb(253 232 118 / 39%) 84.37%);
    position: relative;    
    display: flex;
    align-items: center ;
    flex-direction: column;
`

export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;
`
export const ImgSection = styled(Image)`
    /* position: relative; */
    top: 0;
    left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
    float: left;
    &.cloud{
        transform: translateY(149px);
        transform: translateX(-159px);
        position: relative;
    }
    &.mountain{
        transform: translateY(-47px);
        position: relative;
    }
    &.Green_mountain{
        transform: translateY(-236px);
        @media screen and (min-width: 500px) {
            transform: translateY(-306px);
        }
        @media screen and (min-width: 1600px) {
            transform: translateY(190px) translateX(-511px);
        }
        position: relative;
    }
    &.forest{
        transform: translateY(223px);
        @media screen and (min-width: 500px) {
            transform: translateY(332px);
        }
        position: relative;
    }
`
export const BoxThird = styled.div`
  margin: 50px auto ;
  background-color: #fff;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  z-index: 200;
  border-radius: 25px ;
`

export const ImageContent = styled.div`
    width: 70%;
    margin: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterHome = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--White);
    padding: 20px 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    position: relative;
`
export const Shadow = styled.div`
    height: 20px;
    width: 120px;
    background-color: #93968e;
    opacity: 30%;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    transform: translateY(22px);
`
export const MenuIcon = () => {
    return(
<svg width="24" height="24" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'fixed'}}>
<line x1="1.5" y1="1.5" x2="16.5" y2="1.5" stroke="#41653A" strokeWidth="3" strokeLinecap="round"/>
<line x1="1.5" y1="7.5" x2="16.5" y2="7.5" stroke="#41653A" strokeWidth="3" strokeLinecap="round"/>
<line x1="7.5" y1="13.5" x2="16.5" y2="13.5" stroke="#41653A" strokeWidth="3" strokeLinecap="round"/>
</svg>
)
}

export const NumberDisplay = styled.div`
    width: 100%;
    padding: 30px 0px;
    height: max-content;    
    background: var(--Green-500);
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    z-index: 100;
    position: relative;
`
export const NumBox = styled.div`
    background-color: white;
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
    color:#8FB486;
`

export const HomeDrawer = styled(Drawer)`
.ant-drawer-header {
    padding: 0;
    display: flex;
    /* background: var(--Green-500);
    height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex; */
}
.ant-drawer-mask{
    width: 0 !important;
}
& .ant-drawer-content-wrapper{
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    width: 100% !important;
    opacity: 90%;
}

`
export const TextLink = styled.a`
&:hover{
    background-color: var(--Green-500);
    color: white;
}
height: 50px;
width: 100% ;
font-size: 18px;
color: var(--Green-500);
font-weight: 600 ;
`

export const TextTitle = styled.h1`
background-color: var(--Green-500);
color: white;
width: 100% ;
font-size: 24px;
font-weight: 700 ;
`
export const ContentSection = styled.div`
    width: 100%;
    padding: 30px 0px;  
    height: max-content;
    background: var(--Green-500);  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #deeb8f,#badeb3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #deeb8f,#badeb3); 
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    z-index: 100;
    position: relative;
`

export const StarCardHome = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 20px;
    padding: 10px;
    margin: 16px 16px 40px 16px;
    box-shadow: 0px 0px 83px -23px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    flex-direction: column  ;
`
export const ColDes = styled(Col)`
    margin: 56px 30px ;
`