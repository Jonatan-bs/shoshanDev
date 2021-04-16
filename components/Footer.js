import styled from "styled-components";
import { Link, Section, Container, Text, Heading, Image } from "./partials";
import mq from "../styles/breakpoints";

const ContainerMod = styled(Container)`
    display: flex; 
    flex-wrap: wrap;
    flex-direction: column-reverse;
    ${ ({theme}) =>( 
        mq('md', `
            flex-direction: unset;
        `, )
    )}
`
const ContainerMod2 = styled(Container)`
    display: flex; 
    color:#fff;
`

const Left = styled.div`
    border-top: 5px solid ${ ({theme}) => theme.colors.primary };
    padding-top: 40px;
    box-sizing: border-box;
    width: 100%;
    padding-top: 50px;
    text-align: center;

    ${ ({theme}) =>( 
        mq('md', `
            text-align: left;
            padding-top: 0px;
            border-top: 5px solid ${theme.colors.primary };
            border-top: none;
            width: 400px
        `, )
    )}

` 

const Right = styled.div`
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center; 
    &>div{
        display:flex;
        width: 100%;
        justify-content: space-evenly;
    }

    ${mq('md', `
        padding-bottom: 0px;
        width: calc(100% - 400px);
    `)}
` 

const MenuList = styled.ul`
    &>li:first-of-type {
        font-weight: bold;
        text-transform: uppercase;
    }

`
const LogoWrap = styled.div`
    width:100%;
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 20px;

    ${mq('md', `
        margin: unset;
    `)}

`

const Footer = ({menus}) => (
    <>
        <Section dark>
            <ContainerMod>
                
                <Left>
                    <LogoWrap>
                        <Image src="/images/logo-light.svg" width="1000" height="221" mb="9" />
                    </LogoWrap>
                    <Text color="light" size="sm">
                        Søndermarksvej 114 stmf.<br/>
                        7000 Fredericia <br/><br/>

                        CVR.: 41227966<br/>
                    </Text>
                    <Text size="sm" color="primary">kontakt@shoshandev.dk</Text> 
                </Left>
                <Right>
                    <div>
                        <MenuList>
                            <li><Heading as="h3" light caps size="xs">{menus.footerLeft.title}</Heading></li>
                            {menus.footerLeft.menuItem.map((menuItem,i) => (
                                <li key={i} ><Link href={menuItem.page? "/" + menuItem.page.slug : menuItem.url || "#"} color="light" name={menuItem.title}/></li>
                            ))}
                        </MenuList>
                        <MenuList>
                            <li><Heading as="h3" light caps size="xs">{menus.footerRight.title}</Heading></li>
                            {menus.footerRight.menuItem.map((menuItem,i) => (
                                <li key={i}><Link href={menuItem.page? "/" + menuItem.page.slug : menuItem.url || "#"} color="light" name={menuItem.title}/></li>
                            ))}
                        </MenuList>
                    </div>                    
                </Right>
            

                
            </ContainerMod>
        </Section>
        <div style={{"backgroundColor":"rgb(17 17 17)"}}>
            <ContainerMod2 py=".5">
                <br/>
                <Text size="xs" center width="100%">
                    Icons made by: 
                    <Link size="inherit" href="https://www.flaticon.com/authors/iconixar" title="iconixar" name="iconixar"/>  from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/> | 
                    <Link size="inherit" href="https://www.freepik.com" name="Freepik" title="Freepik"/>  from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/>| 
                    <Link size="inherit" href="https://www.flaticon.com/authors/srip" name="srip" title="srip"/>  from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/>| 
                    <Link size="inherit" href="https://www.flaticon.com/authors/nhor-phai" name="Nhor Phai" title="Nhor Phai"/> from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/>
                    <br/>
                    <br/>
                    ©2021 Jonatan Shoshan
                </Text>
            </ContainerMod2>
        </div>
    </>
)
export default Footer 