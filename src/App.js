import React,{Fragment} from "react"
import Cart from "./Containers/Cart"
import Product from "./Containers/Product"


class App extends React.Component {
    render () {
        return (
            <Fragment>
                <h1>欢迎你：赛哥！</h1>
                <Product></Product>
                <hr/>
                <Cart></Cart>
            </Fragment>
        )
    }
}
export default App