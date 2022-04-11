import styled from 'styled-components';
import { Layout } from 'antd';
import { memo } from 'react';
import Header from './header'
import FooterContainer from './footer';


interface ContainerProps {
    children: any;
    footer?: any
    header?: any;
}
interface BodyProps {
    isheader: string;
}

const { Content } = Layout;
const AppContainer = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    z-index: 0;
    height: 100vh;
    /* background-color: var(--Green-200); */
    background: linear-gradient(339.97deg, #ECEDB2 2.35%, #BADEB3 90.28%);
    backdrop-filter: blur(9px);
`;
const CircleBig = styled.div`
    background: rgba(247, 247, 247, 0.17);
    position: absolute;
    width: 456px;
    height: 465px;
    left: -191px;
    top: 75px;
    border-radius: 50%;
`
const CircleSmall = styled.div`
    background: rgba(247, 247, 247, 0.22);
    position: absolute;
    width: 263px;
    height: 268px;
    left: 179px;
    top: 335px;
    border-radius: 50%;
`
const MainContent = styled(Content)<BodyProps>`
    height: ${(props) => {
        const isheader = props?.isheader ? 100 : 0;
        return `calc(100vh - ${isheader})px; `;
    }};
    width: 100%;
    overflow-y: scroll;
    position: relative;
    overflow-x: hidden;
    scroll-behavior: smooth;
`;
const Container = memo(({ children, header, footer }: ContainerProps) => {
    return (
        <AppContainer>
            {header && <Header {...header} />}
            <MainContent 
            isheader={header ? 'true' : 'false'}
            > 
            <CircleBig/>
            <CircleSmall/>
            {children}
            {footer && <FooterContainer/>}
            </MainContent>
        </AppContainer>
    );
});

export default Container;