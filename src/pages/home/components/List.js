import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store/'

class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img 
                                    className='item-img'
                                    src={item.get('imgUrl')}
                                    alt=''
                                />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='content'>{item.get('dsc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => {getMoreList(page)}}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'page']),
});

const mapDispatch = (dispatch) => ({
    getMoreList(currentPage) {
        console.log(currentPage);
        dispatch(actionCreators.getMoreList());
    }
})
export default connect(mapState, mapDispatch)(List);