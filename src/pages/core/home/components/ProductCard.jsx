import { Card } from "flowbite-react";
import { useGlobalContext } from '../../../../utils/Context'
import { useId ,useState} from "react";
import { toast } from 'react-hot-toast'



export const ProductCard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { handleAddItem } = useGlobalContext()
    const id = useId()

    const handleCart = (item) => {
        handleAddItem(item)
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 500)
        setIsLoading(!isLoading)
        toast.success('Item added to cart')
    }



    return (
        <Card
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc="/images/products/apple-watch.png"
        >
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
            </a>

            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <button
                    onClick={() => handleCart({
                        id: id,
                        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
                        quantity: 1,
                    })}
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </button>
            </div>
        </Card>
    )

}