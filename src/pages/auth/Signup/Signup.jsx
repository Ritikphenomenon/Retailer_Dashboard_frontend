import { AuthenticationLayout } from '../../../layouts/AuthenticationLayout';
import { Button, Card, Label, TextInput, Spinner, Flowbite } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';





const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be more than 8 characters' }),
    cpassword: z.string().min(8, { message: 'Password must be more than 8 characters' }),
});



const Signup = () => {

    const [isLoading, setIsLoading] = useState(false)

    const {
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            cpassword: ""
        },
        resolver: zodResolver(schema)
    })


    const onSubmit = async (data) => {
        try {
            setIsLoading(!isLoading)
            toast.success("Signup Successfully")
            const response = await axios.post('http://localhost:3000/users/signup', {
                username: data.email,
                password: data.password,
                repassword: data.cpassword,
            });

            // Log the response from the server

            setIsLoading(!isLoading)

            // Handle success or redirect to another page if needed
        } catch (error) {
            toast.error("Something went wrong")
            console.error('Error during signup:', error.message);
            // Handle error, display a message to the user, etc.
        }
    }

    return (
        <AuthenticationLayout>
            <Toaster />
            <Card className="max-w-sm w-96 z-10 rounded-none">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>

                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, formState: { errors } }) => (
                                <>
                                    <TextInput id="email" type='email' placeholder='Email' color="gray" {...field} />
                                    {errors.email && <span className='text-red-500 text-xs font-normal'>{errors.email.message}</span>}
                                </>
                            )}
                        />

                    </div>


                    <div>

                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>

                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, formState: { errors } }) => (
                                <>
                                    <TextInput id="password1" placeholder='Password' color="black" {...field} />
                                    {errors.password && <span className='text-red-500 text-xs font-normal'>{errors.password.message}</span>}
                                </>
                            )}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Confirm Password" />
                        </div>
                        <Controller
                            name="cpassword"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, formState: { errors } }) => (
                                <>
                                    <TextInput id="password2" placeholder='Confirm Password' color="black" {...field} />
                                    {errors.password && <span className='text-red-500 text-xs font-normal'>{errors.password.message}</span>}
                                </>
                            )}
                        />
                    </div>


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


                    <div className='space-x-1'>
                        <span className='font-semibold text-sm'>Already have an Account?</span>
                        <Link to="/">
                            <Label className='text-black underline'>
                                Login
                            </Label>
                        </Link>
                    </div>

                </div>
            </Card>
        </AuthenticationLayout>
    )

}


export default Signup;