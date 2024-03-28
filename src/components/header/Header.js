import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ isLoggedIn }) => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<header className="header__outer">
			<div className="header__inner responsive-wrapper">
				<Link to="/" className="header__logo">
					<div>
						<img src="https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/logo/Oragne-duck.png" alt="Logo" />
						<h2>Teal Market</h2>
					</div>
				</Link>
				<nav className="header__navigation">
					<a href="/">Home</a>
					<a href="/shop">Shop</a>
					<a href="/cart">Cart</a>
					{isLoggedIn ? (
						<>
							<Link to="/settings/profile">Settings</Link>
						</>
					) : (
						<Link to="/login">Login</Link>
					)}
					<button onClick={toggleMenu}>Menu</button>
					<div className={`dropdown-content ${showMenu ? "show" : ""}`}>
						<a href="/">Home</a>
						<a href="/shop">Shop</a>
						<a href="/cart">Cart</a>
						{isLoggedIn ? <Link to="/settings/profile">Settings</Link> : <Link to="/login">Login</Link>}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
