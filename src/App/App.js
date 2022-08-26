import './App.css';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { FooterContainer } from '../Footer/FooterContainer';
import { SocialMedias } from '../SocialMeidas';
import { SocialMediasContainer } from '../SocialMeidas/SocialMediasContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';


function App() {
  const [movieDetail, setMovieDetail] = useState({
    image: false,
    title: "",
    description: "",
  });


  // async function getCategoryMovie() {
  //   try{
  //   const res = await axios.get(`https://api.themoviedb.org/3/discover/movie/?with_genres${27}&api_key=` + API_KEY);

  //   }
  //   console.log(res.data.results);
  // }

  // getCategoryMovie();



  return [
    <Header
      movieDetail={movieDetail}
      setMovieDetail={setMovieDetail}
    />,

    <Main
      movieDetail={movieDetail}
      setMovieDetail={setMovieDetail}
    />,



    <Footer>

      <FooterContainer>

        <SocialMedias>

          <SocialMediasContainer>

            <FontAwesomeIcon icon={faTwitter} />

          </SocialMediasContainer>

          <SocialMediasContainer>

            <FontAwesomeIcon icon={faWhatsapp} />

          </SocialMediasContainer>

          <SocialMediasContainer>

            <FontAwesomeIcon icon={faInstagram} />

          </SocialMediasContainer>

        </SocialMedias>

      </FooterContainer>

    </Footer>

  ];
}

export default App;
