import React from 'react';
import Link from "next/link";
import styles from "./navigation.module.css"
const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/about",
    },
    {
        label: "Post",
        route: "/post",
    }
  ];
export function Navigation  () {
    return (
    <header className={styles.header}>
        <nav className={styles.navigation}>
        {links.map(({ label, route }) => (
            <li key={route}>
                <Link href={route}>{label}</Link>
            </li>
        ))}
        </nav>
    </header>
    );
};

