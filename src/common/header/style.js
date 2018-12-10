import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 100%;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 945px;
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

    .zoom {
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

    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }

    &.slide-enter-active {
        width: 240px;
    }

    &.slide-exit {
        transition: all .2s ease-out;
    }

    &.slide-exit-active {
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        /* transform: rotate(0deg); */
        transform-origin: center center;
    }
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    margin: 5px 8px;
    font-size: 13px;
    line-height: 20px;
    color: #969696;
    border: 1px solid #ddd;
    border-radius: 3px;
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