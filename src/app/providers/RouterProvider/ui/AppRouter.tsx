import {
    memo, Suspense,
} from 'react';
import {Routes, Route } from 'react-router-dom';
import {routeConfig} from "src/shared/config/routeConfig.tsx";


const AppRouter = () => {
    const routes =Object.entries(routeConfig);

    return (
        <Routes>
            {routes.map((object) => (
                <Route
                    key={object[1].path}
                    element={<Suspense fallback="">
                        {object[1].element}
                    </Suspense>}
                    path={object[1].path}
                />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);
