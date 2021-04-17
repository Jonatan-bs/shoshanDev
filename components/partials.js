import styled from "styled-components";
import NextLink from "next/link";
import marked from "marked";
import NextImage from 'next/image'
import mq from "../styles/breakpoints";


//Adjustment templates

const templates = {
    paddingTemplate({interval,pb,py,pt,pl,pr,px}){
        return`${ 
            pb? "padding-bottom:" + pb*interval + "px;" : 
            py? "padding-bottom:" + py*interval + "px;" :
            ""
        }
        ${ 
            pt? "padding-top:" + pt*interval + "px;" : 
            py? "padding-top:" + py*interval + "px;" :
            ""
        }
        ${ 
            pl? "padding-left:" + pl*interval + "px;" : 
            px? "padding-left:" + px*interval + "px;" :
            ""
        }
        ${ 
            pr? "padding-right:" + pr*interval + "px;" : 
            px? "padding-right:" + px*interval + "px;" :
            ""
        }`
    },
    padding(props){

        

        
        
        return` 
                ${
                    this.paddingTemplate({interval:30, ...props })
                }
                ${ 
                    mq('md', this.paddingTemplate({interval: 50, ...props }))
                }
                
        `
    },
    textStyle: ({size,bold,color,theme,caps,center, lh, italic, width, maxWidth}) =>{ 
        return`
            font-weight: ${ bold?  "bold" : "inherit" };
            color: ${ theme.colors[color] || "inherit"};
            text-transform: ${ caps? "uppercase" : "inherit"};
            text-align: ${ center? "center" :  "inherit"};
            line-height: ${ lh ||  "inherit" };
            letter-spacing: 1px;
            font-style :${italic?  "italic" : "inherit"};
            width: ${width? width : "initial"};
            max-width: ${maxWidth? maxWidth : "initial"};
            font-size: ${size==="xl"? "4rem" : size==="lg"? "3rem" : size==="md"? "2rem"  : size==="sm"? "1.8rem": size==="xs"? "1.4rem"  : size==="inherit"? "inherit" : "2rem" };
            
            
           
            
        `
    }
}

//
//  Link
//
const StyledLink = styled.a`
    cursor: pointer;
    ${ ({py}) => py ? "padding-top: " + py*50 + "px; padding-bottom:" + py*50 + "px;" : ""}
    font-size: ${({size}) => size==="xl"? "4rem" : size==="lg"? "3rem" : size==="md"? "2rem"  : size==="sm"? "1rem" : size==="inherit"? "inherit" : "1.4rem" };
    ${ ({bold}) => bold && "font-weight: bold;" }
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || theme.colors.primary };
    width: ${ ({width}) => width || '100%' };
    ${ ({hover, theme}) => hover==="underline"?
        `
        & .hoverTarget{
            position: relative;
            display: inline;
        }
        & .hoverTarget:after {
            content: "";
            height: 4px;
            width: 0%;
            position: absolute;
            bottom: 3px;
            left: 0;
            background: ${theme.colors['primary']};
            transition: width .2s;
        }
        &:hover .hoverTarget:after {
            width: 90%;
        }
        `
        :
        ""
    };
`

export const Link = ({href, name, title, size, color, children, hover, width}) => (
    <NextLink href={href}>
        <StyledLink title={title} size={size} color={color} hover={hover} width={width}> {name} {children}</StyledLink>
    </NextLink>
)

//
//  Aspect Ratio Image
//
const ApectWrap = styled.div.attrs( ({lazy,src}) => lazy && ({ "data-src" : src}))`
    ${ ({circle}) => circle && "border-radius: 100%;"}
    max-width: ${ ({maxWidth}) => maxWidth || "inherit" };
    width: ${ ({width}) => width || "auto" };
    position: relative;
    overflow: hidden;
    ${
        ({hover}) => hover?`
            &:hover .hoverTarget{
                transform: scale(1.07);
            }; 
        ` : "" 
    }
    
`

const Aspect = styled.div`
    width: 100%;
    padding-bottom: ${ ({desktop, pct}) => desktop? pct : pct}%;

    ${ ({src, lazy}) => !lazy && "background-image: url(" + src + ")" };
    ${ ({bgColor}) => bgColor && "background-color:" + bgColor };
    background-size: ${ ({size}) => size || "cover" };
    background-position: center;
    background-repeat: no-repeat;
    transition: all .5s;

    ${ ({desktop, pct}) => mq('md', `
        padding-bottom: ${desktop? "0" : pct }%;
    `)}
`


export const AspectRatio = ({desktop, hover, size, lazy, src, pct, width, maxWidth, className, circle, bgColor, children}) => (
    <ApectWrap width={width} size={size} maxWidth={maxWidth} hover={hover} circle={circle} className={className} lazy={lazy} bgColor={bgColor}>
        <Aspect className="hoverTarget" desktop={desktop} pct={pct} src={src}/>
        {children}
    </ApectWrap>
)

//
//  Image
//
const MyImage = styled(NextImage)`
    ${ (props)=>templates.padding(props) }
    ${ ({width}) => width ? "width:" + width : "width: 100%"};
    ${ ({maxWidth}) => maxWidth && "max-width:" + maxWidth};
    ${ ({mb}) => mb && "margin-bottom:" + mb*50 + "px"};

`

export const Image = (props) => (
        <MyImage props={props} width={props.width} maxWidth={props.maxWidth} height={props.height} src={props.src} alt={props.alt} priority={props.priority} layout={props.layout} objectFit={props.objectFit}/>
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
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    ${(props)=>templates.padding(props)}
    max-width: ${ ({maxWidth, wide}) => maxWidth==="lg"? "1800px" : wide? "100%":  "1400px"};
    margin: 0 auto;
    box-sizing: border-box
`
//
//  Heading
//
export const Heading = styled.h1`
    ${(props)=>templates.padding(props)}
    font-weight: bold;
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || "inherit"};
    ${ ({center}) => center && "text-align: center;" }
    ${ ({align}) => align && "text-align:" + align }
    
    font-size: ${({size}) => size==="xl"? "4" : size==="lg"? "3.5" : size==="md"? "3"  : size==="sm"? "2" : size==="xs"? "1.5" : "3" }rem;
    
    ${({size}) => mq('md', `
        font-size: ${({size}) => size==="xl"? "8" : size==="lg"? "4" : size==="md"? "3"  : size==="sm"? "2" : size==="xs"? "1.5" : "3" }rem;
    `)}
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