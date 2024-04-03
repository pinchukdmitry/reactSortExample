import './product.css'

export default function Product({ ...props }) {
    return (
        <>
            <main role="main">
                <div className="product">
                    <div className="product-description">
                        <div className="info">
                            <h1>{props.productTitle}</h1>

                            <p>{props.productDescription}</p>
                            <p>{props.productCreateDate}</p>
                        </div>
                        <div className="price">{props.productPrice}</div>
                    </div>
                </div>
            </main>
        </>
    )
}
