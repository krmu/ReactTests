import React from "react";

class ApiIelade extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: null,
      saturs: [],
      laadee: false,
    };
  }
  iegut_info = () => {
    fetch("https://random.dog/woof.json")
      .then(this.setState({ laadee: true }))
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            laadee: false,
            saturs: result,
          });
        },
        (error) => {
          this.setState({
            laadee: false,
            error,
          });
        },
      );
  };
  render() {
    // Šis iegūst info dinamiski no konstruktora. Iepriekš iestata vērtības, tad izmanto
    const { errors, laadee, saturs } = this.state;
    return [
      <div key="saturs">
        <small key="atrodas" className="text-muted">Atrodas: src/ApiIelade.jsx</small>
        <p key="apraksts">Šis ielādē random kaķu bildes no interneta. Ir pievienots klāt lādēšanas statuss.</p>
        <code key="avots">Avots datiem ir: https://random.dog/woof.json</code>
        <hr key="linija" />
        <h1 key="virsraksts">Kaķu bilžu API piemērs</h1>
        <button className="btn btn-outline-info" type="button" onClick={this.iegut_info}>
          Ielādēt informāciju no API
        </button><br />
        {errors ? "Kļūda" + errors : ""}
        {laadee == true ? <div className="spinner-border m-4" role="status"><span className="visually-hidden">Loading...</span></div> : ""}
        {saturs.url != null ? (
          <img src={saturs.url} className="img-thumbnail m-4" />
        ) : null}
      </div>,
    ];
  }
}
export default ApiIelade;
