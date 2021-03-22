import styled from "styled-components";
import {AspectRatio, Container, Heading, Text, Image} from "./../partials"

const ServiceCard = styled.article`
    width: 200px;

`
const Price = styled.p`
    font-weight:bold;
    margin-top:10px;
`

const ServiceGrid = styled.div`
    display:flex;
    width:100%;
    justify-content: space-evenly;
`


const AspectRatioMod = styled(AspectRatio)`
    margin: 0 auto;
`
const HeadingImgWrap = styled.div`
    display:flex;
    align-items: center;
    padding: 150px 0;
    justify-content: center;

`
const HeadingWrap = styled.div`
    // width: 70%;
`
const ImgWrap = styled.div`
    // width: 30%;
    max-width: 400px;
    padding-right: 30px;
    box-sizing: border-box;
`

// const Heading = styled.h3`
//     font-size: 8rem;
//     font-weight: bold;
// `

const Services = ({services}) => (
    <section>
        <Container pb={3}>
            <HeadingImgWrap>
                <ImgWrap data-aos="fade-right">
                    <Image src="/images/sewing-machine.png" alt="skræddersyget - illustration" />
                </ImgWrap>
                <Heading as="h3" size="xl"  data-aos="fade-left">
                    Skræddersyede <br/> Webløsninger
                </Heading>
            </HeadingImgWrap>
            <ServiceGrid>
                {services.map(service => (
                    <ServiceCard data-aos="fade-up"> 
                        <AspectRatioMod src="/images/service_icons/1.svg" pct="100" width="100%" maxWidth="100px" />
                        <Heading center as="h4" py={.2} size="sm" caps>{service.title}</Heading>
                        <Text>
                            {service.elements.map( ({entry})=> <>{entry} <br/> </>)}
                        </Text>
                        <Price>{service.price}</Price>
                    </ServiceCard>
                ))}
            </ServiceGrid>        
        </Container>
    </section>
)
export default Services 