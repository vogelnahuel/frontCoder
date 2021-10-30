import React from 'react'
import {Link} from 'react-router-dom'
export const Nav = () => {
    const id =2;
    return (
        <div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to={`/product/${id}`}> Product</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
            
        </div>
    )
}
