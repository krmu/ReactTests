import React from "react";

class Sakumlapa extends React.Component {
  render() {
    return [
      <div className="text-center">
        <h1>K. Muižnieka tests uz Reacta</h1>
        <h3>Šis ir sākumlapas komponents</h3>
        <hr />
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card">
              <img src="https://github.com/krmu/ReactTests/blob/main/mediji/reactlogo.png" className="card-img-top p-2" />
              <div className="card-body">
                <h5 className="card-title">React</h5>
            </div>
          </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card">
              <img src="./mediji/vitelogo.png" className="card-img-top p-2" />
              <div className="card-body">
                <h5 className="card-title">Vite</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card">
              <img src="./mediji/typescript.png" className="card-img-top p-2" />
              <div className="card-body">
                <h5 className="card-title">TypeScript</h5>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    ];
  }
}
export default Sakumlapa;
