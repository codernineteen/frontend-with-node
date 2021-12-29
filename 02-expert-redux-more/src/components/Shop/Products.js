import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "Fast lane",
    description: "How to become a millianare",
  },
  {
    id: "p2",
    price: 6,
    title: "Invent and wander",
    description: "Jeff Bezos biography",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => {
          return (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
