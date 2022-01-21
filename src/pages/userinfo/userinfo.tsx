import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Button, Select, Image, Row, Col } from 'antd';
import { Box, ButtonStyle } from 'theme/components';
import { useState } from 'react';
import { useAppContext } from 'context/appContext';
import { BoxSlide, CarouselStyle, ContentAvatar, ImageSlide, InputName, Shadow, InputStyle } from './styles/userInfo.styles'
import Avatar1 from 'assets/images/Avatars/npc1.png'
import Avatar2 from 'assets/images/Avatars/npc2.png'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
const { Option } = Select;

function UserInfo() {
    const history = useHistory();
    const { userInfo } = useAppContext();
    const [username, setUsername] = useState<string |null>(null);
    const [avatar, setAvatar] = useState<String |null>(null);
    const [isConfirm, setIsConfirm] = useState(false);

    const avatars = [
        { img: Avatar1, width: 200 },
        { img: Avatar2, width: 140 }
    ]
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
      }

      const RightArrow = () => {
        return (
            <RightOutlined style={{ fontSize: '45px', color: '#41653A', opacity: '40%', display: 'block' }}/>
        )
    }
    
    const LeftArrow = () => {
        return (
            <LeftOutlined style={{ fontSize: '45px', color: '#41653A', opacity: '40%', display: 'block' }}/>
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
                <CarouselStyle arrows {...settings}>
            {avatars.map((item,index) => {
        return (
            <ContentAvatar key={index}>
                <ImageSlide>
            <Image
                    width={item.width}
                    src={item.img}
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

        <Select defaultValue="👻" style={{ width: 120 }}
        onChange={handleChange}>
        <Option value="👻">👻</Option>
        <Option value="🦄">🦄</Option>
        <Option value="🤡">🤡</Option>
        <Option value="😻">😻</Option>
        <Option value="🐸">🐸</Option>
        </Select>

        <Button type="primary"  onClick={()=> onConfirm(username, avatar)}>Confirm</Button><br/>

        <Box justify='center' align='center' direction='row'>
           <ButtonStyle typebutton='Medium' sizebutton={30} onClick={() => history.push('/Gamecontent')}> Next </ButtonStyle>
        </Box>
        </Box>
        </Container>
    );
}

export default UserInfo;
