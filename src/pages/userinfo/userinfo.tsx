import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import { Box, ButtonStyle } from 'theme/components';
import { useState } from 'react';
import { useAppContext } from 'context/appContext';
import styled from 'styled-components';
const { Option } = Select;

const InputStyle = styled(Input.Group)`
    display: flex !important;
    justify-content: center !important;
    align-content: center !important;
`
function UserInfo() {
    const history = useHistory();
    const { userInfo } = useAppContext();
    const [username, setUsername] = useState<string |null>(null);
    const [avatar, setAvatar] = useState<String |null>(null);
    const [isConfirm, setIsConfirm] = useState(false);

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

    return (
        <Container header={{ title: 'Information', left: 'back' }}>
           <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 400px)'}}>
        { isConfirm ? data() :null}

        <Box justify='center' align='center' direction='row'>
        <InputStyle>
            <Input style={{ width: 'calc(100% - 200px)' }} placeholder="type your name"
             name="userName" 
             onChange={({ target: { value } }) => { setUsername(value) }}
             />
        </InputStyle>
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
