import { Button } from 'react-bootstrap'
import Thor from '../img/thor.jpeg'
import Accsessories from '../img/mjolnir.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './body.scss'

const CharacterDescription = () => {
  return (
    <Container>
      <Row className="randomCharacter">
        <Col sm={12} xl={6}>
          <div className="char">
            <div className="picture">
              <img src={Thor} alt="ssss" />
            </div>

            <div className="info">
              <h4 className="name">Thor</h4>

              <p className="desc">
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </p>

              <div className="buttons">
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} xl={6}>
          <div className="randomChar">
            <p className="randomChar_title">
              Random character for today!
              <br />
              Do you want to get to know him better?
            </p>
            <p className="randomChar_title">Or choose another one</p>
            <Button variant="primary">Primary</Button>
            <img src={Accsessories} alt="accessories" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CharacterDescription
