import './App.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header';
import { Nav } from "../Nav"
import { Main } from '../Main';
import { Trends } from '../Trends';
import { TrendsList } from '../Trends/TrendsList';
import { TrendsMovie } from '../Trends/TrendsMovie';
import { TrendsImg } from '../Trends/TrendsImg';
import { RankedSection } from '../RankedSection';
import { Ranked } from '../Ranked';
import { Footer } from '../Footer';
import { FooterContainer } from '../Footer/FooterContainer';
import { SocialMedias } from '../SocialMeidas';
import { SocialMediasContainer } from '../SocialMeidas/SocialMediasContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import { API_KEY } from "../secret.js"

function App() {

  const [trends, setTrends] = useState([])
  const [categories, setCategories] = useState([])
  const [moviesCategory, setMoviesCategory] = useState([])

  useEffect(() => {

    const categoryMovieId = categories.map((category) => {
      return category.id;

    })

    setTimeout(() => {
      async function getTrendsTitle() {
        const rest = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=` + API_KEY);

        setTrends(rest.data.results)
      }

      async function getCategoriesPreview() {
        const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=` + API_KEY);

        setCategories(res.data.genres);
      }

      async function getCategoryMovie() {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie/?with_genres${27}&api_key=` + API_KEY);
        console.log(res.data.results);
      }

      getCategoryMovie();
      getCategoriesPreview();
      getTrendsTitle();
    }, 3000)




  }, [trends, categories, moviesCategory])



  return [
    <Header >
      <Nav />
    </Header>,

    <Main>

      <Trends>

        <TrendsList>

          {trends.map((movie) => (
            < TrendsMovie
              title={movie.title}
            >

              <TrendsImg
                image={movie.poster_path}
                title={movie.title}
              />

            </ TrendsMovie>
          ))}

        </TrendsList>

      </Trends>

    </Main >,

    <RankedSection>
      <Ranked>

      </Ranked>

    </RankedSection>,


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
