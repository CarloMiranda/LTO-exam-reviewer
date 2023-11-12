import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="bg-img">
      <div className="container">
        <div className="home">
          <h1 className="text-center text-danger fw-bolder">LTO Exam Reviewer</h1>
          <ul>
            <li className="d-grid fw-bold fs-2 border py-2 my-3 text-center rounded bg-success">
              <Link to="/english" className="text-white text-decoration-none">
                English
              </Link>
            </li>
            <li className="d-grid fw-bold fs-2 border py-2 my-3 text-center rounded bg-success">
              <Link to="/tagalog" className="text-white text-decoration-none">
                Tagalog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
