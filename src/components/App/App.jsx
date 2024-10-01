import { GiphyFetch } from '@giphy/js-fetch-api';
import axios from 'axios';
import FavoritesView from '../FavoritesView/FavoritesView';



// async function performSearch(query) {
//   const apiKey = 'X6HYkiiUqmfjBpMPsmQyVwjLcPSrIsJo';
//   const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=5`;
  
//   try {
//       const response = await fetch(url);
//       const data = await response.json();
//       displayResults(data.data);
//   } catch (error) {
//       vscode.window.showErrorMessage('Error fetching GIFs');
//   }
// }

// function displayResults(gifs) {
//   panel.webview.postMessage({
//       command: 'displayResults',
//       gifs: gifs
//   });
// }

/*  const [giphy, setGiphy] = useState([]);

useEffect(() => {
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=10`).then(response => {
    setGiphy(response.data.results);
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong.');
  })
}, []);
*/



function App() {


const apikey = new GiphyFetch('X6HYkiiUqmfjBpMPsmQyVwjLcPSrIsJo');


const search = async () => {
  try {
    const result = await gf.search("dogs", { sort: "recent" });
    console.log(`search`, result);
  } catch (error) {
    console.error(`search`, error);
  }
};


//   const giphyApiCall = () => {
//    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=`X6HYkiiUqmfjBpMPsmQyVwjLcPSrIsJo`)
//    .then((response) => {

//    })
//    .catch((error) => {
//     console.log(error)
//    })
// }

//   return (
//     <div>
//       <h1>Giphy Search!</h1>

//       <h2>Search View</h2>

      

//       <button type="submit">Search</button>


//     <FavoritesView />

//     </div>
//   );
// }


// export default App;
