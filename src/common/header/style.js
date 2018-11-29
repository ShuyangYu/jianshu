import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px
    height: 100%;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 945px
    height: 100%;
    padding-right: 90px;
    box-sizing: box-size;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;

    &.left {
        float: left;
    }

    &.right {
        float: right;
        color: #969696;
    }

    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    // width: 160px;

    .iconfont {
        position: absolute;
        right: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        bottom: 5px;
        text-align: center;

        &.focused {
            background: #777;
            color: white;
        }
    }

    .slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }

    .slide-enter-active {
        width: 240px;
    }

    .slide-exit {
        transition: all .2s ease-out;
    }

    .slide-exit-active {
        width: 160px;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    font-size: 14px;
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left: 15px;
    margin-right: 0px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #666;

    &::placeholder {
        color: #999;
    }

    &.focused{
        width: 240px;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`

export const Btn = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    color: #ea6f5a;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ea6f5a;
    font-size: 14px;

    &.signUp {
        color: #ea6f5a;
    }

    &.writeArticle {
        background: #ea6f5a;
        color: white;
    }
`