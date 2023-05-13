import "./PageNotFound.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  const returnActivePage = () => navigate(-1);

  return (
    <div className="page__not-found">
      <div className="pafe__not_container">
      <p className="page__not_title">404</p>
      <h7 className="page__not_subtitle">Страница не найдена</h7>
      <Link className="page__not_back">
        <button className="page__not_button-back" onClick={returnActivePage}>
          Назад
        </button>
      </Link>
      </div>
    </div>
  );
}