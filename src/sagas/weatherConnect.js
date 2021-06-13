import * as Actions from "../reducks/users/actions";
import { put, call, takeEvery, select } from 'redux-saga/effects'
import axios from "axios";
import conf from "../conf";

const WeatherConnect = (state) => {
    return axios
    .get(conf.API_ENDPOINT, {
        params: {
            q: state.weather.requestCity,
            APPID: conf.API_KEY
        }
    })
    .then(res => {
        const country = res
        return { country }
    })
    // エラーの場合描画
    .catch(error => {
        return { error }
    })
}

function* fetchCountry() {
    const state = yield select();
    const { country, error } = yield call(WeatherConnect, state)

    if (country) {
        yield put(Actions.successCountryApi(country))
    } else {
        console.log(error)
    }
}

export const callSaga = [takeEvery(Actions.SEARCH_INPUT, fetchCountry)]
