import "./PageNotFound.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  const returnActivePage = () => navigate(-1);

  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
      <p className="page-not-found__title">404</p>
      <h7 className="page-not-found__subtitle">Страница не найдена</h7>
      <Link className="page-not-found__back">
        <button className="page-not-found__button-back" onClick={returnActivePage}>
          Назад
        </button>
      </Link>
      </div>
    </div>
  );
}