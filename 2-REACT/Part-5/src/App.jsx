
import './App.css';
import Peliculas from './components/Peliculas';

const App = () => {
  const peliculas = [
    {
      id: 1,
      title: "The Thing",
      year: 1984,
      director: "Jhon Carpenter"
    },
    {
      id: 2,
      title: "The Matrix",
      year: 1995,
      director: "Wachowski"
    },
    {
      id: 3,
      title: "The Godfather",
      year: 1986,
      director: "Francis Ford Coppola"
    }
  ]

  return (
    <>
      <h1>Movies</h1>
      <Peliculas peliculas={peliculas} />
    </>
  );
};

export default App;
