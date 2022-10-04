import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 15
                }}
            >
                {
                    ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
                        <>
                            <ProductImage />
                            <ProductTitle  />
                            <ProductButtons  />
                        </>
                    )
                }
            </ ProductCard >

        </div>
    )
}
