function Header() {
  const isUserLogged = true;
    return (
      <header>
        <h1>my commerce</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>New</li>
            {isUserLogged ? <li>Ella</li> :
            <li>connexion</li>}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;