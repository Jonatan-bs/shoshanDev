import styled from "styled-components";
import {Container, Text, Grid, Span, Center, Heading} from "./../partials"

const Info = styled.div`
    padding: 50px;
    background: ${({theme}) => theme.colors.light2}
`

const Products = styled.img.attrs({src: "/images/projects/greeny/products.png"})`
    max-width: 1000px;
    width: 80%;   
`
const Mobile = styled.img.attrs({src: "/images/projects/greeny/mobile.png"})`
`
const Computer = styled.img.attrs({src: "/images/projects/greeny/computer.png"})`  
`
const Content = () => (
    <>
        <Container py="3"> 
                <Grid cols={["65%","35%"]}>
                    <Text size="md" pr="1" lh="1.6" data-aos="fade-right">
                        As a leading private school for over 1,400 students, Wesley College approached Humaan to modernise their digital presence to represent the quality, community and excellence of the school. With a focus of driving increased student enrolments, we imagined a contemporary experience that would engage and delight.
                    </Text>
                    <Info data-aos="fade-left">
                        <Text>
                            <ul>
                                <li>Digital Strategy</li>
                                <li>Education Best Practice</li>
                                <li>UX Design</li>
                                <li>MultiLingual</li>
                                <br/>
                                <li> <Span bold>Tech:</Span></li>
                                <li>Wordpress</li>
                                <li>Woocommerce</li>
                            </ul>
                        </Text>
                    </Info>
                </Grid>
        </Container>
        <Computer data-aos="fade-up"/>
        <Heading as="h2" center size="lg" pt="5">MobileFirst Design</Heading>
        <Mobile data-aos="fade-up"/>
        <Heading as="h2" center size="lg" pt="5" pb="3">Product Visuals</Heading>
        <Center>
            <Products data-aos="fade-up"/>
        </Center>
    </>
)
export default Content 