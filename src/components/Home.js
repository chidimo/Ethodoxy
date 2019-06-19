import React from 'react';

import { connect } from 'react-redux';

import { Container } from 'semantic-ui-react';

import { BrowserRouter } from 'react-router-dom';

const Home = () => {
    return (
        <BrowserRouter>
            <Container>
                <p>Text container</p>
            </Container>
        </BrowserRouter>
    )
}

export default connect()(Home);
