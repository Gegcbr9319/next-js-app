import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Movie', path: '/movie' },
    { id: 3, title: 'About', path: '/about' },
];

export const Header = () => {
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                {navigation.map(({ id, title, path }) => (
                    <Link
                        key={id}
                        href={path}
                        className={pathname === path ? styles.active : styles.unactive}
                    >
                        {title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
