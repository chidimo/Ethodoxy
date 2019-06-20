import React from 'react';
import { connect } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';
import AppRoutes from './AppRoutes';

const Home = () => {
    return (
        <BrowserRouter>
            <Container>
                <Navbar />
                
                <Segment>
                    <AppRoutes />
                </Segment>
            </Container>
        </BrowserRouter>
    )
}

export default connect()(Home);
