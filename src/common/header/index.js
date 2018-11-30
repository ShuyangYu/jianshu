import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
// import '../statics/iconfont/iconfont'


const Header = (props) => {
    return (
        <HeaderWrapper> 
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <NavItem className='right'>登录</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFoucs}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe63d;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Btn className='writeArticle'>
                    <i className="iconfont">&#xe615;</i>
                    写文章
                    </Btn>
                <Btn className='signUp'>注册</Btn>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused'),
        focused: state.getIn(['header', 'focused']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFoucs() {
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);