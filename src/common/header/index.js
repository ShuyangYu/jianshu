import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper } from './style'
// import '../statics/iconfont/iconfont'

class Header extends Component {
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
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe63d;</i>
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
}

export default Header;