 import styles from './header.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul>
                    <li><a href='#'>Characters</a></li>
                    <li><a href='#'>Episodes</a></li>
                    <li><a href='#'>Locations</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;