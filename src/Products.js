function Products() {
    const productsFromOb = [
        "Mocassins à glands", "Charentaises", "Talons aiguille"
    ];
    return (
        <main>
            {productsFromOb.map((element)=>{
                return (
                    <article>
                        <h2>{element}</h2>
                    </article>
                );
            })}
        </main>
    );
}
  
export default Products;