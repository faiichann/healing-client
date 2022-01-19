import { ImageContent } from "pages/home/styles/home.styles";
import { Carousel } from "antd";
import { Image, Typography } from 'antd';
import  logo  from 'assets/tests/healing_logo.png'
import { Box } from "theme/components";
const { Title, Text } = Typography;
  
function CarouselHome() {
    const images = [ 
        {tile: 'Content 1' , img: logo} ,
        {tile: 'Content 2' , img: logo} , 
        {tile: 'Content 3' , img: logo} 
    ];

    return (
        <Box justify='center' align="center" direction="row">
       <Carousel>
        {images.map((image,index) => {
        return (
        <ImageContent key={index}> 
        <Title level={5}>{image.tile}</Title>
            <Image
            width={100}
            src={image.img}
            />
        </ImageContent>
         );
        })}
        </Carousel>
        </Box>
    )
}

export default CarouselHome
