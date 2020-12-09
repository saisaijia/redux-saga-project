import {connect} from "react-redux"

import Product from "../component/Product"

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testConnect() {
            console.log("测试connect");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)