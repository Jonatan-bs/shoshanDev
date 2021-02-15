import styled from "styled-components";
import NextLink from "next/link";


//
//  Link
//
const StyledLink = styled.a`
    color: ${ ({theme}) => theme.colors.primary };
`

export const Link = ({href, name}) => (
    <NextLink href={href}>
        <a> {name} </a>
    </NextLink>
)

//
//  Aspect Ratio Image
//

const ApectWrap = styled.div`
    max-width: ${ ({maxWidth}) => maxWidth || "inherit" };
    width: ${ ({width}) => width || "auto" };
    background-image: url(${ ({src}) => src });
    background-size: cover;
    background-repeat: no-repeat;
`
const Aspect = styled.div`
    width: 100%;
    padding-bottom: ${ ({pct}) => pct }%;
`

export const AspectRatio = ({src, pct, width, maxWidth, className}) => (
    <ApectWrap width={width} maxWidth={maxWidth} className={className} src={src}>
        <Aspect pct={pct}/>
    </ApectWrap>
)


//
//  Section
//
export const Section = styled.section`
    background: #1a1919;
    color: #fff;
    padding: 50px 0;
`

//
//  Container
//
export const Container = styled.div`
    padding: ${ ({py}) => py? py*50 + "px" : "0"} 50px;
    max-width:1300px;
    width:100%;
    margin: 0 auto;
    box-sizing: border-box
`
//
//  Heading
//
export const Heading = styled.h1`
    ${ ({py}) => py ? "padding-top: " + py*50 + "px; padding-bottom:" + py*50 + "px;" : ""}
    font-size: 8rem;
    font-weight: bold;
`

