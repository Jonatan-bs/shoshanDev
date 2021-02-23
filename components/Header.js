import styled from "styled-components";
import {AspectRatio, Image} from "./partials"

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
    font-size: 50px;
    background: ${ ({theme}) => theme.colors.primary };
`;

const SubText = styled.h2`
    color: ${ ({theme}) => theme.colors.primaryDark }; 
    font-size: 40px;
    font-weight: normal;
    max-width: 1000px;
    padding: 20px 80px;
    text-align: center;
`

const LogoWrap = styled.h1`
    max-width: 1000px; 
    width:100%;
`

const Logo = styled.img.attrs({ src:"/images/logo-light.svg", alt: "Shoshan Development" })`
    width:100%;
`

const Rose = styled(AspectRatio)`
    background-blend-mode: multiply;
    background-color: ${ ({theme}) => theme.colors.primary };
`


const Header = () => (
    <Container> 
        <Rose src="/images/rose.jpg" pct="68" width="100%" maxWidth="730px"/>
        <LogoWrap>
            <Image src="/images/logo-light.svg" alt="Shoshan Development" />
        </LogoWrap>
        <SubText>Digitale løsninger til mindre virksomheder med store ambitioner</SubText>
    </Container>
)
export default Header 