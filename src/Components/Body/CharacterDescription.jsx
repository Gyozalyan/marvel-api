import { Button } from 'react-bootstrap'
import Accsessories from '../img/mjolnir.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import './body.scss'
import MarvelAPI from '../../Services/MarvelServices'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const CharacterDescription = () => {
  const [characterFeatures, setCharacterFeatures] = useState({
    name: null,
    description: null,
    thumbnail: null,
    homePage: null,
    wiki: null,
  })

  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

  const MarvelChars = new MarvelAPI()

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    
    setLoading(true); 
  
    MarvelChars.getOneCharacter(id)
      .then((res) => {
        setCharacterFeatures(res);
        setErr(false); 
      })
      .catch((err) => {
        setErr(true); 
      })
      .finally(() => {
        setLoading(false);
      });
  }

 const onTry =()=>{
   updateChar()

  }
  useEffect(() => {
    updateChar()
    // setInterval(updateChar,3000)
    // eslint-disable-next-line
  }, [])

  const errMessage = err ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner /> :null;
  const content = !(loading || err) ? <View characterFeatures={characterFeatures}/> : null;

  return (
    <Container>
      <Row className="randomCharacter">
        <Col sm={12} xl={6}>
          {errMessage}
          {spinner}
          {content}
        </Col>
        <Col sm={12} xl={6}>
          <div className="randomChar">
            <p className="randomChar_title">
              Random character for today!
              <br />
              Do you want to get to know him better?
            </p>
            <p className="randomChar_title">Or choose another one</p>
            <Button variant="primary" onClick={onTry}>Try it</Button>
            <img src={Accsessories} alt="accessories" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const View = ({ characterFeatures }) => {
  const { name, thumbnail, description, homePage, wiki } = characterFeatures
  let imgStyle = {'objectFit' : 'cover'};
  if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgStyle = {'objectFit' : 'contain'};
  }
  return (
    <div className="char">
      <div className="picture">
        <img src={thumbnail} alt={name} style={imgStyle}/>
      </div>

      <div className="info">
        <h4 className="name">{name}</h4>

        <p className="desc">
          {description || 'There is no description for this character'}
        </p>

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
    </div>
  )
}

export default CharacterDescription
