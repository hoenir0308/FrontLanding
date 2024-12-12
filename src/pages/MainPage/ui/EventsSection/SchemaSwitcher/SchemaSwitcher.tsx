import { classNames } from 'src/shared/lib/classNames/classNames.ts';
import { memo } from 'react';
import cls from './SchemaSwitcher.module.scss';

export enum SchemaSwitcherView {
    default = 'DEFAULT',
    graph = 'GRAPH',
}

interface SchemaSwitcherProps {
  view: SchemaSwitcherView;
  setView: (view: SchemaSwitcherView) => void;
}

export const SchemaSwitcher = memo((props: SchemaSwitcherProps) => {
    const { view, setView } = props;
    console.log(view);

    return (
        <div className={classNames(cls.SchemaSwitcher, {}, [])}>
            <p>Схема взаимодействия</p>
            <div className={cls.buttons}>
                <span
                    className={classNames(cls.caret, {[cls.caretActive]: view === SchemaSwitcherView.graph})}
                />
                <button
                    className={classNames(cls.button, {[cls.buttonActive]: view === SchemaSwitcherView.default})}
                    onClick={() => setView(SchemaSwitcherView.default)}
                >
                    Общий вид
                </button>
                <button
                    className={classNames(cls.button, {[cls.buttonActive]: view === SchemaSwitcherView.graph})}
                    onClick={() => setView(SchemaSwitcherView.graph)}
                >
                    Графовый вид
                </button>
            </div>
        </div>
    )
});
