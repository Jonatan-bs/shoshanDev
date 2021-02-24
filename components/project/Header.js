import styled from "styled-components";
import {AspectRatio, Image, Heading, Text, Link} from "./../partials"

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 50px 0px;
    background: #2b9558;
    flex-wrap:wrap;
`;


const MethodDiv = styled.div`
    // width: 60%;
    width: 620px;
    padding: 0 80px 0 80px;
`
const ProjectImage = styled(AspectRatio)`
    // margin-left: -30%;
    // max-width: 800px;
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
         <Link href="/" width="100%">
            <LogoWrap>
                <Logo/>
            </LogoWrap>
         </Link>
        <Container>
            <ProjectImage  width="600px" bgColor="" size="contain" src="/images/greenyThumb.png" pct="100"/>
            <MethodDiv>
                <Heading as="h1" size="lg" color="light" caps>Greeny</Heading>
                <Subtext as="h2" size="sm" caps bold pb=".5">
                    Website + Grafisk design  
                </Subtext>
                <StyledText color="light" size="md">
                    Læs om hvordan jeg finder frem til
                    det perfekte design til dit projekt. 
                </StyledText>
            </MethodDiv>
        </Container>
    </>
)
export default Header 