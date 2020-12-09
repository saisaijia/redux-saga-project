import {connect} from "react-redux"

import Product from "../component/Product"

import * as actions from "../store/actions/product"

const mapStateToProps = state => {
    // console.log(state);
    return {
        Product: state.Product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct() {
            dispatch(actions.getProduct())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)