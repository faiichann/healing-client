import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Button, Select, Image, Row, Col, Typography } from 'antd';
import { Box, ButtonStyle } from 'theme/components';
import { useState } from 'react';
import { useAppContext } from 'context/appContext';
import { BoxSlide, CarouselStyle, ContentAvatar, ImageSlide, InputName, Shadow, InputStyle } from './styles/userInfo.styles'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'api/mocks/Avatars'
const { Text } = Typography;

function UserInfo() {
    const history = useHistory();
    const { userInfo } = useAppContext();
    const [username, setUsername] = useState<string |null>(null);
    const [avatar, setAvatar] = useState<String |null>(null);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isSelect, setIsSelect] = useState<String |null>(null);

    const avatars = Avatar

    const data =()=>{
        return(
            <>
            <h4>Username : {username} </h4>
            <h4>Avatar : {avatar} </h4>
            </>
        )
    }

    const onConfirm = (username: string | any, avatar: string| any) => {
        if ( username && avatar )
        setIsConfirm(true) 
        userInfo({ username, avatar })
    }

    const handleChange = (value: string) => {
        setAvatar(value)
        setIsSelect(value)
        console.log(avatar)
      }

      const RightArrow = () => {
        return (
            <RightOutlined style={{ fontSize: '45px', color: '#41653A', opacity: '40%', display: 'flex', float: 'right', transform: 'translateY(-130px)'}}/>
        )
    }
    
    const LeftArrow = () => {
        return (
            <LeftOutlined style={{ fontSize: '45px', color: '#41653A', opacity: '40%', display: 'flex', float: 'left', transform: 'translateY(110px)'}}/>
        )
    }
    const settings = {
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />
      }
    return (
        <Container header={{ title: 'Information', left: 'back' }}>
           <Box justify='center' align='center' direction='column' style={{height: '80vh'}}>
        { isConfirm ? data() :null}

        <Box justify='center' align='center' direction='column'>
        <InputStyle>
            <InputName placeholder="type your name"
             name="userName" 
             onChange={({ target: { value } }) => { setUsername(value) }}
             />
        </InputStyle>
        <BoxSlide>
            <Row>
                <Col>
                <CarouselStyle 
                arrows {...settings}
                >
            {avatars.map((item,index) => {
        return (
            <ContentAvatar key={index} >
                <ImageSlide selected={ isSelect === item.value ? true : false}>
            <Image
                    preview={false}
                    width={item.width}
                    src={item.img}
                    onClick={()=> handleChange(item.value)}
                />
                <Shadow/>
                </ImageSlide>
            </ContentAvatar>
        );
        })}
            </CarouselStyle>
                </Col>
            </Row>
        </BoxSlide>
        </Box>
        <Box justify='center' align='center' direction='row'>
            {
                isConfirm ?
                <ButtonStyle typebutton='Medium' sizebutton={30} onClick={() => history.push('/Gamecontent')}> Next </ButtonStyle>
                :
                !avatar || !username ?   <Text type="secondary">Click Image for select </Text>
                :
                <ButtonStyle typebutton='Medium' sizebutton={30} pattern='Light' onClick={()=> onConfirm(username, avatar)}> Confirm </ButtonStyle>
            }
        </Box>
        </Box>
        </Container>
    );
}

export default UserInfo;
