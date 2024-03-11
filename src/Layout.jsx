import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><i class="bi bi-filetype-jsx"></i> Muižnieka React Tests</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/"><i class="bi bi-house"></i> Sākums</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/skaititajs"><i class="bi bi-node-plus"></i> Skaitītāja pogu tests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/api/kaki"><i class="bi bi-image-fill"></i> Kaķu fakti API</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/api/kompanijas"><i class="bi bi-search"></i> Kompāniju meklētājs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kalkulators"><i class="bi bi-plus-slash-minus"></i> Kalkulators</a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container border p-4 m-4">

        <Outlet />
      </div>
      <div className="footer bg-light text-center p-3">
        Kristaps Muižnieks &copy; 2024<br />
        Ja Tu šo izmantosi, tad esmu priecīgs, bet lūdzu, atsauci mani kā autoru.<br />
        Šo darbina React
      </div>
    </>
  );
};

export default Layout;
