import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserRequest } from '../action';
import { selectUserLoading, selectUserError } from '../selector';
import { userSchema } from '../validate'; // ✅ import validation

// const schema = yup.object({
//   name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
//   email: yup.string().email('Invalid email format').required('Email is required'),
//   mobile: yup
//     .string()
//     .required('Mobile number is required')
//     .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
// }).required();

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    dispatch(addUserRequest(data));
    // In a real app, we'd wait for success action before navigating.
    // simpler hack for this demo: wait a bit or assumes success if no error immediately thrown (Saga handles async)
    // Better pattern: listen to state change or use a callback promise, but simplified here:
    setTimeout(() => {
        navigate('/');
    }, 1000); 
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 className="title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Add New User</h2>
      
      {error && <div className="error-text" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label className="label" htmlFor="name">Name</label>
          <input 
            id="name" 
            className="input" 
            {...register('name')} 
            placeholder="Enter full name"
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>

        <div className="input-group">
          <label className="label" htmlFor="email">Email</label>
          <input 
            id="email" 
            className="input" 
            type="email" 
            {...register('email')} 
            placeholder="Enter email address"
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label className="label" htmlFor="mobile">Mobile</label>
          <input 
            id="mobile" 
            className="input" 
            {...register('mobile')} 
            placeholder="Enter mobile number"
          />
          {errors.mobile && <p className="error-text">{errors.mobile.message}</p>}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button type="submit" className={`btn btn-primary ${loading ? 'btn-disabled' : ''}`} disabled={loading}>
            {loading ? 'Saving...' : 'Save User'}
          </button>
          <button type="button" className="btn" style={{ background: '#f1f5f9', color: '#475569' }} onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
