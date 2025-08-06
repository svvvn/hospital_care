import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function Login() {
    const loginSchema = z.object({
        Email: z.string().min(1, { message: 'Email is required' }).email(),
        Password: z.string().min(6, { message: 'Password must be at least 6 characters' }).max(20, { message: 'Password must be at most 20 characters' }),
    });

    type Ilogin = z.infer<typeof loginSchema>;

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<Ilogin>({
        resolver: zodResolver(loginSchema),
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Ilogin> = ({ Email, Password }) => {
        const user = { Email, Password };
        console.log(user);

        navigate('/Home'); 
    };

    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container 50-w p-5 rounded'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center'>Sign In</h3>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="example@hotmail.com" className="form-control"
                            {...register('Email')} />
                        {errors.Email && <span className='text-danger'>{errors.Email.message}</span>}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className="form-control"
                            {...register('Password')} />
                        {errors.Password && <span className='text-danger'>{errors.Password.message}</span>}
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Sign in</button>
                    </div>

                    <p className="text-right">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;