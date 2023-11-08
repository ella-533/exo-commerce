function Header() {
  const isUserLogged = true;
  const itemsInCart = 2;
  const User = {
    firstname: "ella",
    lastname: "ahmad",
    job : "wd",
  };
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
            <li>{User.firstname} {User.lastname} , {User.job}</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;