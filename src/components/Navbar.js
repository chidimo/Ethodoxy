import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Segment, List } from 'semantic-ui-react';


const Navbar = () => {
    return (
        <Segment color='orange'>
            <List horizontal size={'massive'}>
                <List.Item className='primary'>
                    <NavLink to='/'>
                        Ethodoxy
                    </NavLink>
                </List.Item>
    
                <List.Item>
                    <NavLink to='/drb'>
                        DRB
                    </NavLink>
                </List.Item>         
            </List>
        </Segment>
    )
}

export default connect()(Navbar)
