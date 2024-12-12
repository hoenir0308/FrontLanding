import { type RouteProps } from 'react-router-dom';
import {MainPage} from "src/pages/MainPage";
import {NotFoundPage} from "src/pages/NotFoundPage";

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
type navElement = {
    id: string,
    title: string;
}

export const navElements: navElement[] = [
    {
        id: '0',
        title: 'Главная'
    },
    {
        id: '1',
        title: 'Инструкция'
    },
    {
        id: '2',
        title: 'О сервисе'
    },
    {
        id: '3',
        title: 'Контакты'
    },
]

