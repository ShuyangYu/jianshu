import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
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
                            </Link>
                        );
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