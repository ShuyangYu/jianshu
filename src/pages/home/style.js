import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    margin-left: 15px;             
    padding-top: 30px;
    width: 625px;
    float: left;

    .banner-img {
        width: 625px;
        height: 270px;
    }
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left:-14px;
`

export const TopicItem = styled.div`
    float: left;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 14px;
    margin-top: 14px;
    margin-bottom: 14px;
    padding-right: 10px;
    color: #000;
    background: #f7f7f7;
    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`

