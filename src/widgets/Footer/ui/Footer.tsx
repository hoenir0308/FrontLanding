import { memo } from 'react';
import cls from './Footer.module.scss';
import {navElements} from "src/shared/config/routeConfig.tsx";
// @ts-ignore
import Instagram from 'src/shared/assets/icons/social-media/Instagram.svg?react';
// @ts-ignore
import Twitter from 'src/shared/assets/icons/social-media/Twitter.svg?react';
// @ts-ignore
import LinkedIn from 'src/shared/assets/icons/social-media/LinkedIn.svg?react';
// @ts-ignore
import Facebook from 'src/shared/assets/icons/social-media/Facebook.svg?react';

export const Footer = memo(() => {
    return (
        <footer>
            <span id="#footer"/>
            <div className={cls.contactsBlock}>
                <div className={cls.info}>
                    <h2>Как с нами связаться</h2>
                    <p>
                        Мы собираем данные из множества надежных источников, включая новостные сайты,
                        социальные сети и блоги, чтобы всегда быть в курсе самых актуальных
                        и значимых событий в мире.
                    </p>
                </div>
                <ul className={cls.contactsList}>
                    <li className={cls.contactsItem}>
                        <h4>Telegram</h4>
                        <a href='/'>@telegramaccount</a>
                    </li>
                    <li className={cls.contactsItem}>
                        <h4>Мобильный</h4>
                        <a href='/'>+995 555 55 55</a>
                    </li>
                    <li className={cls.contactsItem}>
                        <h4>Эл. почта</h4>
                        <a href='/'>mail@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div className={cls.footerNavMain}>
                <div className={cls.hoenirLogo} />
                <nav>
                    <ul className={cls.navList}>
                        {
                            navElements.map((item) => (
                                <li className={cls.navItem} key={item.id}>
                                    <a>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <ul className={cls.logos}>
                    <li className={cls.logo}>
                        <a>
                            <Facebook/>
                        </a>
                    </li>
                    <li className={cls.logo}>
                        <a>
                            <Twitter/>
                        </a>
                    </li>
                    <li className={cls.logo}>
                        <a>
                            <Instagram/>
                        </a>
                    </li>
                    <li className={cls.logo}>
                        <a>
                            <LinkedIn/>
                        </a>
                    </li>
                </ul>
            </div>
            <p className={cls.copyright}>Copyright © 2024 | All Rights Reserved </p>
        </footer>
    );
});
