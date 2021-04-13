import styled from "styled-components";
import {AspectRatio, Container, Heading, Text, Image} from "./../partials"
import { getStrapiMedia, fetchAPI } from "../../lib/api";

const ServiceCard = styled.article`
    width: 33%;

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
        <Container py={3}>
            <ServiceGrid>
                {services && services.map((service, i) => (
                    <ServiceCard key={i} data-aos="fade-up"> 
                        {service.symbol && <AspectRatioMod src={getStrapiMedia(service.symbol)} pct="100" width="100%" maxWidth="100px" />}
                        <Heading center as="h4" py={.2} size="sm" caps>{service.title}</Heading>
                        <Price>{service.price}</Price>
                    </ServiceCard>
                ))}
            </ServiceGrid>        
        </Container>
    </section>
)
export default Services 