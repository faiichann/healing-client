import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import { useEffect, useState } from 'react';

interface userInfo{
    userName : string;
    userAvartar : string;
}

function UserInfo() {
    const history = useHistory();
    const [userData, setUserdata] = useState<userInfo>({userName : '' , userAvartar: ''});
    const [loading,setLoading] = useState<boolean>(false)
    const userShow = async()=>{
        if (userData.userName && userData.userAvartar){
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
            <h4>UserAvartar {userData.userAvartar}: </h4>
            </>
        )
    }

    const submitUsername = (name:string ,value:string) =>{
        setUserdata((prev) => ({...prev,[name]:value }))
    }

    useEffect(() => {
        setUserdata({userName : '' , userAvartar: ''})
    }, [])
    return (
        <Container header={{ title: 'Information', left: 'back' }}>
        
        {loading? data() :null}

        <Input placeholder="Input username" name="userName" 
        onChange={({ target: { value ,name } }) => { submitUsername(name,value) }} />

        <Input placeholder="Input Avartar" name="userAvartar" 
        onChange={({ target: { value ,name} }) => { submitUsername(name,value) }} />
        <button onClick={() => userShow()}>Sumbmit</button>

        <button onClick={() => history.push('/Gamecontent')}>Next</button>
        </Container>
    );
}

export default UserInfo;