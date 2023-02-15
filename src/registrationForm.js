import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Regristationform() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const redirect = useNavigate();

    const navigate = (data)=>{
        console.log(data);
        redirect("/login")
    }

    return (
        <div className='card'>
            <h5>Regristation Form</h5>
            <form onSubmit={handleSubmit(navigate)}>
                <div className='m-2'>
                    
                    <input type="text"{...register('firstname', { required: true })} className="form-control" placeholder='firstname'></input>
                    {errors.firstname && <span className='text-danger'>please enter the firstname</span>}
                </div>
                <div className='m-2'>
                    
                    <input type="text"{...register('lastname', { required: true })} className="form-control" placeholder='lastname'></input>
                    {errors.lastname && <span className='text-danger'>please enter the lastname</span>}
                </div>
                <div className='m-2'>
                    
                    <input type="text"{...register('email', { required: true })} className="form-control" placeholder='email'></input>
                    {errors.email &&<span className='text-danger'> please enter the email </span>}
                </div>
                <div className='m-2'>
                    
                    <input type="password"{...register('password', { required: true })} className="form-control" placeholder='password'></input>
                    {errors.password &&<span className='text-danger'>please enter the password</span>}
                </div>

                <div className='m-3'>
                    <select className="form-select" defaultValue="" name="gender" {...register('gender', { required: true })}>
                        <option value="" disabled>select gender</option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {errors.gender && <span className='text-danger'>please enter the gender</span>}
                </div>
                <div className='m-2'>
                   
                    <textarea type ="Address" {...register('Address', { required: true })} className="form-control" placeholder='Address'></textarea>
                    {errors.Address &&<span className='text-danger'>please enter the address</span>}
                </div>
                <div className='m-4'>
                    <button type="Submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Regristationform;