import styled from "styled-components";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 940px;
    font-size: 50px;
    background: ${ ({theme}) => theme.colors.primary };
`;

const SubText = styled.h1`
    color: ${ ({theme}) => theme.colors.primaryDark }; 
`

const Logo = styled.img.attrs({ src:"/images/logo-light.svg" })`
    max-width: 1000px; 
`

const Header = () => (
    <Container> 
        <Logo/>
        <SubText>Digitale løsninger til mindre virksomheder med store ambitioner</SubText>
    </Container>
)
export default Header 