import React from 'react'
                                            
class Product extends React.Component {
    componentDidMount() {
        this.props.fetchProduct()
    }
    render() {
        let { Product } = this.props
        let { isFetching, data=[], error} = Product
         if (isFetching) {
                // 正在抓取数据
          return (
                <fieldset>
                    <legend>Product</legend>
                    <h1>正在获取数据...</h1>
                </fieldset>
            )
            } else if (!isFetching && data.length) {
                // 成功获取数据
            return (
                <fieldset>
                    <legend>Product</legend>
                    <ul>
                        {data.map(item => {
                            return (
                                <li key={item.id}>
                                    商品名称：
                                    <span>{item.title}</span>----
                                    价格：
                                    <span>{item.price}</span>----
                                    库存：
                                    <span>{item.inventory}</span>
                                </li>
                            )
                        })}
                    </ul>
                </fieldset>    
        )
            } else if (!isFetching && error) {
                return (<h1>获取数据出错...</h1>)
            }
            return null // 初次需要反回null  }
    }
}
export default Product