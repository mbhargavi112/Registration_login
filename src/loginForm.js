import React from 'react';
import { useForm } from 'react-hook-form';
function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='card '>
            <div>
            <h5>LoginForm</h5>
                <form onSubmit={handleSubmit(data => { console.log(data) })}>
                    <div class='m-2'>
                        <input type="text" {...register('Email', { required: true })} class="form-control" id="Email" placeholder="Email"></input>
                        {errors.Email && <span className='btn btn-danger'> please enter the Email</span>}
                    </div>
                    <div class='m-2'>
                        <input type="text"{...register('password', { required: true })} class="form-control" id="inputPassword" placeholder="password"></input>
                        {errors.password && <span className='btn btn-danger'>please enter the password</span>}
                    </div>
                    <div class='m-3'>
                        <button type="Submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;