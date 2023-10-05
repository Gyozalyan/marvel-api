import charPic from '../img/abyss.jpg'
import Vision from '../img/vision.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Thor from '../img/thor.jpeg'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import './body.scss'

const Content = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

  const char = arr.map((char, index) => {
    return (
      
      <Col className="character_item" key={index} md={3}>
        
        <img src={charPic} alt="character" />

        <p className="character_name">Aryys</p>
        
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

  return (
    <Container className="CharContent">
      <Row className="character_grid"> {char}</Row>
      <Row className="character_info">
        <Col>
          <div className="character_basics">
            <img src={Thor} alt="thor" className='thor'/>

            <div className="name_buttons">
              <p>Thor</p>
              <div className="butss">
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </div>
          </div>

          <p className="char_description">
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the
            son of Fárbauti and Laufey, and the brother of Helblindi and
            Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
            wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
            the father of Nari and/or Narfi and with the stallion Svaðilfari as
            the father, Loki gave birth—in the form of a mare—to the
            eight-legged horse Sleipnir. In addition, Loki is referred to as the
            father of Váli in the Prose Edda.
          </p>

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
      <Row className='load_more_row'>
        <Col>
        <Button className="load_more"> Load more</Button>
        <div className="vision-char">
          <img src={Vision} alt="vision" className="vision" />
        </div>
        </Col>
      </Row>{' '}
    </Container>
  )
}

export default Content
