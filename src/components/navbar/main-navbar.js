import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"
export default function Navbar() {
    return (
        <div className="">
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>
            <div className="md:hidden " >
                <NavbarMobile />

            </div>
        </div>
    )
}