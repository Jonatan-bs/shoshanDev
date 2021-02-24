import styled from "styled-components";
import {AspectRatio, Image, Heading, Text, Link} from "./../partials"

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
    background: #a82323;
    flex-wrap:wrap;
`;


const MethodDiv = styled.div`
    width: 60%;
    padding: 0 80px 0 80px;
`
const ProjectImage = styled(AspectRatio)`
    margin-left: -10%;
    max-width: 800px;
`

const Subtext = styled(Text)`
    mix-blend-mode: soft-light;
`
const StyledText = styled(Text)`
    opacity: 0.5;
`

const LogoWrap = styled.div`
    width: 100%;
    text-align: center;
`
const Logo = styled.img.attrs({ src:"/images/logo.svg", alt: "Shoshan Development" })`
    width:100%;
    max-width:330px;
    margin: 50px;
`


const Header = () => (
    <>
         <Link href="project" width="100%">
            <LogoWrap>
                <Logo/>
            </LogoWrap>
         </Link>
        <Container>
            <ProjectImage  width="50%" bgColor="#e7e7e7" moveLeft="200px" src="https://dailymockup.com/wp-content/uploads/edd/2019/07/free-logo-psd-mockup-1000x750.jpg" pct="100"/>
            <MethodDiv>
                <Heading as="h1" size="md" color="light" caps>Greeny</Heading>
                <Subtext as="h2" size="sm" caps bold pb=".5">
                    Website + Grafisk design  
                </Subtext>
                <StyledText color="light">
                    Læs om hvordan jeg finder frem til
                    det perfekte design til dit projekt. 
                </StyledText>
            </MethodDiv>
        </Container>
    </>
)
export default Header 