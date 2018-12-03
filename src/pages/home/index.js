import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>left</HomeLeft>
                    <HomeRight>right</HomeRight>
                </HomeWrapper>
            </div>
        )
    }
}

export default Home;