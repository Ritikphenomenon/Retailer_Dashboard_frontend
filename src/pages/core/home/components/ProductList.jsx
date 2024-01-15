import { Fragment } from "react";
import {ProductCard} from "./ProductCard";

const ProductList = ({items}) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 auto-rows-fr mt-6'>
            {items.map((item) => (
                <Fragment key={item.id}>

                <ProductCard {...item} />
                </Fragment>
               
            ))}
        </div>
    )

}

export {ProductList}