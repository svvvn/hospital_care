import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function Signup() {
    const signupSchema = z.object({
            
            fname: z.string().min(1, { message: 'First Name is required' }),
            lname: z.string().min(1, { message: 'Last Name is required' }),
            Email: z.string().min( 1, { message: 'Email is required' } ).email(),
            Password: z.string().min(6, { message: 'Password must be at least 6 characters' }).max(20, { message: 'Password must be at most 20 characters' }),
            confirm_Password: z.string().min(6, { message: 'Password must be at least 6 characters' }).max(20, { message: 'Password must be at most 20 characters' }),
        }).refine(data => data.Password === data.confirm_Password, {
            message: "Passwords don't match",
            path: ["confirm_Password"],
        });
    
        type Isingup = z.infer<typeof signupSchema>;
    
        const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<Isingup>({
            resolver: zodResolver(signupSchema),
        });
    
        const navigate = useNavigate();
    
        const onSubmit: SubmitHandler<Isingup> = ({fname, lname, Email, Password }) => {
            const user = {fname, lname, Email, Password };
            console.log(user);
    
            navigate('/Home'); 
        };

    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container 50-w p-5 rounded'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center'>Sign up</h3>
                            <div className="mb-2">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" placeholder="First Name" className="form-control"
                            { ...register( 'fname' ) } />
                            {errors.fname && <span className='text-danger'>{errors.fname.message}</span>}   
                            </div>
                
                            <div className="mb-2">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" placeholder="Last Name" className="form-control"
                            { ...register( 'lname' ) } />
                            {errors.lname && <span className='text-danger'>{errors.lname.message}</span>}
                            </div>

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

                    <div className="mb-2">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="form-control"
                            {...register('confirm_Password')} />
                        {errors.confirm_Password && <span className='text-danger'>{errors.confirm_Password.message}</span>}
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Sign Up</button>
                    </div>

                    <p className="text-right">
                        Already have an account? <Link to="/">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;