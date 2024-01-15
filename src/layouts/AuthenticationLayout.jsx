// eslint-disable-next-line no-unused-vars
import React from "react"


// eslint-disable-next-line react/prop-types
export const AuthenticationLayout = ({ children }) => {
    return (
        <main className="flex justify-center items-center h-screen">
            <img src="https://res.cloudinary.com/duskdho4x/image/upload/v1705296626/pexels-dan-cristian-p%C4%83dure%C8%9B-5514634_qcbuhy.jpg" alt="background" className="w-full h-full absolute" />
            {children}
        </main>
    )
}

