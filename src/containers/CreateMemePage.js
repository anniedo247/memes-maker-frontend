import SideMenu from 'containers/SideMenu'
import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'

const CreateMemePage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <SideMenu/>
          <Col md={9} className="d-flex justify-content-center">
            <h1>CreateMemePage</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CreateMemePage
