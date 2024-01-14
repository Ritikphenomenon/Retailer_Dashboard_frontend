import { Button, Card,  Label, TextInput } from 'flowbite-react';
import { AuthenticationLayout } from '../../../layouts/AuthenticationLayout'
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const schema = z.object({
    username: z.string().min(6, { message: 'Username must be more than 6 characters' }),
    password: z.string().min(8, { message: 'Password must be more than 8 characters' }),
});


const Login = () => {

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
            const response = await axios.post('http://localhost:3000/users/login', {
              username: data.username,
              password: data.password,
            });
      
            console.log(response.data);
      
            // Handle success, such as storing the token in local storage and redirecting
            // For example:
            // localStorage.setItem('token', response.data.token);
            // Redirect to a different page
            navigate('/home');

          } catch (error) {
            console.error('Error during login:', error.message);
          }
    }



    return (

        <AuthenticationLayout>
            <Card className="max-w-sm w-96">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Username" />
                        </div>
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: true }}
                            render={({ field,  formState: { errors } }) => (
                                <>
                                    <TextInput id="username" placeholder='username' {...field} />
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
                                    <TextInput id="password1" placeholder='password' {...field} />
                                    {errors.password && <span className='text-red-500 text-xs font-normal'>{errors.password.message}</span>}
                                </>
                            )}
                        />
                    </div>

                    <Button type="submit">
                        Submit
                    </Button>

                </form>
                <div className="flex flex-col items-center gap-2">

                    <Link to="/forgot-password">
                        <Label className='text-blue-500 '>
                            Forgot Password
                        </Label>
                    </Link>
                    <div className='space-x-1'>

                        <span className='font-semibold text-sm'>Dont have an Account?</span>
                        <Link to="/signup">
                            <Label className='text-blue-500 '>
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