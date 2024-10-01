import { useState } from "react";
import axios from "axios";
import Favorites from "../Favorites/Favorites";

function App() {

  const [search, setSearch] = useState(""); // state variable for search to update when a term is searched in handleSearch onChange event
  const [gifs, setGifs] = useState([]); // state variable for gif to update the empty array in .then response, and display gif results on DOM

  const handleSearch = (event) => { // function to handle the onSubmit search event below.
    event.preventDefault();

    axios.get('https://api.giphy.com/v1/gifs/search', { // giphy API endpoint request
      params: {
        api_key: 'MX7BzYFvAD1qPWhJCg9WQTTkpBzn8DrT', // giphy API key
        q: search, // parameter that search keywords or terms
        limit: 10, // number of returns. -- obtained params from sample queries & live response at https://developers.giphy.com/explorer/
      }
    })
      .then(response => {
        setGifs(response.data.data || []);
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong.');
      });
  };


  return (
    <div>
      <h1>Giphy Search!</h1>

      <form onSubmit={handleSearch}>
        <h2>Search View</h2>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="search"
        ></input>
        <button type="submit">Search</button>
      </form>

      <div className="gif-results">
        {gifs.length > 0 ? (
          <ul>
            {gifs.map((gif) => (
              <li key={gif.id}>
                <img src={gif.images.fixed_height.url} alt={gif.title} />
                <p>{gif.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results yet. Start searching for GIFs!</p>
        )}
      </div>

      <Favorites />

    </div>
  );
}


export default App;

//https://api.giphy.com/v1/gifs/search?api_key=MX7BzYFvAD1qPWhJCg9WQTTkpBzn8DrT
//https://github.com/PrimeAcademy/kenai-fjords-syllabus/blob/main/lecture-notes/week-12-react-apis/swapi-react.md
//https://github.com/PrimeAcademy/weekend-movie-sagas/blob/main/src/components/MovieList/MovieList.jsx

/* -- from weekend-movie-saga. Used similar workflow above to display gifs on DOM.
return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>
  );
*/
