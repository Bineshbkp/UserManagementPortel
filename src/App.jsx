import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import UserList from './pages/users/components/UserList';
import UserForm from './pages/users/components/UserForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* List of users */}
          <Route index element={<UserList />} />

          {/* Add new user */}
          <Route path="add" element={<UserForm />} />

          {/* Edit user (dynamic route) */}
          <Route path="edit/:id" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
