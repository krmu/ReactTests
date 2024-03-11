import React from "react";

class Kalkulators extends React.Component {
  constructor() {
    super();
    this.state = {
      darbiba: null,
      kluda: false,
      pirmais_skaitlis: 0,
      otrais_skaitlis: 0,
      drikst_darbibas: ["Saskaitīt", "Atņemt", "Reizināt", "Dalīt","Kāpināt"],
      iznakums: null
    };
  }
  rekinat = () => {
    let pirmais_skaitlis = parseInt(this.state.pirmais_skaitlis)
    let otrais_skaitlis = parseInt(this.state.otrais_skaitlis)
    
    switch (this.state.darbiba) {
        case "Saskaitīt":
            this.setState({ iznakums: pirmais_skaitlis + otrais_skaitlis });
            break;
        case "Atņemt":
            this.setState({ iznakums: pirmais_skaitlis - otrais_skaitlis });
            break;
        case "Reizināt":
            this.setState({ iznakums: pirmais_skaitlis * otrais_skaitlis });
            break;
        case "Dalīt":
            if(otrais_skaitlis == 0){
                this.setState({ iznakums: "Nedrīkst dalīt ar 0",kluda:true});
                return;
            }
            this.setState({ iznakums: pirmais_skaitlis / otrais_skaitlis });
            break;
        case "Kāpināt":
            this.setState({ iznakums: pirmais_skaitlis ** otrais_skaitlis });
            break;
        default:
            this.setState({ iznakums: "Jāizvēlas darbība",kluda:true });
    }
  };
  render() {
    const {kluda,darbiba, pirmais_skaitlis,otrais_skaitlis,drikst_darbibas,iznakums } = this.state;
    return [
      <div key="saturs">
        <small key="atrodas" className="text-muted">Atrodas: src/Kalkulators.jsx</small>
        <p key="apraksts">Šis ir kalkulators, kurš veic dažādas darbības ar diviem skaitļiem. Kalkulators ir izveidots, lai parādītu, kā darbojas Reacta stāvokļa pārvaldība.</p>
        <hr key="linija" />
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <span className="input-group-text" >1. skaitlis</span>
                    <input type="number" className={kluda ? 'form-control bg-danger text-white' :'form-control'} value={pirmais_skaitlis} onChange={e => this.setState({ pirmais_skaitlis: e.target.value })} />
                </div>
            </div>
            <div className="col">
                <div className="input-group">
                    <span className="input-group-text" >2. skaitlis</span>
                    <input type="number" className={kluda ? 'form-control bg-danger  text-white':'form-control'} value={otrais_skaitlis} onChange={e => this.setState({ otrais_skaitlis: e.target.value })} />
                </div>
            </div>
            <div className="col">
                <div className="input-group">
                    <span className="input-group-text" >Darbība</span>
                    <select className={kluda ? 'form-select bg-danger text-white' :'form-control'} onChange={e => this.setState({ darbiba: e.target.value })}>
                        <option value="">Darbība</option>
                        {drikst_darbibas.map((darbiba, index) => {
                            return <option key={index} value={darbiba}>{darbiba}</option>;
                        })}
                    </select>
                </div>
            </div>
            <div className="col h5 align-middle">
                <code>= {iznakums != null ? iznakums:<span>Nav aprēķināts</span>}</code>
            </div>
            <div className="col">
                <button className="btn btn-outline-success" onClick={this.rekinat}>Aprēķināt!</button>
            </div>
        </div>      
      </div>
    ];
  }
}
export default Kalkulators;
