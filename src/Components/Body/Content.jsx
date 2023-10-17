import React, { useState, useEffect,useLayoutEffect } from 'react'
import Vision from '../img/vision.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import MarvelAPI from '../../Services/MarvelServices'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../spinner/Spinner'

import './body.scss'

const Content = () => {
  const MarvelChars = new MarvelAPI()

  const [characters, setCharacters] = useState([])
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [selectedCharID, setSelectedCharID] = useState()
  const [selectedChar, setSelectedChar] = useState({
    name: null,
    description: null,
    thumbnail: null,
    homePage: null,
    wiki: null,
  })

  const updateCharacters = () => {
    MarvelChars.getAllCharacters()
      .then((res) => {
        setCharacters(res)
        if (res.length > 0) {
          setSelectedCharID(res[0].id); 
        }
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const UpdateChar = () => {
    if (selectedCharID) {
      MarvelChars.getOneCharacter(selectedCharID)
        .then((res) => {
          setSelectedChar(res)
        })
        .catch((err) => {
          setError(true)
        })
    }
  }

  const movies = [
    'All-Winners Squad: Band of Heroes (2011) #3',
    'Alpha Flight (1983) #50',
    'Amazing Spider-Man (1999) #503',
    'Amazing Spider-Man (1999) #504',
    'AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)',
    'Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)',
    'Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)',
    'Vengeance (2011) #4',
    'Avengers (1963) #1',
    'Avengers (1996) #1',
  ]

  const char = characters.map((char, index) => {
    return (
      <Col
        className="character_item"
        key={index}
        md={3}
        onClick={() => setSelectedCharID(char.id)}
      >
        <img src={char.thumbnail} alt={char.name} />
        <p className="character_name">{char.name}</p>
      </Col>
    )
  })

  const marvelMovies = movies.map((mov, index) => {
    return (
      <li className="movies" key={index}>
        {mov}
      </li>
    )
  })

  useEffect( () => {
     updateCharacters()
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    
    UpdateChar()
    // eslint-disable-next-line
  }, [selectedCharID])



  const spinner = isLoading ? <Spinner /> : null
  const err = isError ? <ErrorMessage /> : null
  const content = !(spinner || err) ? char : null
  const selectedContent = !(spinner || err) ? (
    <SelectedCharacter selected={selectedChar} />
  ) : null

  return (
    <Container className="CharContent">
      <Row className="character_grid">
        {spinner}
        {err}
        {content}
      </Row>
      <Row className="character_info">
        <Col>
          {spinner}
          {err}
          {selectedContent}

          <h4>Comics:</h4>

          <ul className="movies_list">{marvelMovies}</ul>

          <h4>Find your character by name</h4>

          <div className="find_character">
            <InputGroup className="mb-3">
              <Form.Control aria-label="characterName" />
              <Button variant="primary">Primary</Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <Row className="load_more_row">
        <Col>
          <Button className="load_more"> Load more</Button>
          <div className="vision-char">
            <img src={Vision} alt="vision" className="vision" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const SelectedCharacter = ({ selected }) => {
  const { name, thumbnail, description, homePage, wiki } = selected
  let imgStyle = { objectFit: 'cover' }
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' }
  }

  return (
    <>
      <div className="character_basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
          {name}
        <div className="buttons">
          <a href={homePage} className="button button__main">
            {' '}
            <div className="inner">Home Page</div>
          </a>
          <a href={wiki} className="button button__secondary">
            {' '}
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>

      <p className="char_description">
        {description || 'There is no description for this character'}
      </p>
    </>
  )
}
export default Content
