import styled from "styled-components";
import { Link, Section, Container, Heading, Text } from "./../partials";

const ContainerMod = styled(Container)`
    display: flex; 
    justify-content: space-evenly;
`

const MethodDiv = styled.div`
    width: 50%;
    padding: 0 80px 0 80px;
`

const Method = () => (
    <section>
        <ContainerMod pb={3}>
            <MethodDiv data-aos="fade-right">
                <Link color="dark2" href="/designprocess">
                    <Heading as="h3" size="md" caps>DESIGNPROCES</Heading>
                    <Text>
                        Læs om hvordan jeg finder frem til
                        det perfekte design til dit projekt. 
                    </Text>
                 </Link>
            </MethodDiv>
            <MethodDiv data-aos="fade-left">
                <Link color="dark2" href="/teknologier">
                    <Heading as="h3" size="md" caps>Teknologier</Heading>
                    <Text>
                        Ethvert projekt kræver et godt
                        fundament. <br/>
                        Se hvilke teknologier jeg arbejder med. 
                    </Text>
                </Link>
            </MethodDiv>
        </ContainerMod>
    </section>
)
export default Method 