import "./App.css"
import restaurant from "./restaurant.jpg"

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img
        src={restaurant}
        alt="napkin and fork at a restaurant table"
        height={200}
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return <p>Copyright {props.year}</p>
}

const dishes = ["Macaroni and Cheese", "Salmon", "Tofu with vegetables"]

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }))

function App() {
  return (
    <>
      <Header name="Dhiraj" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  )
}

export default App
