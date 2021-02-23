import styled from "styled-components";
import {AspectRatio, Container, Heading, Text} from "./partials"

const ContactCard = styled(Container)`
    width: 100%;
    max-width: 1300px;
    padding: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: ${ ({theme}) => theme.colors.light2}
`

const ContactImage = styled(AspectRatio)`
    margin-right: 50px
`




const Contact = () => (
    <section>
        <Container pb="3">
            <ContactCard>
                <ContactImage maxWidth="400px" width="100%" src="/images/portrait.jpg" pct="100" circle/>
                <div>
                    <Heading as="h3"  py={0.5} size="lg">
                        Lad os komme igang 
                        med dit projekt ;)
                    </Heading>
                    <Text color="primary">
                        Send mig en mail med info om projektet til:
                        kontakt@shoshandevelopment.dk
                    </Text>
                </div>

            </ContactCard>
        </Container>
    </section>
)
export default Contact 