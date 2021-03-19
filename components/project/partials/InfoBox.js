import styled from "styled-components";
import {Container, Text, Grid, Span, Center, Heading} from "./../../partials"

const Info = styled.div`
    padding: 50px;
    background: ${({theme}) => theme.colors.light2}
`

export const InfoBox = ({entries}) => (
    <Info data-aos="fade-left">
            <ul>
                {entries.map( e => !e.heading? (<li><Text>{e.entry}</Text></li>) : (<><br/><li> <Text><Span bold>{e.entry}:</Span></Text></li></>))}
            </ul>
    </Info>
) 
