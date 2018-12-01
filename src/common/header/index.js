import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
// import '../statics/iconfont/iconfont'


class Header extends Component {

    render() {
        const { focused, handleInputFoucs, handleInputBlur } = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFoucs}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe63d;</i>
                        {this.getListArea()}
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

    getListArea = () => {
        const { focused, list } = this.props;
        if(focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused'),
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFoucs() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);