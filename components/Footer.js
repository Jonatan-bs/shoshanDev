import styled from "styled-components";
import Link from "next/link";

const Section = styled.section`
    background: #1a1919;
    color: #fff;
    padding: 50px;
`

const Logo = styled.img.attrs({ src:"/images/logo-light.svg" })`
    max-width: 400px; 
`

const Footer = () => (
    <Section>
        <div>
            <Logo/>
            <p>
                Søndermarksvej 114 stmf.<br/>
                7000 Fredericia <br/><br/>

                CVR.: 00000000<br/>
            </p>
            <Link href="#">
                <a>kontakt@shoshandevelopment.dk</a>
            </Link>
        </div>
        <div>
            SERVICES
            Hjemmeside
            Webshop
            Webapplikation
            Support
        </div>
        <div>
            SHOSHAN DEV. 
            Om mig
            Teknologier
            Designprocess
        </div>

        
    </Section>
)
export default Footer 