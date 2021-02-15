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

export const Section = styled.section`
    background: #1a1919;
    color: #fff;
    padding: 50px 0;
`

export const Container = styled.section`
    padding: 0 50px;
    max-width:1300px;
    width:100%;
    margin: 0 auto;
    box-sizing: border-box
`


