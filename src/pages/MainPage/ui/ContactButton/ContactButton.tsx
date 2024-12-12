import { classNames } from 'src/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ContactButton.module.scss';

export const ContactButton = memo(({isPromoAnimated} : {isPromoAnimated: boolean}) => {
    return (
        <div className={cls.contactButtonContainer}>
            <button
                className={classNames(
                    cls.callButton, {[cls.callButtonAnimation]: isPromoAnimated}, [cls.callButtonFixed]
                )}>
                <p>Связаться с дежурным</p>
            </button>
            <span className={cls.buttonBorder
            }/>
        </div>
    );
});
