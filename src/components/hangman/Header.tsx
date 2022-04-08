import { Drawer, Typography } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Box, ButtonStyle } from "theme/components";
const { Title, Text } = Typography;

const DrawerStyle = styled(Drawer)`
  height: 330px;
  z-index: 999;
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
             <Title level={2} style={{color: '#A6CD9C'}}> วิธีการเล่น! </Title>
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
                  ดูแลต้นไม้ของคุณให้ดี มีโอกาสเพียง 3 ครั้ง<br/>
                  มาพยายามให้เต็มที่กันเถอะ!!<br/>
                  Hint: Words are about NFT!
           </Text>
             </Box>
        </DrawerStyle>
      <Title level={2} style={{color: '#A6CD9C'}}>รักษาต้นไม้ไว้ให้ได้ !</Title>
      <p>พยายามหาคำที่ซ่อนอยู่ !</p>
      <ButtonStyle pattern="Light" sizebutton={30} typebutton={"Small"} onClick={HandleButton}>กติกา</ButtonStyle>
    </>
  );
};

export default Header;