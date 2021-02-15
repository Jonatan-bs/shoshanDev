import styled from "styled-components";
import { Link, Section, Container } from "./partials";



const Logo = styled.img.attrs({ src:"/images/logo-light.svg" })`
    max-width: 400px;   
`

const ContainerMod = styled(Container)`
    display: flex; 
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
    justify-content: space-evenly;
    align-items: center; 
` 

const MenuList = styled.ul`
    &>li:first-of-type {
        font-weight: bold;
        text-transform: uppercase;
    }

`

const Footer = () => (
    <Section>
        <ContainerMod>
            
            <Left>
                <Logo/>
                <p>
                    Søndermarksvej 114 stmf.<br/>
                    7000 Fredericia <br/><br/>

                    CVR.: 00000000<br/>
                </p>
                <a href="#"> 
                    kontakt@shoshandevelopment.dk
                </a> 
            </Left>
            <Right>
                <MenuList>
                    <li>SERVICES</li>
                    <li>Hjemmeside</li>
                    <li>Webshop</li>
                    <li>Webapplikation</li>
                    <li>Support</li>
                </MenuList>
                <MenuList>
                    <li>SHOSHAN DEV.</li>
                    <li>Om mig</li>
                    <li>Teknologier</li>
                    <li>Designprocess</li>
                </MenuList>
            </Right>
           <div>
               Credit:
               <div>Icons made by: <br/>| <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                               <div>| <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                               <div>| <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                               <div>| <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
           </div>
         

            
        </ContainerMod>
    </Section>
)
export default Footer 