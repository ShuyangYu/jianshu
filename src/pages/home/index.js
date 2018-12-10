import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js'

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
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
                    { this.showScroll ? <BackTop onClick={this.handleScrollTop}>BackTop</BackTop> : <BackTop>{toString(this.showScroll)}</BackTop> }
                </HomeWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
})
const mapDispathToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollTopShow() {
            if (document.documentElement.scrollTop > 300) {
                dispatch(actionCreators.toggleTopShow(true));
            } else {
                dispatch(actionCreators.toggleTopShow(false));
            }
        }
    }
}
export default connect(mapState, mapDispathToProps)(Home);