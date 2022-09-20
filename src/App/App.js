import './App.css';
import { Header } from '../Header';
import { Details } from '../Details';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { SearchSection } from '../SearchSection';
import { SeriesDetails } from '../SeriesDetails';
import { NotFound } from '../NotFound';
import { Genres } from '../Genres';
import { ThemeContextProvider } from '../Context/ThemeContext';
import { Footer } from '../Footer';
import { FooterContainer } from '../Footer/FooterContainer';
import { SocialMedias } from '../SocialMeidas';
import { SocialMediasContainer } from '../SocialMeidas/SocialMediasContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { Home } from '../Home';


function App() {
  const [movieDetail, setMovieDetail] = useState({
    image: false,
    title: "",
    description: "",
  });

  const [value, setValue] = useState({
    loading: true,
  })
  const [imageDetail, setImageDetail] = useState("");

  return [
    <ThemeContextProvider>
      <BrowserRouter>
        <Header
          movieDetail={movieDetail}
          setMovieDetail={setMovieDetail}
        />
        <Routes>
          <Route exact path="/" element={<Home
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
            setLoading={setValue}
            loading={value.loading}
            imageDetail={imageDetail}
            setImageDetail={setImageDetail}
          />} />
          <Route exact path='/movie/:id' element={<Details
            imageDetail={imageDetail}
            setImageDetail={setImageDetail}
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
            setLoading={setValue}
            loading={value.loading}
          />} />

          <Route exact path='/search/:input' element={<SearchSection />} />

          <Route exact path='*' element={<NotFound />} />

          <Route exact path='/series/:id' element={<SeriesDetails />} />
          <Route exact path='/genre/' element={<Genres />} />

        </Routes>
      </BrowserRouter>,
    </ThemeContextProvider>

    // <Main

    //   movieDetail={movieDetail}
    //   setMovieDetail={setMovieDetail}
    // />,



    // <Footer>

    //   <FooterContainer>

    //     <SocialMedias>

    //       <SocialMediasContainer>

    //         <FontAwesomeIcon icon={faTwitter} />

    //       </SocialMediasContainer>

    //       <SocialMediasContainer>

    //         <FontAwesomeIcon icon={faWhatsapp} />

    //       </SocialMediasContainer>

    //       <SocialMediasContainer>

    //         <FontAwesomeIcon icon={faInstagram} />

    //       </SocialMediasContainer>

    //     </SocialMedias>

    //   </FooterContainer>

    // </Footer>

  ];
}

export default App;
