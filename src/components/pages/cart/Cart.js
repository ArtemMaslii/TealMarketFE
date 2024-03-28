import { useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "reducer/cartSlice";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

import "./cart.scss";
import SubmitButton from "components/submitButton/SubmitButton";
import InputForm from "components/form/InputForm";

const Cart = () => {
	const [sortCriteria, setSortCriteria] = useState("price");
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const [card, setCard] = useState({
		holderName: "",
		cardNumber: "",
		month: "",
		year: "",
		cvv: "",
	});
	const yearInputRef = useRef(null);

	const subtotal = cartItems.reduce((total, currentItem) => total + currentItem.price, 0);

	const sortedCartItems = useMemo(() => {
		return [...cartItems].sort((a, b) => {
			if (sortCriteria === "price") {
				return b.price - a.price;
			} else if (sortCriteria === "name") {
				return a.name.localeCompare(b.name);
			}
			return 0;
		});
	}, [cartItems, sortCriteria]);

	const handleInputChange = (e) => {
		const { name, value: rawValue } = e.target;
		let value = rawValue.replace(/\D/g, "");

		if (name === "cardNumber") {
			value = value.replace(/(\d{4})(?=\d)/g, "$1 ").trimEnd();
		} else if (["month", "year", "cvv"].includes(name)) {
			value = value.slice(0, name === "cvv" ? 3 : 2);
		}

		setCard((prevCard) => ({ ...prevCard, [name]: value }));

		if (name === "month" && value.length === 2) {
			yearInputRef.current && yearInputRef.current.focus();
		}
	};

	const handleBuyClick = () => {
		setShowModal(true);
	};

	const handleRemoveFromCart = (index) => {
		dispatch(removeItem(index));
	};

	const handleSortChange = (e) => {
		setSortCriteria(e.target.value);
	};

	return (
		<>
			<div className="cart">
				<a href="/">
					<IoIosArrowRoundBack size="70px" className="back" />
				</a>
				<h1>Shopping Cart</h1>
				<div className="cart__info">
					<h2>You have {cartItems.length} items in cart</h2>
					<div className="sort-by">
						Sort by:
						<select value={sortCriteria} onChange={handleSortChange}>
							<option value="price">Price</option>
							<option value="name">Name</option>
						</select>
					</div>
				</div>
				<div className="cart__items">
					{sortedCartItems.map((item, index) => (
						<div className="item" key={index}>
							<img src={item.img} alt={item.name} />
							<h4>{item.name}</h4>
							<h5>
								Color: {item.color}, Storage: {item.storage}
							</h5>
							<h3>{item.price}$</h3>
							<button onClick={() => handleRemoveFromCart(index)}>Remove</button>
						</div>
					))}
				</div>
				<div className="cart__card">
					<h2>Card details</h2>
					<div className="payment">
						<div className="card-info">
							<h4>Card type</h4>
							<div className="types">
								<button>
									<FaCcVisa size="50px" />
								</button>
								<button>
									<FaCcMastercard size="50px" />
								</button>
							</div>
							<label htmlFor="holderName">
								Cardholder's name
								<input type="text" name="holderName" className="cardholder" placeholder="John Smith" />
							</label>
							<div className="wrapper">
								<label htmlFor="cardNumber" className="card-number">
									Card number
									<input
										type="tel"
										name="cardNumber"
										inputMode="numeric"
										maxLength="19"
										placeholder="xxxx xxxx xxxx xxxx"
										value={card.cardNumber}
										onChange={handleInputChange}
									/>
								</label>
								<label htmlFor="expireDate" className="expire-date">
									Expire
									<div className="exp-wrapper">
										<input
											type="text"
											name="month"
											inputMode="numeric"
											placeholder="MM"
											maxLength="2"
											className="exp"
											value={card.month}
											onChange={handleInputChange}
										/>
										<input
											type="text"
											name="year"
											inputMode="numeric"
											placeholder="YY"
											maxLength="2"
											className="exp"
											value={card.year}
											onChange={handleInputChange}
											ref={yearInputRef}
										/>
									</div>
								</label>
								<label htmlFor="cvv" className="cvv">
									CVV
									<input
										type="password"
										name="cvv"
										inputMode="numeric"
										maxLength="3"
										placeholder="xxx"
										value={card.cvv}
										onInput={handleInputChange}
									/>
								</label>
							</div>
						</div>
						<div className="confirm">
							<div>
								Subtotal: <span>{subtotal}$</span>
							</div>
							<div>
								Shipping: <span>20$</span>
							</div>
							<div>
								Total: <span>{subtotal + 20}$</span>
							</div>
							<button onClick={handleBuyClick}>Buy</button>
						</div>
					</div>
				</div>
			</div>
			{showModal && <ModalForm onClose={() => setShowModal(false)} />}
		</>
	);
};

const ModalForm = ({ onClose }) => {
	return (
		<div className="modal-backdrop">
			<div className="modal">
				<h2>Delivery Data</h2>
				<form className="contact-form">
					<InputForm name="country" type="text" label="Country" />
					<InputForm name="city" type="text" label="City" />
					<InputForm name="street" type="text" label="Street" />
					<InputForm name="post_code" type="text" label="Post code" />
					<SubmitButton onClick={onClose} />
				</form>
			</div>
		</div>
	);
};

export default Cart;
