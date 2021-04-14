import styled from "styled-components";
import {AspectRatio, Container, Heading, Text, Image} from "../partials"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";

const ContactCard = styled(Container)`
    width: 100%;
    padding: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: ${ ({theme}) => theme.colors.light2}
`

const ContactImage = styled(AspectRatio)`
    margin-right: 50px
`




const Contact = ({contactBox}) => (
    <section data-aos="fade-up">
        <Container pb="3">
            <ContactCard>
                <ContactImage maxWidth="400px" width="100%" pct="100" circle> 
                    <Image layout="fill" objectFit="cover" src={getStrapiMedia(contactBox.image)}/>
                </ContactImage>
                <div>
                    <Heading as="h3"  py={0.5} size="lg">
                        {contactBox.title}
                    </Heading>
                    <Text color="primary">
                        {contactBox.subtitle}
                    </Text>
                </div>


            </ContactCard>
        </Container>
    </section>
)
export default Contact 