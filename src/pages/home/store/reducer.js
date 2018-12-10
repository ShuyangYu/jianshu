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
        
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
        },
        {
            id: 2,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
        },
        {
            id: 3,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },   
        {
            id: 4,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },  
        {
            id: 5,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        },           
    ],
    writterList: [
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            title: '简书大学堂',
            dsc: '写了13.6k字  1k喜欢',
        },
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            title: '简书大学堂',
            dsc: '写了13.6k字  1k喜欢',
        },
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            title: '简书大学堂',
            dsc: '写了13.6k字  1k喜欢',
        },
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            title: '简书大学堂',
            dsc: '写了13.6k字  1k喜欢',
        },
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            title: '简书大学堂',
            dsc: '写了13.6k字  1k喜欢',
        },
    ]
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};  