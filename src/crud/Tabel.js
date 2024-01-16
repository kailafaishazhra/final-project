import Table from 'react-bootstrap/Table';
import React from 'react';
import Table from 'react-bootstrap/Table';

const Tabel = ({bukus, editData, hapusData}) => {


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Buku</th>
          <th>Keluar</th>
          <th>Masuk</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
      { bukus.map((buku, index) => {
            return(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{buku.nama}</td>
          <td>{buku.buku}</td>
          <td>{buku.keluar}</td>
          <td>{buku.masuk}</td>
          <td>
            <button className="btn btn-warning mr-1" onClick={() => editData(buku.id) }>Edit</button>
            <button className="btn btn-danger mr-1" onClick={() => hapusData(buku.id) }>Hapus</button>
          </td>
        </tr>
            );
        })}
      </tbody>
    </Table>
  );
}

export default Tabel;
