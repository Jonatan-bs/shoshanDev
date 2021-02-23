import styled from "styled-components";
import {AspectRatio, Container, Heading} from "./partials"

const ContactCard = styled(Container)`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: ${ ({theme}) => theme.colors.light2}
`




const Contact = () => (
    <section>
        <ContactCard>
            <AspectRatio maxWidth="400px" width="100%" src="/images/rose.jpg" pct="100" circle/>
            <Heading as="h3"  py={1} size="lg">
                Lad os komme igang 
                med dit projekt ;)
            </Heading>

        </ContactCard>
    </section>
)
export default Contact 