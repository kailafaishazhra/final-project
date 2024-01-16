import { Col, Row , Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FormulirPinjam = ({nama, buku, masuk, keluar, handleChange, handleSubmit, id}) => {
  return (
     <div className='mt-6'>
        <Row>
            <Col>
               <h4>{id ? "Edit Data" :"Tambah Data"}</h4>
               <hr />
            </Col>
        </Row>
    <Row>
      <Col>
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-4" controlId="nama">
        <Form.Label>Nama </Form.Label>
        <Form.Control type="text" 
        name="nama"
        value={nama}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="buku">
        <Form.Label>Buku</Form.Label>
        <Form.Control type="textarea" 
        name="buku"
        value={buku}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="masuk">
        <Form.Label>Masuk</Form.Label>
        <Form.Control
         type="Date"
         placeholder='masuk'
        name="masuk"
        value={masuk}
        onChange={(event) => handleChange (event)}
          />
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="keluar">
      <Form.Label>Keluar</Form.Label>
        <Form.Control
        type="Date"
        placeholder='keluar'
        name="keluar"
        value={keluar}
        onChange={(event) => handleChange (event)}
          />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    

    </div>
  );
}

export default FormulirPinjam;