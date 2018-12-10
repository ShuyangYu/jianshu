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
    border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
    overflow: hidden;
    /* min-heght: 100px; */
    float: right;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .item-img {
        display: block;
        /* height: 100%; */
        width: 150px;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    float: left;
    width: 475px;
    .title {
        font-size: 18px;
        color: #333;
        line-height: 1.5;
    }
    .content {
        font-size: 13px;
        color: #999;
    }
`

export const LoadMore = styled.div`
    float: left;
    width: 100%;
    height: 40px;
    margin: 30px 0;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const HomeRight = styled.div`
    margin-left: 15px;             
    padding-top: 30px;
    width: 280px;
    float: right;
`

export const RecommendWrapper = styled.div`
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    img {
        width: 100%;
        height: 100%;
        margin-top: -3px;
    }
`

export const WritterWrapper = styled.div`
    overflow: hidden;
    width: 280px;
    margin-top: 30px;
`

export const WritterItem = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 6px;
    float: left;
    img {
        width: 48px;
        height: 48px;
        float: left;
        border-radius: 24px;
        margin-right: 15px;
    }
    h3 {
        font-size: 14px;
        /* line-height: 14px; */
        margin: 0;
        color: #2f2f2f;
        box-sizing: border-box;
    }
    p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`