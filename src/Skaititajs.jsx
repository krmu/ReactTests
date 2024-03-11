import React from "react";

class Skaititajs extends React.Component {
  constructor() {
    super();
    this.state = {
      vertiba: -1,
    };
  }
  pielikt = () => {
    this.setState({ vertiba: this.state.vertiba + 1 });
  };
  nonemt = () => {
    this.setState({ vertiba: this.state.vertiba - 1 });
  };
  render() {
    return [
      <div key="skaitajs">
        <small key="atrodas" className="text-muted">Atrodas: src/Skaititajs.jsx</small>
        <p key="apraksts">Šis ir skaitītājs, kurš pievieno un atņem vienu skaitli. Skaitītājs ir izveidots, lai parādītu, kā darbojas Reacta stāvokļa pārvaldība.</p>
        <hr key="linija" />
        <div className="text-center">
          <h1 key="virsraksts">Skaitītāja piemērs</h1>
          <p className="h4">Skaitītāja vērtība: {this.state.vertiba < 0 ?
          (
          <span className="badge bg-danger"> {this.state.vertiba}</span> ) : 
          (
          <span className="badge bg-success"> {this.state.vertiba}</span>
          )}
          </p> 
          <button type="button" className="btn btn-success" onClick={this.pielikt} >
            +1
          </button>
          <button type="button" className="btn btn-danger" onClick={this.nonemt}>
            -1
          </button>
        </div>
      </div>,
    ];
  }
}
export default Skaititajs;
