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
        },
    ],
    articleList: [
        {
            id: 1,
            title: '忘了Python关键语句？这份备忘录拯救你的记忆',
            dsc: '今天要介绍的 Python 3 Cheat Sheet 由法国国家科学研究中心（CNRS）的法国机械工程与信息技术实验室（LIMSI）的工程师 ...',
            imgUrl: '//upload-images.jianshu.io/upload_images/4617258-3c55df207721c3b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id: 2,
            title: '忘了Python关键语句？这份备忘录拯救你的记忆',
            dsc: '今天要介绍的 Python 3 Cheat Sheet 由法国国家科学研究中心（CNRS）的法国机械工程与信息技术实验室（LIMSI）的工程师 ...',
            imgUrl: '//upload-images.jianshu.io/upload_images/4617258-3c55df207721c3b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id: 3,
            title: '忘了Python关键语句？这份备忘录拯救你的记忆',
            dsc: '今天要介绍的 Python 3 Cheat Sheet 由法国国家科学研究中心（CNRS）的法国机械工程与信息技术实验室（LIMSI）的工程师 ...',
            imgUrl: '//upload-images.jianshu.io/upload_images/4617258-3c55df207721c3b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id: 4,
            title: '忘了Python关键语句？这份备忘录拯救你的记忆',
            dsc: '今天要介绍的 Python 3 Cheat Sheet 由法国国家科学研究中心（CNRS）的法国机械工程与信息技术实验室（LIMSI）的工程师 ...',
            imgUrl: '//upload-images.jianshu.io/upload_images/4617258-3c55df207721c3b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id: 5,
            title: '忘了Python关键语句？这份备忘录拯救你的记忆',
            dsc: '今天要介绍的 Python 3 Cheat Sheet 由法国国家科学研究中心（CNRS）的法国机械工程与信息技术实验室（LIMSI）的工程师 ...',
            imgUrl: '//upload-images.jianshu.io/upload_images/4617258-3c55df207721c3b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        
    ]
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};  