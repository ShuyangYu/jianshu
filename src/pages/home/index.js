import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img 
                            className='banner-img' 
                            src='https://upload.jianshu.io/admin_banners/web_images/4581/14d959ff757f21616baa933fd3bdbfcf52fd512a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
                            alt="description"
                        />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writter />
                    </HomeRight>
                </HomeWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        }
    }
}
export default connect(null, mapDispathToProps)(Home);