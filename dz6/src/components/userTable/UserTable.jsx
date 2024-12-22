
import React from 'react';

const UserTable = ({ users, onDeleteUser }) => {
    return (
        <div>
            <h2>User Table</h2>
            {users.length > 0 ? (
                <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => onDeleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>The table is empty.</p>
            )}
        </div>
    );
};

export default UserTable;
