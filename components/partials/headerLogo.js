import styled from "styled-components";
import { Link} from "./../partials"

const LogoWrap = styled.div`
    width: 100%;
    text-align: center;
`
const Logo = styled.img.attrs({ src:"/images/logo.svg", alt: "Shoshan Development" })`
    width:100%;
    max-width:330px;
    margin: 50px;
`


const headerLogo = () => (
    <Link href="/" width="100%">
        <LogoWrap>
            <Logo/>
        </LogoWrap>
    </Link>
)

export default headerLogo;