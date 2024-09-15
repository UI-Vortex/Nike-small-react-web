import "./app.css"
import "./media.css"
import img from "./images/sneakers.png"
import imgLogo from "./images/imgLogo.png"
import sneakers1 from "./images/sneakerboot-1.png"
import sneakers2 from "./images/sneakersboot-2.png"
import sneakers3 from "./images/sneakerboot-3.png"
import sneakers4 from "./images/sneakersboot-4.png"
import { useState } from "react"

export default function App() {
    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(false)
    const [hiden, setHiden] = useState(false)

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
        if (count > 8) {
            alert("you can order up to 9")
        }
    }

    const images = [sneakers2,sneakers3,sneakers4] 

    const handleDecrement = () => {
        setCount(count - 1)

    }

    return (
        <div>
            <header>
                <nav className="header_navbar">
                    <div className="sneakers-texts">
                        <i onClick={() => setHide(!hide)} class="bounce fa-solid fa-bars fa-bounce"></i>
                        {hide && <div className="menu_bar">
                            <div className="Contacts">
                                <h3>Collections</h3>
                                <h3>Men</h3>
                                <h3>Women</h3>
                                <h3>About</h3>
                                <h3>Contact</h3>
                            </div>
                        </div>}
                        <img src={img} alt="error" />
                        <ul className="navbar-list">
                            <li className="navbar-items">
                                <a href="#!" className="navbar-link">Collections</a>
                            </li>
                            <li className="navbar-items">
                                <a href="#!" className="navbar-link">Men</a>
                            </li>
                            <li className="navbar-items">
                                <a href="#!" className="navbar-link">Women</a>
                            </li>
                            <li className="navbar-items">
                                <a href="#!" className="navbar-link">About</a>
                            </li>
                            <li className="navbar-items">
                                <a href="#!" className="navbar-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="cart">
                        <i onClick={() => setShow(!show)} class="hello fa-solid fa-cart-shopping"></i>
                        {show && <div className="rendering-shop">
                            <h3>cart</h3>
                            <hr />
                            {hiden && <div className="carts">
                                <div className="cart-shop">
                                    <img src={sneakers3} alt="error" />
                                    <p>Fall Limited Edition Sneakers $125.00 x {count} = <span>{count * 125}</span></p>
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                                <button className="cart-button">Checkout</button>
                            </div>}
                        </div>}
                        <img className="image-first" src={imgLogo} alt="error" />
                    </div>
                </nav>
                <hr />
            </header>
            <main>
                <div className="sneaker-flexer">
                    <div className="sneaker-images">
                        <img src={sneakers1} alt="" />
                        <div className="sneakers-row-images">
                            <img className="first" src={sneakers1} alt="" />
                            <img src={sneakers2} alt="error" />
                            <img src={sneakers3} alt="error" />
                            <img src={sneakers4} alt="error" />
                        </div>
                    </div>
                    <div className="sneakers-text">
                        <h3>Sneaker Company</h3>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <p>#These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                        <div className="bills">
                            <h1>$125.00</h1>
                            <h4>50%</h4>
                        </div>
                        <div className="incre-and-add">
                            <div className="increment">
                                <button onClick={handleIncrement} className="first">+</button>
                                <span>{count}</span>
                                <button onClick={handleDecrement} className="second">-</button>
                            </div>
                            <div onClick={() => setHiden(!hiden)} className="check">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>Add to cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}