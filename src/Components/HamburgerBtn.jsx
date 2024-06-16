import { useEffect, useState } from "react";

export default function HamburgerBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const navToggle = document.querySelector(".mobile-nav-toggle");

        const showHamburger = () => {
            setIsVisible(prevState => !prevState);
        };

        navToggle.addEventListener("click", showHamburger);
        return () =>{
        navToggle.removeEventListener("click", showHamburger);
        }
    }, []);

    useEffect(() => {
        const nav = document.querySelector(".primary-navigation");
        const navToggle = document.querySelector(".mobile-nav-toggle");

        if (nav && navToggle) {
            nav.setAttribute("data-visible", isVisible);
            navToggle.setAttribute("aria-expanded", isVisible);
        }
    }, [isVisible]);
  
    return (
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <span className="sr-only">Menu</span>
        </button>
    )
}