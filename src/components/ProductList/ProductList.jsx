import React from 'react';
import './productlist.css';
import Product from '../Product/Product';
import {products} from '../Data';

const ProductList = () => {
return (
<>
    <div className="pl">
        <div className="plTexts">
            <h1 className="plTitle">Create & inspire. It's Minhaz</h1>
            <p className="plDesc">
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
            </p>
        </div>
        <div className="plList">
            {products.map(item=>(
            <Product img={item.img} key={item.id} link={item.link} />
            ))}
        </div>
    </div>
</>
)
}

export default ProductList