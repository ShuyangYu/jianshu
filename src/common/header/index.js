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
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe63d;</i>
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
        const { mouseIn, focused, list, page, handleMouseEnter, handleMouseLeave, handleChangePage, totalPage } = this.props;
        if(focused || mouseIn) {
            const pageList = [];
            const newList = list.toJS();
            let start =  (page - 1) * 10;
            let end = page * 10;
            // console.log(end);
            if(newList.length) {
                while(start < end && start < newList.length) {
                    pageList.push(<SearchInfoItem key={newList[start]}>{newList[start]}</SearchInfoItem>)
                    start += 1;
                }
    
            }

            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i 
                                ref={(icon) => {this.spinIcon = icon}}
                                className={'iconfont spin'}
                            >
                                &#xe606;
                            </i>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
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
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}

const mapDispathToProps = (dispatch) => {
    // const { page} = this.props;
    return {
        handleInputFoucs() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }

            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);