import styled from 'styled-components'
import { Layout } from 'antd';

const { Content } = Layout;

export const LayoutHome = styled(Layout)`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    z-index: 0;
    height: 100vh;
    background: linear-gradient(180deg, #BADEB3 0%, #fde87619 84.37%);
`
export const ContainerHome = styled(Content)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
`
export const SectionFirst = styled.div`
    width: 100%;
    height: 90vh;
    padding: 16px;
    display: flex;
    align-items: center ;
    flex-direction: column;
`
export const SectionSecond = styled.div`
    width: 100%;
    height: 70vh;;
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
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--White);
    margin: 20px 0;
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
<line x1="1.5" y1="1.5" x2="16.5" y2="1.5" stroke="#41653A" stroke-width="3" stroke-linecap="round"/>
<line x1="1.5" y1="7.5" x2="16.5" y2="7.5" stroke="#41653A" stroke-width="3" stroke-linecap="round"/>
<line x1="7.5" y1="13.5" x2="16.5" y2="13.5" stroke="#41653A" stroke-width="3" stroke-linecap="round"/>
</svg>
)
}

