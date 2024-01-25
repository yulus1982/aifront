import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';
import { generatorList } from '../../data/generatorList';
import GeneratorCard from '../generators/GeneratorCard';

const Home = () => {
    const featuredGenerators = generatorList.filter((generator) => generator.featured);

    return (
        <div id='main'>
            <Container id="hero">
                <img src={Logo} className="logo" alt='Illustration of woman with long brown hair and purple back ground' />
                <h1>Hey, I’m RevAI</h1>
                <p>

                 AI tools demonstrate the capacity of artificial intelligence to streamline and elevate various aspects of writing, blogging, and coding. By integrating these tools into daily workflows, you can benefit from improved content quality, enhanced writing skills, and increased coding efficiency. As technology continues to advance, the integration of AI tools is expected to play a crucial role in shaping the future of these creative and technical domains.Aaaannndd It's fully free we won't charge you anything.</p>
                <h3>What I can do for you:</h3>
            </Container>
            <Container>
                <Row>
                    {featuredGenerators.map((generator) => (
                        <GeneratorCard key={generator.id} generator={generator} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;