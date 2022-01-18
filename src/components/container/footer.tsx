import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;
const FooterStyle = styled(Footer)`
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--White);
    position: fixed;
    left: 0;
    bottom: 0;
`;

const FooterContainer = () => {
    return (
        <>
            <FooterStyle>
                <div><span>Create by dev and design</span></div>
            </FooterStyle>
        </>
    );
}
export default FooterContainer
