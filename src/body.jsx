import { Outlet } from "react-router"
import { NavBar } from "./nav-bar"

export const Body = () => {
    return (
        <div className="bg-base-100">
            <NavBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}