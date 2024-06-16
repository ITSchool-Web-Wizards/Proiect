export default function NavBtn({ label, btnNumber, isActive, setActiveTab }) {
    const activeClass = isActive ? "active" : "";

    return (
        <li className={`ff-sans-cond uppercase text-light letter-spacing-2 ${activeClass}`} 
            onClick={() => setActiveTab(Number(btnNumber))}
        >
            <span aria-hidden="true">
                {btnNumber}
            </span>
            {label}
        </li>
    )
}