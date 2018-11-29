import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
// import '../statics/iconfont/iconfont'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            focused: false,
        }

    this.handleInputFoucs = this.handleInputFoucs.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFoucs}
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe63d;</i>
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
    
    handleInputFoucs() {
        this.setState({
            focused: true,
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false,
        })
    }
}

export default Header;