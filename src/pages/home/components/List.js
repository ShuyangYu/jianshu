import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';

class List extends Component {
    render() {
        const { list } = this.props;
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
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
});

export default connect(mapState, null)(List);