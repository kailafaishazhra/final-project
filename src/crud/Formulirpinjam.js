import { Col, Row , Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Formulir = ({nama, buku, masuk, keluar, handleChange, handleSubmit, handleDateChange, id}) => {
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

      <Form.Group className="mb-4" controlId="nama">
        <Form.Label>Buku</Form.Label>
        <Form.Control type="textarea" 
        name="buku"
        value={buku}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="deskripsi">
        <Form.Label>Masuk</Form.Label>
        <DatePicker
        name="masuk"
        value={masuk}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"/>
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="harga">
      <Form.Label>Keluar</Form.Label>
        <DatePicker
        name="keluar"
        value={keluar}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"/>
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

export default Formulir;