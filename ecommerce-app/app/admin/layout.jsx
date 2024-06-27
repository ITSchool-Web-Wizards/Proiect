import { Nav, NavLink } from "../components/Nav";

export const dynamic = "force-dynamic";
// force Next.js to not cache admin page

export default function AdminLayout({ children }) {
    return (
        <>
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/products">Products</NavLink>
                <NavLink href="/admin/users">Customers</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}