import styled from "styled-components";
import NextLink from "next/link";
import marked from "marked";


//Adjustment templates

const templates = {
    padding: ({pb,py,pt,pl,pr,px}) =>{ 
        return` 
                ${ 
                    pb? "padding-bottom:" + pb*50 + "px;" : 
                    py? "padding-bottom:" + py*50 + "px;" :
                    ""
                }
                ${ 
                    pt? "padding-top:" + pt*50 + "px;" : 
                    py? "padding-top:" + py*50 + "px;" :
                    ""
                }
                ${ 
                    pl? "padding-left:" + pl*50 + "px;" : 
                    px? "padding-left:" + px*50 + "px;" :
                    ""
                }
                ${ 
                    pr? "padding-right:" + pr*50 + "px;" : 
                    px? "padding-right:" + px*50 + "px;" :
                    ""
                }
        `
    },
    textStyle: ({size,bold,color,theme,caps,center, lh, italic, width}) =>{ 
        return`
            font-size: ${size==="xl"? "4rem" : size==="lg"? "3rem" : size==="md"? "2rem"  : size==="xs"? "1rem" : size==="sm"? "1.4rem" : size==="inherit"? "inherit" : "1.8rem" };
            font-weight: ${ bold?  "bold" : "inherit" };
            color: ${ theme.colors[color] || "inherit"};
            text-transform: ${ caps? "uppercase" : "inherit"};
            text-align: ${ center? "center" :  "inherit"};
            line-height: ${ lh ||  "inherit" };
            letter-spacing: 1px;
            font-style :${italic?  "italic" : "inherit"};
            width: ${width? width : "initial"};
        `
    }
}

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
    background-size: ${ ({size}) => size || "cover" };
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    
`

const Aspect = styled.div`
    width: 100%;
    padding-bottom: ${ ({pct}) => pct }%;
`


export const AspectRatio = ({size, lazy, src, pct, width, maxWidth, className, circle, bgColor, children}) => (
    <ApectWrap width={width} size={size} maxWidth={maxWidth} circle={circle} src={src} className={className} lazy={lazy} bgColor={bgColor}>
        <Aspect pct={pct}/>
        {children}
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
    padding-left: 20px;
    padding-right: 20px;
    ${(props)=>templates.padding(props)}
    max-width: ${ ({maxWidth}) => maxWidth==="lg"? "1800" + "px" : "1500px"};
    margin: 0 auto;
    box-sizing: border-box
`
//
//  Heading
//
export const Heading = styled.h1`
    ${(props)=>templates.padding(props)}
    font-size: ${({size}) => size==="xl"? "8" : size==="lg"? "4" : size==="md"? "3"  : size==="sm"? "2" : size==="xs"? "1.8" : "1" }rem;
    font-weight: bold;
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || "inherit"};
    ${ ({center}) => center && "text-align: center;" }
    ${ ({align}) => align && "text-align:" + align }

`



//
//  Text
//
export const Text = styled.p`
    ${(props)=>templates.padding(props)}
    ${(props)=>templates.textStyle(props)}
`

//
//  Markdown
//
const MarkdownStyled = styled.div`
    >p{
        ${(props)=>templates.padding(props)}
        ${(props)=>templates.textStyle(props)}
    }
`

export const Markdown = ({children, py, px, pt, pb, pr, pl, size, bold, color, caps, width, center, lh}) => (
    <MarkdownStyled 
        py={py}
        px={px}
        pt={pt}
        pb={pb}
        pr={pr}
        pl={pl}
        size={size}
        bold={bold}
        color={color}
        caps={caps}
        width={width}
        center={center}
        lh={lh}
        dangerouslySetInnerHTML={ {__html: marked(children)}}/>
)

//
//  Grid
//
export const Grid = styled.div`
    display: flex;
    width: 100%;
    ${ 
        ({cols})=> cols.map( (c, i)=>{
        return(
            ` 
                &>:nth-child(${i+1}){
                    width: ${c};
                }
            `
        )
        })
    }  
`

//
//  Span
//
export const Span = styled.span`
    ${({bold}) => bold && "font-weight: bold"}
`

//
//  Center
//
export const Center = styled.div`
    display: flex;
    justify-content: center;
`