import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import {classNames} from "src/shared/lib/classNames/classNames.ts";

interface NotFoundProps {
  className?: string
}

export const NotFoundPage = memo((props: NotFoundProps) => {
    const { className } = props;
    
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            NotFound
        </div>
    );
});

export default NotFoundPage;