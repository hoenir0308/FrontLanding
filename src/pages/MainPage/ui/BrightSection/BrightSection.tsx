import { memo } from 'react';
import cls from './BrightSection.module.scss';

export const BrightSection = memo(() => {
    return (
        <section className={cls.brightSection}>
            <div className={cls.brightSectionContent} id='#bright-section'>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <h2>Как получить доступ?</h2>
                        <p>
                            Мы собираем данные из множества надежных источников, включая новостные сайты, социальные
                            сети и блоги, чтобы всегда быть в курсе самых актуальных и значимых событий в мире.
                        </p>
                    </li>
                    <li className={cls.item}>
                        <h2>Стоимость системы</h2>
                        <p>
                            Мы собираем данные из множества надежных источников, включая новостные сайты, социальные
                            сети и блоги, чтобы всегда быть в курсе самых актуальных и значимых событий в мире.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
});
