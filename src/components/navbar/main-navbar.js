import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"
export default function Navbar() {
    return (
        <div >
            <div className="hidden sm:block">
                <NavbarDesktop />
            </div>
            <div className="sm:hidden " >
                <NavbarMobile />

            </div>
        </div>
    )
}