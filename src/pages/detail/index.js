import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content>
                    <img src='//upload-images.jianshu.io/upload_images/4460877-53ed65259bfc395a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' />
                    {this.props.content}
               </Content>
            </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
})

export default connect(mapState, null)(Detail);