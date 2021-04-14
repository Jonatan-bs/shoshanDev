import styled from "styled-components";
import { Link, Image} from "./../partials"

const LogoWrap = styled.div`
    width: 100%;
    text-align: center;
    padding: 50px;
`
const Logo = styled(Image).attrs({ src:"/images/logo.svg", alt: "Shoshan Development", width: "330", height: "73" })`
`


const HeaderLogo = () => (
    <Link href="/" width="100%">
        <LogoWrap>
            <Logo/>
        </LogoWrap>
    </Link>
)

export default HeaderLogo;