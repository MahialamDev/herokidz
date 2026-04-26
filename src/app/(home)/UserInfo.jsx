'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const UserInfo = () => {
    const session = useSession();
    console.log(session)
    return (
        <div className='min-h-14 border p-5 flex items-center justify-center'>
            This is user info: {(session?.data?.user?.name)}
        </div>
    );
};

export default UserInfo;