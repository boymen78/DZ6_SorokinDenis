
import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onAddUser, onClearTable }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onAddUser(data);
        reset();
    };

    return (
        <div>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                    <label>Name:</label>
                    <input {...register('name', { required: 'Name is required' })} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Username:</label>
                    <input {...register('username', { required: 'Username is required' })} />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register('email', { required: 'Email is required' })} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input {...register('phone', { required: 'Phone is required' })} />
                    {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                </div>
                <div>
                    <label>Website:</label>
                    <input {...register('website')} />
                </div>
                <button type="submit">Create</button>
                <button type="button" onClick={onClearTable}>Clear Table</button>
            </form>
        </div>
    );
};

export default UserForm;
