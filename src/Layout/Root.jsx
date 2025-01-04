import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root
