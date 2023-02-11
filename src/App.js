import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/> 
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      <Row isLargeRow={true} title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="documentries" fetchUrl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
