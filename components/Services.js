import styled from "styled-components";
import {AspectRatio, Container, Heading} from "./partials"

const ServiceCard = styled.article`
    width: 200px;

`
const Price = styled.p`
    font-weight:bold;
`

const ServiceGrid = styled.div`
    display:flex;
    width:100%;
    justify-content: space-evenly;
`

// const Heading = styled.h3`
//     font-size: 8rem;
//     font-weight: bold;
// `

const Services = () => (
    <section>
        <Container py={2}>
            <Heading as="h3"  py={1}>
                Skræddersyede Webløsninger
            </Heading>
            <ServiceGrid>
                <ServiceCard> 
                    <AspectRatio src="/images/service_icons/1.svg" pct="100" width="100%" maxWidth="100px" />
                    <h4>Hjemmeside</h4>
                    <p>Responsive</p>
                    <p>UX</p>
                    <p>Wordress</p>
                    <p>React</p>
                    <p>SEO</p>
                    <Price>Fra 10.000 kr.</Price>
                </ServiceCard>
                <ServiceCard> 
                    <AspectRatio src="/images/service_icons/2.svg" pct="100" width="100%" maxWidth="100px" />
                    <h4>Hjemmeside</h4>
                    <p>Responsive</p>
                    <p>UX</p>
                    <p>Wordress</p>
                    <p>React</p>
                    <p>SEO</p>
                    <Price>Fra 10.000 kr.</Price>
                </ServiceCard>
                <ServiceCard> 
                    <AspectRatio src="/images/service_icons/3.svg" pct="100" width="100%" maxWidth="100px" />
                    <h4>Hjemmeside</h4>
                    <p>Responsive</p>
                    <p>UX</p>
                    <p>Wordress</p>
                    <p>React</p>
                    <p>SEO</p>
                    <Price>Fra 10.000 kr.</Price>
                </ServiceCard>
                <ServiceCard> 
                    <AspectRatio src="/images/service_icons/4.svg" pct="100" width="100%" maxWidth="100px" />
                    <h4>Hjemmeside</h4>
                    <p>Responsive</p>
                    <p>UX</p>
                    <p>Wordress</p>
                    <p>React</p>
                    <p>SEO</p>
                    <Price>Fra 10.000 kr.</Price>
                </ServiceCard>
            </ServiceGrid>        
        </Container>
    </section>
)
export default Services 