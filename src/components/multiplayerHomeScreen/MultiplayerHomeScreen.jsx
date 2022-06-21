import multiplayerScreenStyles from "./MultiplayerHomeScreen.module.css";

export default function MultiplayerHomeScreen() {
  return (
    <main className="--verticle-flex --centered-flex">
      <div className={multiplayerScreenStyles["section-container"]}>
        <section className={multiplayerScreenStyles["section"]}>
          <div className={multiplayerScreenStyles["user-info"]}>
            <p>Logged in as</p>
            <p className="--bold-600">anuraagvr555@gmail.com</p>
          </div>
          <div className={multiplayerScreenStyles["button-container"]}>
            <button className="btn --primary-btn --has-hover-overlay">
              Dashboard
            </button>
            <button className="btn --primary-btn --has-hover-overlay">
              Logout
            </button>
          </div>
        </section>
        <section className={multiplayerScreenStyles["section"]}>
          <div>
            <input placeholder="Guest" className="input" />
          </div>
          <div className={multiplayerScreenStyles["button-container"]}>
            <button className="btn --primary-btn --has-hover-overlay">
              Join a room
            </button>
            <button className="btn --primary-btn --has-hover-overlay">
              Create a room
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
