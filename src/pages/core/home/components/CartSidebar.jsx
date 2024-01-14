import { Button, Sidebar } from 'flowbite-react';
import { createPortal } from 'react-dom';
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../../../../utils/Context';

export const CartSidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
    const component = (
        <>
            <Sidebar className='fixed right-0 h-screen top-0 bottom-0' aria-label="Default sidebar example">
                <Sidebar.Items className=' flex'>
                    <h1 className='flex-1'>Items</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <IoClose className='h-5 w-5' />
                    </button>
                </Sidebar.Items>
                <Sidebar.Items className='border-0 border-b-2 flex mt-10'>
                    <h1>
                        Lorem, ipsum.
                    </h1>
                </Sidebar.Items>

                <Sidebar.Items className='bottom-0 mt-3'>
                    <Button className='w-full' disabled>Pay</Button>
                </Sidebar.Items>
            </Sidebar>
        </>
    )


    return isSidebarOpen && createPortal(component, document.body)
}