import './App.css';
import React from 'react';
import { Header } from '../Header';
import { Nav } from "../Nav"
import { Main } from '../Main';
import { Trends } from '../Trends';
import { TrendsList } from '../Trends/TrendsList';
import { TrendsMovie } from '../Trends/TrendsMovie';
import { TrendsImg } from '../Trends/TrendsImg';
import { Categories } from '../Main/Categories';
import { CategoryContainer } from '../Main/CategoryContainer';
import { CategoryTitle } from '../Main/CategoryTitle';
import { CategoryMovie } from '../Main/CategoryMovie';
import { Footer } from '../Footer';
import { FooterContainer } from '../Footer/FooterContainer';
import { SocialMedias } from '../SocialMeidas';
import { SocialMediasContainer } from '../SocialMeidas/SocialMediasContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import { API_KEY } from "../secret.js"

function App() {

  const listMovie = [1, 2, 3, 4];
  const [value, setValue] = React.useState([]);

  React.useEffect(() => {
    async function getTrendsTitle() {
      const rest = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=` + API_KEY);
      setValue(rest.data.results);
    }
    getTrendsTitle();
  }, [])

  console.log(value);


  return [
    <Header >
      <Nav />
    </Header>,

    <Main>

      <Trends>

        <TrendsList>

          {value.map((movie) => (
            < TrendsMovie
              title={movie.title}
            >

              <TrendsImg
                image={movie.poster_path}
              />

            </ TrendsMovie>
          ))}

        </TrendsList>

      </Trends>

    </Main >,

    <Categories>

      {listMovie.map((movie) => (
        <CategoryContainer>

          <CategoryTitle>

          </CategoryTitle>

          <CategoryMovie>

          </CategoryMovie>

        </CategoryContainer>
      ))}

    </Categories>,

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
