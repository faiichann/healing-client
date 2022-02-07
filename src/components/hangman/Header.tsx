import { Drawer, Typography } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Box, ButtonStyle } from "theme/components";
const { Title, Text } = Typography;

const DrawerStyle = styled(Drawer)`
  height: 330px;
  &.ant-drawer .ant-drawer-content {
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  }
`
const Header = () => {
   const [visible, setVisibleModal] = useState(false)

  const HandleButton = () => {
   setVisibleModal(!visible)
  };

  const onClose = () => {
    setVisibleModal( false)
  };

  return (
    <>
      <DrawerStyle
          title={
            <>
             <Box justify='center' align='center' direction='column' >
             <Title level={2} style={{color: '#A6CD9C'}}> HOW TO PLAY! </Title>
             </Box>
            </>
          }
          placement="bottom"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
           <Box justify='center' align='center' direction='column' >
           <Text
           style={{justifyContent: 'center', alignContent: 'center', textAlign: 'center', fontSize: '18px'}}
           >ทายคำให้ถูกเพื่อรักษาต้นไม้ของคุณไว้<br/>
                  หากคุณทายผิด หนอนยักา์จะกินต้นไม้คุณ<br/>
                  ดูแลต้นไม้ของคุฯให้ดี มีโอกาสเพียง 3 ครั้ง<br/>
                  มาพยายามให้เต็มที่กันเถอะ!!
           </Text>
             </Box>
        </DrawerStyle>
      <Title level={2} style={{color: '#A6CD9C'}}>Save your plant!</Title>
      <p>Try to Find the hidden word!</p>
      <ButtonStyle pattern="Light" sizebutton={30} typebutton={"Small"} onClick={HandleButton}>Rules</ButtonStyle>
    </>
  );
};

export default Header;