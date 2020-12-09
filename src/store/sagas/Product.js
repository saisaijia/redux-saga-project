
import {put, call, takeLatest} from "redux-saga/effects"
import * as actions from "../actions/product"
import { getProduct } from "../../api"
import * as types from "../types/product"

export default function* watchFetchProductFlow() {
    // 参数1： 想要拦截的action类型(type) 参数2： 传入generator处理函数
    yield takeLatest(types.FETCH_PRODUCT, getProductData)
}

function* getProductData() {
    // 正在发起请求，提交action通知reducer进行更改
    // put 相当于dispatch
    yield put(actions.getProductReq())
    try {
        // call 可以调用请求的Api
        let res = yield call(getProduct, "赛哥赛哥")
        // 数据获取成功
        yield put(actions.getProductSuccess({data:res.data}))
        console.log(res);
    } catch (error) {
        // 数据获取失败
        error = error.toString()
        yield put(actions.getProductFail({error}))
    }
}