import React from "react";
// import Navbar from "./Navbar";
import TabelPinjam from "./TabelPinjam";
import FormulirPinjam from "./FormulirPinjam";


export default class Crud2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bukus: [],
      nama: "",
      buku: "",
      masuk: "",
      keluar: "",
      id: "",
    };
  }

 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            buku: this.state.buku,
            masuk: this.state.masuk,
            keluar: this.state.keluar,
          },
        ],
      });
    } else {
      const bukuYangSelainDipilih = this.state.bukus
        .filter((buku) => buku.id === this.state.id)
        .map((filterBuku) => {
          return filterBuku;
        });

      this.setState({
        bukus: [
          ...bukuYangSelainDipilih,
          {
            id: this.state.bukus.Length + 1,
            nama: this.state.nama,
            buku: this.state.buku,
            masuk: this.state.masuk,
            keluar: this.state.keluar,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      buku: "",
      masuk: "",
      keluar: "",
      id: "",
    });
  };

  editData = (id) => {
    const bukuYangDipilih = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      nama: bukuYangDipilih[0].nama,
      buku: bukuYangDipilih[0].buku,
      masuk: bukuYangDipilih[0].masuk,
      keluar: bukuYangDipilih[0].keluar,
      id: bukuYangDipilih[0].id,
    });
  };

  hapusData = (id) => {
    console.log(id);
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      bukus: bukuBaru
    });
  };

  render() {
    return (
      <div>
        
        <div className="container mt-4">
          <TabelPinjam bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
          <FormulirPinjam
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
