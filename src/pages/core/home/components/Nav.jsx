import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from '../../../../utils/Context';
import { api } from '../../../../utils/axios';


export const Nav = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
    // const 

    return (
        <Navbar className='fixed w-full z-10' fluid rounded>
            <Navbar.Brand href="/home">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-kart</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <FaShoppingCart className='mr-3 h-6 w-6 text-slate-600' />
                </button>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={()=>{

                    }}>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>

        </Navbar>
    )
}