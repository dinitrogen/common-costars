import Movies from './components/Movies';
import './components/Movies.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chmura Code Assessment: Common Costar Finder</h1>  
      <div className="directions-box">
        <b>Directions:</b> Use the drop down menus to select any combination of actors. Actors that have costarred in both a movie with Actor A and Actor B (not necessarily at the same time) will be displayed in the right-hand panel. 
        <p><b>Validation:</b> To validate the app is working properly, set Actor A to <b>Nicolas Cage</b> and set Actor B to <b>Keanu Reeves</b>, then click the "submit" button to send that request to the API and validate. (Costar's movies are stored in the request object but not displayed on the page.)</p>
        <p><b>Thank you!</b> for the opportunity to apply, I really had fun working on this assessment and hopefully it demonstrates some of my skillset!</p>
      </div>
      
      <Movies />
    </div>
  );
}

export default App;
