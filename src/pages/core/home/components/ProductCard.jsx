
import { Card, Flowbite, Button } from "flowbite-react";
import { useGlobalContext } from '../../../../utils/Context'
import { useEffect, useId, useState, useMemo } from "react";
import { toast } from 'react-hot-toast'
import { set } from 'react-hook-form';



export const ProductCard = (props) => {
    const { items } = useGlobalContext()
    const filteredProduct = useMemo(() => {
        return items.filter((item) => {
            return item.id === props.id
        })
    }, [props, items])


    console.log("filtered", filteredProduct)

    const { handleAddItem, handleUpdateItem, handleRemoveItem } = useGlobalContext()
    const [quantity, setQuantity] = useState(filteredProduct.quantity || 0)
    const [isQuanityMenuOpen, setIsQuantiyMenuOpen] = useState(false)

    useEffect(() => {
        if (quantity < 1) {
            setIsQuantiyMenuOpen(false)
            handleRemoveItem(props.id)
        }
        else {
            setIsQuantiyMenuOpen(true)
        }
    }, [quantity])


    const handleCart = (item) => {
        handleAddItem(item)
        setIsQuantiyMenuOpen(true)
        toast.success('Item added to cart')
        setQuantity(quantity + 1)
    }


    return (
        <Card
            className="max-w-sm rounded-none h-96 overflow-hidden "
            imgAlt={props.title}
            imgSrc={props.imageLink}
            key={props.id}
        >


            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {props.title}
            </h1>

            <p className="text-gray-600 text-sm">
                {props.description.slice(0, 50)} ...
            </p>


            <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-500 dark:text-white">Rs{props.price}</span>

                <Flowbite theme={{
                    theme: {
                        button: {
                            color: {
                                primary: 'bg-black hover:bg-black/80 text-white',
                            },
                        },

                    }
                }}>

                    {
                        !isQuanityMenuOpen ? (
                            <Button
                                color="primary"
                                onClick={() => handleCart({
                                    ...props,
                                    quantity: quantity + 1,
                                })}

                            >
                                Add to cart
                            </Button>
                        ) :
                            (
                                <>
                                    <Button color="primary" onClick={() => {
                                        handleUpdateItem(filteredProduct.id, quantity);
                                        setQuantity(prev => prev + 1)
                                    }} className="">+</Button>
                                    {quantity}
                                    <Button color="primary" onClick={() => {
                                        handleUpdateItem(filteredProduct.id, quantity);
                                        setQuantity(prev => prev - 1)
                                    }} className=""> -</Button>
                                </>
                            )
                    }
                </Flowbite>
            </div>
        </Card >
    )

}