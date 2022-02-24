import { useHistory } from 'react-router-dom';
import { useCallback, useMemo, memo } from 'react';
import { Row, Col } from 'antd';
import { LeftOutlined, MenuOutlined} from '@ant-design/icons';
import styled from 'styled-components';

interface HeaderProps {
    title: string;
    right: string;
    left: string;
}
const HeaderStyle = styled(Row)`
    width: 100%;
    height: 57px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--Green-300);
`;

const ColHeader = styled(Col)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    color: var(--Green-400);
    font-weight: 800;
    font-size: var(--font-18);
`;

const Header = memo(({ title, right, left }: HeaderProps) => {
    const history = useHistory();
    const goBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const leftCon = useMemo(() => {
        if (left === 'back') {
            return (
                <LeftOutlined onClick={goBack}/>
            );
        } else {
            return left;
        }
    }, [goBack, left]);

    const rightCon = useMemo(() => {
        if (right === 'menu') {
            return (
                <MenuOutlined/>
            );
        }else {
            return right;
        }
    }, [right]);

    return (
        <>
            <HeaderStyle>
                <ColHeader span={4}>
                    <div>{leftCon}</div>
                </ColHeader>
                <ColHeader span={16}>
                    <Title>{title}</Title>
                </ColHeader>
                <ColHeader span={4}>
                    <div>{rightCon}</div>
                </ColHeader>
            </HeaderStyle>
        </>
    );
});

export default Header;