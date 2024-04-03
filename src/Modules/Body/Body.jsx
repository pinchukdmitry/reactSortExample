import Product from '../Product/Product'
import './body.css'

export default function Body({ sortProducts }) {
    return (
        <>
            <div className="productContainer">
                {sortProducts.map((dataItem) => (
                    <div>
                        <Product {...dataItem}></Product>
                    </div>
                ))}
            </div>
        </>
    )
}
