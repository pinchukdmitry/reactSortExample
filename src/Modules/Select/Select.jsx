import './select.css'

export default function Select({ onChange }) {
    return (
        <div className="productContainer">
            <div className="container">
                <div className="select">
                    <select id="sortSelector" onChange={onChange}>
                        <option value="Down">Price: From Low to High</option>
                        <option value="Up">Price: From High to Low</option>
                        <option value="timeDown">Date: Oldest first</option>
                        <option value="timeUp">Date: Newest first</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
