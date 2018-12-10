import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WritterWrapper, WritterItem } from '../style';

class Writter extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <WritterWrapper>
                {
                    list.map((item) => {
                        return (
                            <WritterItem key={item.get('id')}>
                            <img
                                className='writter-pic'
                                src={item.get('imgUrl')}
                                alt=''
                            />
                            <h3>{item.get('title')}</h3>
                            <p>{item.get('dsc')}</p>
                            </WritterItem>
                        )
                    })
                }
            </WritterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writterList']),
});



export default connect(mapState, null)(Writter);