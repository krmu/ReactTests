import React from "react";

class ApiKompanijas extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: null,
      saturs: [],
      laadee: false,
      nosaukums: null
    };
  }
  iegut_info = () => {
    if (this.state.nosaukums == null) return this.setState({errors:"Nav ievadīts nosaukums"})
    fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query="+this.state.nosaukums)
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
            errors: "Nesanāca API izsaukums, kļūda no API:" + error,
          });
        },
      );
  };
  render() {
    const { errors, laadee, saturs } = this.state;
    return [
      <div key="saturs">
        <small key="atrodas" className="text-muted">Atrodas: src/ApiLogo.jsx</small>
        <p key="apraksts">Šis ielādē kompānijas logotipus no Clearbit API. Ievadot nosaukumu, tiek atgriezts saraksts ar kompānijām, kuras atbilst nosaukumam.</p>
        <code key="avots">Avots datiem ir:  https://autocomplete.clearbit.com/v1/companies/suggest?query=</code>
        <hr key="linija" />
        <h1 key="virsraksts">Kompāniju meklētājs</h1>
        {errors != null ? (<div className="alert alert-danger">{errors}</div>):""}
        <div className="mb-3">
          <label className="form-label">Kompānijas nosaukums</label>
          <input type="text" className="form-control" onChange={e => this.setState({ nosaukums: e.target.value })} />
        </div>
        <button className="btn btn-outline-success" onClick={this.iegut_info}>Meklēt</button>
        <hr />
        {laadee ? (<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>):""}
        <div className="row"> 
          {saturs.map((data) => 
            <div className="col text-center" key={data.name}>
              <div className="fw-bold">{data.name}</div>
              <img src={data.logo} /><br />
              <a href={"https://"+data.domain} target="_blank">{data.domain}</a>
            </div>
          )}
        </div>


         
      </div>
    ];
  }
}
export default ApiKompanijas;
