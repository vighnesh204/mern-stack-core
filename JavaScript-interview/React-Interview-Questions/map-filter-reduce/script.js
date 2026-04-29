const products = [
  { id: 1, name: "Infinity (Limitless)", price: 200, category: "Electronics" },
  { id: 2, name: "Divergent Fist", price: 150, category: "Clothing" },
  { id: 3, name: "Ten Shadows Technique", price: 180, category: "Electronics" },
  { id: 4, name: "Water Breathing", price: 220, category: "Clothing" },
  { id: 5, name: "Blood Demon Art", price: 210, category: "Electronics" },
  { id: 6, name: "Thunder Breathing", price: 170, category: "Electronics" },
];

const names = ["Infinity", "Water", "Infinity", "Blood", "Water"];

function App() {
  return (
    <div>
      <h2>Rendering Lists and Conditional Operators</h2>
      <h5>
        Question 1: How does the map function work in React for rendering lists?
        Can you provide an example?
      </h5>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price} - Category:{" "}
              {product.category}
            </li>
          );
        })}
      </ul>

      <h5>Question 2: How can you filter products with a specific category?</h5>
      <ul>
        {products
          .filter((product) => product.category === "Electronics")
          .map((product) => {
            return (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price} - Category:{" "}
                {product.category}
              </li>
            );
          })}
      </ul>

      <h5>
        Question 3: How can you Render a summary of total prices for products?
      </h5>
      <div>
        <p>
          Total Price Summary: ${" "}
          {products.reduce((acc, product) => {
            return acc + product.price;
          }, 0)}
        </p>
      </div>

      <h5>
        Question 4: Add discountedPrice key with 10% discount to all the
        products with price more than $20 and render it.
      </h5>
      <ul>
        {products
          .filter((product) => product.price > 20)
          .map((product) => {
            return {
              ...product,
              discountedPrice: product.price * (10 / 100),
            };
          })
          .map((product) => {
            return (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.discountedPrice} -
                Discounted from: {product.price}
              </li>
            );
          })}
      </ul>

      <h5>
        Question 5: How can you filter and render unique elements from an array
        using filter in React?
      </h5>
      {names
        .filter((name, index) => {
          return names.indexOf(name) === index;
        })
        .map((name) => {
          return <li key={name}>{name}</li>;
        })}

      {/* Conditional Operators */}
      <h5>Question 6: Difference between && vs ||</h5>
      <LogicalAnd />
      <LogicalOr />

      <h5>Question 7: Difference between .? vs ?? </h5>
      <OptionalChaining />
      <NullishCoalescing />
    </div>
  );
}

const NullishCoalescing = () => {
  let userInput = null;
  let defaultValue = "Hello, default value!";

  return <p>{userInput ?? defaultValue}</p>;
};

const OptionalChaining = () => {
  let user = {
    name: "John",
  };

  return <p>{user?.address?.city}</p>;
};

const LogicalAnd = () => {
  let x = 5;
  let y = 10;

  if (x > 0 && y > 0) {
    return <p>Both are greater than 0</p>;
  } else return <></>;
};

const LogicalOr = () => {
  let isRaining = false;
  let isSunny = true;
  if (isRaining || isSunny) {
    return <p>It's either raining or sunny (or both)!</p>;
  } else <></>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);