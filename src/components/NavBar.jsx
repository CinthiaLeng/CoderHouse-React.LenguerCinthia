import CartWidget from "./CartWidget";

const NavBar =() => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>The Pizza React</h1>
            </div>
            <div>
            <ul className="navbar__links">
                <li><a href="#our-pizzas">Our Pizzas</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
            </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;