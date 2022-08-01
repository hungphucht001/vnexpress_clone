// import { DefaultLayout, LayoutBanner } from "~/layouts/DefaultLayout";
import DefaultLayout from '../Layouts/DefaultLayout'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

const privateRoutes = [
]

const publicRoutes = [
    {
        path: "/",
        element: Home,
        layout: DefaultLayout
    },
    {
        path: "/detail",
        element: Detail,
        layout: DefaultLayout
    },
]

export { privateRoutes, publicRoutes }