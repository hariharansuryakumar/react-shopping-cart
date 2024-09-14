import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container, Button, Card } from "react-bootstrap";
const products = [
  {
    id: 1,
    title: "Rolex Watch",
    price: 13999.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
  },

  {
    id: 2,
    title: "Apple MacBook 14",
    price: 1999.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },
  {
    id: 3,
    title: "Green Oval Earring",
    price: 24.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
  },
  {
    id: 4,
    title: "Apple Airpods",
    price: 129.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },
  {
    id: 5,
    title: "Cricket Helmet",
    price: 44.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
  },
  {
    id: 6,
    title: "iPhone X",
    price: 899.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
  },
  {
    id: 7,
    title: "Golf Ball",
    price: 9.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
  },
  {
    id: 8,
    title: "Golden Shoes",
    price :19.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/thumbnail.png",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  const removeCart = (product) => {
    setCart(cart.filter((item) => item.id != product.id));
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        
          <Navbar.Brand href="#home">React Shopping Cart</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Button className="btn btn-dark me-3">Cart {cart.length}</Button>
        
      </Navbar>
      <h1
        className="p-3 d-flex justify-content-center"
        style={{
          color: "white",
          backgroundColor: "black",
        }}
      >
        Shop In Style
      </h1>

      <div className="row m-3">
        {products.map((item) => (
          <>
            <div key={item.id} className="col-md-3 g-3">
              <Card className="mb-3 bs">
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <b>Price : $</b>
                    {item.price}
                  </Card.Text>
                  <div className=" d-flex justify-content-center">
                    {isInCart(item) ? (
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => removeCart(item)}
                      >
                        Remove from Cart
                      </Button>
                    ) : (
                      <Button
                        variant="dark"
                        size="lg"
                        onClick={() => addCart(item)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;