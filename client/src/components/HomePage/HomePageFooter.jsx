import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    min-height: 10vh;
    padding: 80px 60px;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        grid-gap: 20px;
    }
`

const Column = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
`

const Title = styled.p`
    color: rgb(9,83,133);
    max-width: 200px;
    text-align: center;
    font-size: 20px;
`

const Link = styled.a`
    color: white;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    max-width: 200px;
    &:hover {
        color: rgb(0,153,255);
        transition: 200ms ease-in;
        text-decoration: none;
    }
`

const Icon = styled.i`
    margin-right: 12px;
    font-size: 18px;
`

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Row>
                        <Column>
                            <Title>About</Title>
                            <Link href="#">About Us</Link>
                            <Link href="#">Our Collection</Link>
                        </Column>
                        <Column>
                            <Title href="#">Contact Us</Title>
                        </Column>
                        <Column>
                            <Title>Social</Title>
                            <Link href="https://www.youtube.com">YouTube</Link>
                            <Link href="https://twitter.com">Twitter</Link>
                            <Link></Link>
                            <Link></Link>
                        </Column>
                    </Row>
                </Wrapper>
            </Container>
        )
    }
}