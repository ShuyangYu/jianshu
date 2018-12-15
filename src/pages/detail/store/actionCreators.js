import axios from "axios";
import * as constants from './actionTypes'
import { fromJS } from "immutable";

const _changeDetail = (data) => ({
    type: constants.CHANGE_DETAIL,
    title: fromJS(data.title),
    content: fromJS(data.content)
})

export const getDetail = () => {
    return (dispatch) => {
        axios.get('api/detail.json')
            .then((res) => {
                const result = res.data.detail;
                console.log(result);
                dispatch(_changeDetail(result));
            }).catch(() => {
                console.log('error');
            })
    }
}