import styled from "styled-components";
import {AspectRatio, Container, Heading, Text, Image, Link} from "./../partials"
import { getStrapiMedia, fetchAPI } from "../../lib/api";

const ServiceCard = styled.article`
    width: 100%;
    padding: 30px;
    &:hover{
        background: #f5f5f5;
        transform: translateY(-10px);
        transition: transform .2s;
    }

`
const Price = styled.p`
    font-weight:bold;
    margin-top:10px;
    text-align: center;
`

const ServiceGrid = styled.div`
    display:flex;
    width:100%;
    justify-content: space-evenly;
`


const AspectRatioMod = styled(AspectRatio)`
    margin: 0 auto;
`


const Services = ({services}) => (
    <section>
        <Container py={2}  data-aos="fade-up">
                <ServiceGrid>
                    {services && services.map((service, i) => (
                        <Link href="#" width="33%" color="dark">
                                <ServiceCard key={i}> 
                                        {service.symbol && <AspectRatioMod src={getStrapiMedia(service.symbol)} pct="100" width="100%" maxWidth="100px" />}
                                        <Heading center as="h4" py={.2} size="sm" caps>{service.title}</Heading>
                                        <Price>{service.price}</Price>
                                        {service.subtext && <Text italic color="dark3" size="xs" center>{service.subtext}</Text>}
                                </ServiceCard>
                        </Link>
                    ))}
                </ServiceGrid>        
        </Container>
    </section>
)
export default Services 