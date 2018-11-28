import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn } from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper> 
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Btn className='writeArticle'>写文章</Btn>
                    <Btn className='signUp'>注册</Btn>
                </Addition>
            </HeaderWrapper>
        )
    }    
}

export default Header;