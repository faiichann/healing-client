import styled from 'styled-components';
import { Layout } from 'antd';
import { memo } from 'react';
import Header from './header'

interface ContainerProps {
    children: any;
    // footer: any
    header: any;
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
    background-color:#E4F1DA;
`;
const MainContent = styled(Content)<BodyProps>`
    height: ${(props) => {
        const isheader = props?.isheader ? 8 : 0;
        return `calc(100vh - ${isheader}%); `;
    }};
    width: 100%;
    overflow-y: scroll;
`;
const Container = memo(({ children, header }: ContainerProps) => {
    return (
        <AppContainer>
            {header && <Header {...header} />}
            <MainContent isheader={header ? 'true' : 'false'}> {children}</MainContent>
        </AppContainer>
    );
});

export default Container;