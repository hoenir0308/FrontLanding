import {Suspense } from 'react'
import AppRouter from "./providers/RouterProvider/ui/AppRouter";

function App() {
    return (
        <>
            <Suspense fallback="" />
            <AppRouter />
        </>
    )
}

export default App
