import multiplayerAuthStyles from "./MultiplayerHomepageAuth.module.css";

export default function MultiplayerHomepageAuth() {
  return (
    <main className="--verticle-flex --centered-flex">
      <section>
        <p className={multiplayerAuthStyles["heading"]}>
          You need to sign in to continue.
        </p>
      </section>
      <section className="--verticle-flex --has-gap">
        <div className={multiplayerAuthStyles["containers-with-gap"]}>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
        </div>
        <div className={multiplayerAuthStyles["containers-with-gap"]}>
          <button className="btn --primary-btn --has-hover-overlay">
            Login
          </button>
          <button className="btn --primary-btn --has-hover-overlay">
            Signup
          </button>
        </div>
      </section>
    </main>
  );
}
