import styled from "styled-components";
import NextLink from "next/link";


//
//  Link
//
const StyledLink = styled.a`
    ${ ({py}) => py ? "padding-top: " + py*50 + "px; padding-bottom:" + py*50 + "px;" : ""}
    font-size: ${({size}) => size==="xl"? "4rem" : size==="lg"? "3rem" : size==="md"? "2rem"  : size==="sm"? "1rem" : size==="inherit"? "inherit" : "1.4rem" };
    ${ ({bold}) => bold && "font-weight: bold;" }
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || theme.colors.primary };
    width: ${ ({width}) => width || '100%' };
`

export const Link = ({href, name, title, size, color, children}) => (
    <NextLink href={href}>
        <StyledLink title={title} size={size} color={color}> {name} {children}</StyledLink>
    </NextLink>
)

//
//  Aspect Ratio Image
//
const ApectWrap = styled.div.attrs( ({lazy,src}) => lazy && ({ "data-src" : src}))`
    ${ ({circle}) => circle && "border-radius: 100%;"}
    max-width: ${ ({maxWidth}) => maxWidth || "inherit" };
    width: ${ ({width}) => width || "auto" };
    ${ ({src, lazy}) => !lazy && "background-image: url(" + src + ")" };
    ${ ({bgColor}) => bgColor && "background-color:" + bgColor };
    background-size: cover;
    background-repeat: no-repeat;
    
`

const Aspect = styled.div`
    width: 100%;
    padding-bottom: ${ ({pct}) => pct }%;
`

export const AspectRatio = ({lazy, src, pct, width, maxWidth, className, circle, bgColor}) => (
    <ApectWrap width={width} maxWidth={maxWidth} circle={circle} src={src} className={className} lazy={lazy} bgColor={bgColor}>
        <Aspect pct={pct}/>
    </ApectWrap>
)

//
//  Images
//
const StandardImage = styled.img.attrs(({src, alt}) => ({ "src": src , "alt": alt }))`
    ${ ({width}) => width ? "width:" + width : "width: 100%"};
    ${ ({maxWidth}) => maxWidth && "max-width:" + maxWidth};
    ${ ({mb}) => mb && "margin-bottom:" + mb*50 + "px"};

`
const LazyImage = styled.img.attrs(({dataSrc, alt}) => ({ "data-src": dataSrc , "alt": alt }))`
    width:100%;
`
export const Image = ({src, alt, lazy, width, maxWidth, mb}) => (
    lazy? (
        <LazyImage width={width} dataSrc={src} alt={alt} className="lazy"/>
    ) : (
        <StandardImage width={width} src={src} alt={alt}  maxWidth={maxWidth} mb={mb}/>
    )
)

//
//  Section
//
export const Section = styled.section`
    ${ ({dark, theme}) => dark ? ( "background: " + theme.colors.dark2 + "; color: #fff; padding: 50px 0;"): "" }
`

//
//  Container
//
export const Container = styled.div`
    padding-bottom: ${ ({pb, py}) => pb? pb*50 + "px" : py ? py*50 + "px" : "0"};
    padding-top: ${ ({pt, py}) => pt? pt*50 + "px" : py ? py*50 + "px" : "0"};
    padding-left: ${ ({px}) => px? px*50 + "px" : "50px"};
    padding-right: ${ ({px}) => px? px*50 + "px" : "50px"};
    max-width:1500px;
    width:100%;
    margin: 0 auto;
    box-sizing: border-box
`
//
//  Heading
//
export const Heading = styled.h1`
    ${ ({py}) => py ? "padding-top: " + py*50 + "px; padding-bottom:" + py*50 + "px;" : ""}
    font-size: ${({size}) => size==="xl"? "8" : size==="lg"? "4" : size==="md"? "3"  : size==="sm"? "2" : size==="xs"? "1.8" : "1" }rem;
    font-weight: bold;
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || "inherit"};
    ${ ({center}) => center && "text-align: center;" }

`

//
//  Text
//
export const Text = styled.p`
    padding-bottom: ${ ({pb, py}) => pb? pb*50 + "px" : py ? py*50 + "px" : "0"};
    padding-top: ${ ({pt, py}) => pt? pt*50 + "px" : py ? py*50 + "px" : "0"};
    padding-left: ${ ({px}) => px? px*50 + "px" : "0"};
    padding-right: ${ ({px}) => px? px*50 + "px" : "0"};
    font-size: ${({size}) => size==="xl"? "4rem" : size==="lg"? "3rem" : size==="md"? "2rem"  : size==="sm"? "1rem" : size==="inherit"? "inherit" : "1.4rem" };
    ${ ({bold}) => bold && "font-weight: bold;" }
    color: ${ ({color,theme}) => theme.colors[color] || "inherit"};
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    ${ ({width}) => width && "width:" + width + ";" }
    ${ ({center}) => center && "text-align: center;" }
`

