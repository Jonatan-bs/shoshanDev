import styled from "styled-components";
import {AspectRatio, Container, Heading, Text} from "../partials"
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




const Contact = ({frontpage}) => (
    <section data-aos="fade-up">
        <Container pb="3">
            <ContactCard>
                {frontpage.content.map(c => {
                    if( c.__component === 'page-content.contact-box' ){
                        return(
                            <>
                                <ContactImage maxWidth="400px" width="100%" src={getStrapiMedia(c.image)} pct="100" circle/>
                                <div>
                                    <Heading as="h3"  py={0.5} size="lg">
                                        {c.title}
                                    </Heading>
                                    <Text color="primary">
                                        {c.subtitle}
                                    </Text>
                                </div>
                            </>
                        )
                    }
                })}                

            </ContactCard>
        </Container>
    </section>
)
export default Contact 