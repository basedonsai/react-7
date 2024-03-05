import React, { useState } from 'react';
import  './App.css';
import { useForm } from "react-hook-form";

export default function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = data => {
    setUsers([...users, data]);
  };

  return (
    <div className='container'>
      <h1>User Registration</h1>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>

        <input {...register("username", { required: true, minLength: 4, maxLength: 6 })} />
        {errors.username && <p>User Name is required and must be between 4-6 characters long</p>}
        
        <label>Birthday</label>
        <input type="date" {...register("birthday", { required: true })} />
        {errors.birthday && <p>Birthday is required</p>}
        
        <label>City</label>
        <input {...register("city", { required: true })} />
        {errors.city && <p>City is required.</p>}
        
        <input type="submit" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Birthday</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.birthday}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
