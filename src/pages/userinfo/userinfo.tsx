import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Box, ButtonStyle } from 'theme/components';

interface userInfo{
    userName : string;
}
const { Option } = Select;

function UserInfo() {
    const history = useHistory();
    const [userData, setUserdata] = useState<userInfo>({userName : ''});
    const [loading,setLoading] = useState<boolean>(false)

    const userShow = async()=>{
        if (userData.userName){
            await data();
            setLoading(true);
        }else{
            setLoading(false);
        }
    }

    const data =()=>{
        return(
            <>
            <h4>Username : {userData.userName} </h4>
            </>
        )
    }

    const submitUsername = (name:string ,value:string) =>{
        setUserdata((prev) => ({...prev,[name]:value }))
    }

    return (
        <Container header={{ title: 'Information', left: 'back' }}>
           <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 400px)'}}>
        {loading? data() :null}

        <Input.Group compact>
            <Input style={{ width: 'calc(100% - 200px)' }} placeholder="type your name"
             name="userName" 
            onChange={({ target: { value ,name } }) => { submitUsername(name,value) }} 
             />
            <Button type="primary" onClick={() => userShow()}>Submit</Button>
        </Input.Group>

        <Select defaultValue="🦄" style={{ width: 120 }}>
        <Option value="👻">👻</Option>
        <Option value="🦄">🦄</Option>
        </Select>

        {/* <Button type="primary" onClick={() => userShow()}> Select </Button> */}

        {/* <Input placeholder="Input username" name="userName" 
        onChange={({ target: { value ,name } }) => { submitUsername(name,value) }} />

        <Input placeholder="Input Avartar" name="userAvartar" 
        onChange={({ target: { value ,name} }) => { submitUsername(name,value) }} /> */}
        

        <Box justify='center' align='center' direction='row'>
           <ButtonStyle typebutton='Medium' sizebutton={30} onClick={() => history.push('/Gamecontent')}> Next </ButtonStyle>
        </Box>
        </Box>
        </Container>
    );
}

export default UserInfo;