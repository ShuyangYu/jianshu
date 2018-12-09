// import * as actionCreators from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/10289013-3d546d6cf50ce2c0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/10289013-3d546d6cf50ce2c0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240', 
        }
    ],
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};  