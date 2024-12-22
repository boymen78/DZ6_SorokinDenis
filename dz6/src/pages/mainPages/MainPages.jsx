import React, { useState } from 'react';
import UserForm from '../../components/userForm/UserForm'
import UserTable from '../../components/userTable/UserTable'


const MainPage = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        setUsers([...users, user]);
    };

    const handleDeleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const handleClearTable = () => {
        setUsers([]);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <UserForm onAddUser={handleAddUser} onClearTable={handleClearTable} />
            <UserTable users={users} onDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default MainPage;
