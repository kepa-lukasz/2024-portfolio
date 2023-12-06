import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"
export default function Navbar() {
    return (
        <div className="">
            <div className="hidden sm:block">
                <NavbarDesktop />
            </div>
            <div className="sm:hidden ">
                <NavbarMobile />

            </div>
        </div>
    )
}