import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = props => {
    return <div className="App">Welcome {props.auth}</div>;
};

Home.propTypes = {
    auth: PropTypes.string
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Home);
