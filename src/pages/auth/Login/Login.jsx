import { Button, Card, Label, TextInput, Spinner, Flowbite, } from 'flowbite-react';
import { AuthenticationLayout } from '../../../layouts/AuthenticationLayout'
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../utils/axios';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const schema = z.object({
    username: z.string().min(6, { message: 'Username must be more than 6 characters' }),
    password: z.string().min(8, { message: 'Password must be more than 8 characters' }),
});


const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(schema)
    })


    const onSubmit = async (data) => {
        try {

            setIsLoading(!isLoading)
            toast.success("Login Successfully")
            const response = await api.post('/users/login', {
                username: data.username,
                password: data.password,
            });

            localStorage.setItem('token', response.data.token);

            // Handle success, such as storing the token in local storage and redirecting
            // For example:
            // localStorage.setItem('token', response.data.token);
            // Redirect to a different page

            setIsLoading(!isLoading)
            setTimeout(() => {
                navigate('/home');
            }, 1000);

        } catch (error) {
            // check error.response.status to see if the error is due to invalid credentials
            toast.error("Something went wrong")
            console.error('Error during login:', error.message);
        }
    }



    return (

        <AuthenticationLayout>

            <Toaster />

            <Card
                className="max-w-sm w-96 z-10 rounded-none">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Welcome to Naptool
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-3">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Username" />
                        </div>

                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, formState: { errors } }) => (
                                <>
                                    <TextInput color="black" id="username" placeholder='username' {...field} />
                                    {errors.username && <span className='text-red-500 text-xs font-normal'>{errors.username.message}</span>}
                                </>
                            )}
                        />

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, formState: { errors } }) => (
                                <>
                                    <TextInput color="black" id="password1" placeholder='password' {...field} />
                                    {errors.password && <span className='text-red-500 text-xs font-normal'>{errors.password.message}</span>}
                                </>
                            )}
                        />
                    </div>

                    {/* button with spinner */}
                    <Flowbite theme={{
                        theme: {
                            button: {
                                color: {
                                    primary: 'bg-black hover:bg-black/80 text-white',
                                },
                            },

                        }
                    }}>

                        {isLoading ? <Button className='bg-black' disabled>
                            <Spinner aria-label="Spinner button example" size="sm" />
                            <span className="pl-3">Loading...</span>
                        </Button> : <Button color='primary' type="submit">
                            Login
                        </Button>}

                    </Flowbite>

                </form>
                <div className="flex flex-col items-center gap-2">

                    <Link to="/forgot-password">
                        <Label className='underline cursor-pointer text-black '>
                            Forgot Password
                        </Label>
                    </Link>
                    <div className='space-x-1'>

                        <span className='font-semibold text-sm'>Dont have an Account?</span>
                        <Link to="/signup">
                            <Label className='underline cursor-pointer text-black '>
                                Signup
                            </Label>
                        </Link>
                    </div>

                </div>
            </Card>
        </AuthenticationLayout>

    )

}

export default Login