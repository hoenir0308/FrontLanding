import { classNames } from 'src/shared/lib/classNames/classNames';
import {memo, useState} from 'react';
import cls from './Header.module.scss';
// @ts-ignore
import LoginIcon from "src/shared/assets/icons/log-in.svg?react";
// @ts-ignore
import MenuIcon from "src/shared/assets/icons/menu.svg?react";
import {navElements} from "src/shared/config/routeConfig.tsx";

interface HeaderProps {
  className?: string
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;
    const [navIdActive, setNavIdActive] = useState('0');
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (

        <header className={classNames(cls.header, {}, [className])}>
            <nav className={cls.mobileNav} style={{display: isMenuActive ? 'block' : 'none'}}>
                {isMenuActive &&    <span className={cls.closeArea} onClick={() => setIsMenuActive(false)} /> }
                <ul className={cls.mobileList}>
                    <li className={cls.mobileItem}>
                        <button>
                            Главная
                        </button>
                    </li>
                    <li className={cls.mobileItem}>
                        <button>
                            Инструкция
                        </button>
                    </li>
                    <li className={cls.mobileItem}>
                        <button>
                            О сервисе
                        </button>
                    </li>
                    <li className={cls.mobileItem}>
                        <button>
                            Контакты
                        </button>
                    </li>
                    <li className={cls.mobileItem}>
                        <button>
                            +79 888 888 888
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={cls.logoContainer} />
            <nav>
                <ul className={cls.navBarList}>
                    {
                        navElements.map((e) => (
                            <li
                                className={classNames(cls.navBarPageElement, {})}
                                key={e.id}
                            >
                                <button
                                    className={classNames(cls.navButton, {[cls.liActive]: navIdActive === e.id})}
                                    onClick={() => setNavIdActive(e.id) }
                                >
                                    {e.title}
                                </button>
                            </li>
                        ))
                    }
                    <li className={cls.navBarPageElement}>
                        <button className={cls.phoneNumber}>
                            +79 888 888 888
                        </button>
                    </li>
                    <li className={`${cls.navBarPageElement} ${cls.profileButtonElement}`} style={{marginRight: 0}}>
                        <button className={cls.profileButton}>
                            <p className={cls.profileButtonText}>Личный кабинет</p>
                            <LoginIcon />
                        </button>
                    </li>
                    <li className={cls.menuButton}>
                        <button onClick={() => setIsMenuActive(!isMenuActive)}>
                            <MenuIcon />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
});

export default Header;
