import styled from "styled-components";
import NextLink from "next/link";

const StyledLink = styled.a`
    color: ${ ({theme}) => theme.colors.primary };
`

export const Link = ({href, name}) => (
    <NextLink href={href}>
        <a> {name} </a>
    </NextLink>

)


