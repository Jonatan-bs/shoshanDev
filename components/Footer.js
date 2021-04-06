import styled from "styled-components";
import { Link, Section, Container, Text, Heading, Image } from "./partials";

const ContainerMod = styled(Container)`
    display: flex; 
`
const ContainerMod2 = styled(Container)`
    display: flex; 
    color:#fff;
    padding: 20px 0 20px 0;
`

const Left = styled.div`
    border-right: 5px solid ${ ({theme}) => theme.colors.primary };
    padding-right: 40px;
    box-sizing: border-box;
    width: 400px
` 

const Right = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    &>div{
        display:flex;
        width: 100%;
        justify-content: space-evenly;
    }
` 

const MenuList = styled.ul`
    &>li:first-of-type {
        font-weight: bold;
        text-transform: uppercase;
    }

`

const Footer = ({menus}) => (
    <>
        <Section dark>
            <ContainerMod>
                
                <Left>
                    <Image src="/images/logo-light.svg" maxWidth="400px" mb="1" />
                    <Text>
                        Søndermarksvej 114 stmf.<br/>
                        7000 Fredericia <br/><br/>

                        CVR.: 00000000<br/>
                        <Link href="#" name="kontakt@shoshandevelopment.dk"/> 
                    </Text>
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
            <ContainerMod2>
                <br/>
                <Text size="sm" center width="100%">
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