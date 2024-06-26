"use client"

import { Nav, NavLink } from '../components/Nav'

export const dynamic = "force-dynamic";


export default function Layout({ children }) {
    return (
        <>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink className="ml-5" href='login'>Login/SignUp</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}

