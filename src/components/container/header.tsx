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
    height: 8%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: whitesmoke;
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
                <Col span={4}>
                    <div>{leftCon}</div>
                </Col>
                <Col span={16}>
                    <div>{title}</div>
                </Col>
                <Col span={4}>
                    <div>{rightCon}</div>
                </Col>
            </HeaderStyle>
        </>
    );
});

export default Header;