import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USER = [
      {
        id: 'u1',
        name: 'Muhammad Muhdar',
        image: 'https://images.pexels.com/photos/3497181/pexels-photo-3497181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        places: 1
      }
    ];  

    return <UsersList item={USER} />;
};

export default Users;