import React from 'react'
import './user.css'
import { FaTrash, FaPencilAlt, FaRegEye } from 'react-icons/fa';

const User = ({id,email,name,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <FaRegEye></FaRegEye>
                <FaPencilAlt>edit</FaPencilAlt>
                <FaTrash onClick={handleDelete}>delete</FaTrash>
            </span>
        </div>
    )
}

export default User
