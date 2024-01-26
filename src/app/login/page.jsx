import Image from "next/image";
import "../../css/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-card">
        <Image src="/assets/logo.svg" width={200} height={200} alt="logo" />
        <p className="titre">Panel Admin</p>
        <h2>Connectez-vous à votre panel admin</h2>
        <form>
          <div className="form-control">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Adresse email"
            />
          </div>
          <div className="form-control">
            <div className="labels">
              <label htmlFor="password">Mot de passe</label>
              <label htmlFor="password">Mot de passe oublié?</label>
            </div>
            <input
              type="password"
              id="password"
              required
              placeholder="Mot de passe"
            />
          </div>
          <button className="login-btn" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
