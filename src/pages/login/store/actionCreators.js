import axios from 'axios'
import * as actionTypes from './actionTypes';

export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    value: false,
})

const _changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
            .then((res) => {
                const result = res.data.data;
                if (result) {
                    dispatch(_changeLogin())
                }else {
                    alert('failed')
                }
            })
    }
}