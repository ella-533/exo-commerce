function Header() {
  const isUserLogged = true;
  const isUserLogged = fals;
  const itemsInCart = 2;
    return (
      <header>
        <h1>my commerce</h1>
        <nav>
          <ul>
          {isUserLogged ? <li>Ella</li> :
            <li>connexion</li>}
            <li>Home</li>
            <li>Products</li>
            <li>New</li>
            
            {itemsInCart >0 ?
            <li> cart:{itemsInCart} </li>:<li>ther is no items</li>

            }
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;