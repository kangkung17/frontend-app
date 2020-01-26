import React from 'react';

import UserList from '../components/UsersList';
import UsersList from '../components/UsersList';

const Users = () => {

    const USER = [{
        id: 'u1',
        name: 'Muhammad Muhdar',
        image: 'https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 3
    }]

    return <UsersList item={USER} />;
};

export default Users;