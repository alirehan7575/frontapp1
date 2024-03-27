"use client"
import React, { useState, Fragment, useEffect } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(document.body.clientWidth > 800 ? false : true);
    const [left, setLeft] = useState(-200);
    const [menuItem, setMenuItem] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        setMenuItem(pathname.slice(1) || 'home');
    }, [])

    const fnResize = () => {
        if (document.body.clientWidth < 700) {
            setIsMobileMenu(true);
        } else {
            setIsMobileMenu(false);
        }
    }
    window.addEventListener("resize", fnResize);

    const handleMobileMenuBtnClick = () => {
        setLeft(left == 0 ? -200 : 0);
    }

    const handleMenuItemClick = (eve, item) => {
        eve.stopPropagation();
        setMenuItem(item);
        setLeft(-200);
    }

    return <Fragment className="mb-5">
        {isMobileMenu && <button onClick={handleMobileMenuBtnClick} className={styles.mobileMenuBtn}>
            <span></span>
            <span></span>
            <span></span>
        </button>}

        <ul style={{ left }} className={`${isMobileMenu ? styles.mobileMenu : styles.menu}`} >
            <li><Link onClick={(eve) => handleMenuItemClick(eve, "home")} className={menuItem === 'home' ? styles.menuActive : ''} href="/home">Home</Link></li>
            <li><Link onClick={(eve) => handleMenuItemClick(eve, "about")} className={menuItem === 'about' ? styles.menuActive : ''} href="/about">About</Link></li>
            <li><Link onClick={(eve) => handleMenuItemClick(eve, "contact")} className={menuItem === 'contact' ? styles.menuActive : ''} href="/contact">Contact</Link></li>
        </ul>

    </Fragment>
}

export default Menu
