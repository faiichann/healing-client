import styled from 'styled-components'
import { Image, Layout, Drawer } from 'antd';

const { Content } = Layout;

export const LayoutHome = styled(Layout)`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    z-index: 0;
    height: 100vh;
    overflow-x: hidden;
`
export const ContainerHome = styled(Content)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
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
`
export const ImgSection = styled(Image)`
    position: relative;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    float: left;
    &.cloud{
        transform: translateY(149px);
        transform: translateX(-159px);
    }
    &.mountain{
        transform: translateY(49px);
    }
    &.Green_mountain{
        transform: translateY(-158px);
    }
    &.forest{
        transform: translateY(-361px);
    }
`
export const SectionSecond = styled.div`
    width: 100%;
    padding: 30px 0px;
    height: max-content;    
    background: var(--Green-500);
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
`
export const ImageContent = styled.div`
    width: 70%;
    height: 400px;
    background: var(--White);
    border-radius: var(--Radius-12);
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
<svg width="24" height="24" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
.ant-drawer-mask{
    width: 50% !important;
}
& .ant-drawer-content-wrapper{
    width: 50% !important;
}
`