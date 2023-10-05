import './NavBar.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NavBar = () => {
  return (
    <Container>
      <Row className="menu">
        <Col lg={7} sm={12}>
          <h3>
            <span>Marvel</span> informatiohn portal
          </h3>
        </Col>
        <Col lg={5} sm={12}>
          <div className="pages">
            <div className="characters">
              <h3>
                {' '}
                Characters <span>/</span>
              </h3>
            </div>

            <div className="comics">
              <h3> Comics</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NavBar
