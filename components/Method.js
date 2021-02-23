import styled from "styled-components";
import { Link, Section, Container, Heading } from "./partials";

const ContainerMod = styled(Container)`
    display: flex; 
    justify-content: space-evenly;
`

const Method = () => (
    <section>
        <ContainerMod py={2}>
            <div>
                <Heading as="h3" size="md" caps>DESIGNPROCES</Heading>
                <p>
                    Læs om hvordan jeg finder frem til
                    det perfekte design til dit projekt. 
                </p>
            </div>
            <div>
                <Heading as="h3" size="md" caps>Teknologier</Heading>
                <p>
                    Ethvert projekt kræver et godt
                    fundament. <br/>
                    Se hvilke teknologier jeg arbejder med. 
                </p>
            </div>
        </ContainerMod>
    </section>
)
export default Method 