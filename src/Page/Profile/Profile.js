import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile(props) {

    if (!localStorage.getItem('user')) {
        alert('Dang Nhap');
        return <Redirect to='/login' />
    }
    return (
        <div>
            Profile
        </div>
    )
}
