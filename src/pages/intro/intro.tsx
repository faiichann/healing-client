import { Typography, Image } from 'antd';
import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { BoxSlide, BoxText, CarouselStyle, ContentStyle, ImageSlide, BoxContent } from './styles/intro.styles';
import Intro1 from 'assets/images/stage/Intro1.png'
import Intro2 from 'assets/images/stage/Intro2.png'
import Intro3 from 'assets/images/stage/Intro3.png'
import Intro4 from 'assets/images/stage/Intro4.png'
const { Title, Text } = Typography;

function Intro() {
    const history = useHistory();
    const data = [ 
        {title: 'Healing Project' , des: 'เว็บไซต์นี้จัดทำขึ้นมาเพื่อศึกษาอิทธิพลของเกมมิฟิเคชันที่มีผลต่อผู้ใช้งานบนเว็บ ผ่านสื่อเว็บแอปพลิเคชันจำลองการสร้างสินทรัพย์ดิจิทัลด้วยเทคนิคกลไกเกมมิฟิเคชัน ด้วยการสร้างเป้าหมายในรูปแบบ DIgital Asset', img: Intro1} , 
        {title: 'Gamification' , des: 'เว็บไซต์นี้นำ game mechanics มาใช้กับสิ่งที่ไม่ใช่เกม เพื่อกระตุ้นให้คนมีพฤติกรรมตามเป้าหมาย ด้วยการจูงใจให้คนเกิดความสนุก ความท้าทาย ความตั้งใจเอาชนะ ด้วยวิธีและความรู้สึกแบบเดียวกับการเล่นเกม เช่นการCountdown จำนวนการ์ด, user level up, collection', img: Intro2}, 
        {title: 'Digital Assets' , des: 'สิ่งที่มีมูลค่าถูกสร้างขึ้นบนเครือข่ายอิเล็กทรอนิกส์สามารถซื้อขาย-แลกเปลี่ยน ผ่านเทคโนโลยี Blockchain ทำให้สามารถแสดงความเป็นเจ้าของของสินทรัพย์นั้นๆได้ โดย Digital Asset จะแตกต่างกัน เช่น การ์ดเกม งานศิลปะ ของสะสม', img: Intro3},
        {title: 'Let Collect one!!' , des: 'เลือกสิ่งที่ใช่สำหรับคุณ พร้อมกับระบุเป้าหมายที่ชัดเจน เพื่อนำไปสร้างรูปแบบการ์ดในแบบเฉพาะของคุณ การ์ดมีจำนวนจำกัดเพียง 200 ใบ รีบมาสร้างการ์ด NFT ที่ช่วยสร้างแรงบันดาลใจให้เป้าหมายของคุณกัน', img: Intro4}
    ];
    return (
        <Container header={{ title: 'Introduction', left: 'back' }}>
            <BoxContent>
            <BoxSlide>
                <CarouselStyle autoplay>
            {data.map((item,index) => {
        return (
                <ContentStyle key={index}> 
                    <ImageSlide>
                    <Image
                        width={350}
                        src={item.img}
                        preview={false}
                    />  
                    </ImageSlide>
                    <BoxText>
                    <Title level={5}>{item.title}</Title>
                    <Text type="secondary">{item.des}</Text>
                    </BoxText>
                </ContentStyle>
        );
            })}
            </CarouselStyle>
            </BoxSlide>
            </BoxContent>
        <Box justify='center' align='center' direction='row'>
           <ButtonStyle typebutton='Medium' pattern='Light' sizebutton={40} onClick={() => history.push('/userinfo')}> ถัดไป </ButtonStyle>
           </Box>
        </Container>
    );
}

export default Intro;