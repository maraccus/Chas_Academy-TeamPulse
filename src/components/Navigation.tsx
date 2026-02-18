import styles from "./Navigation.module.css"
type View = 'checkin' | 'dashboard' | 'history';

interface NavigationProps {
  activeView: View;
  onChange(view: View): void;
}

export function Navigation({ activeView, onChange }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <button
        type="button"
        className={`${styles.btn} ${activeView === "checkin" ? "active" : ""}`}
        onClick={() => onChange('checkin')}
      >
        Check-in
      </button>
      <button
        type="button"
        className={`${styles.btn}${activeView === 'dashboard' ? 'active' : ''}`}
        onClick={() => onChange('dashboard')}
      >
        Dashboard
      </button>
      <button
        type="button"
        className={`${styles.btn}${activeView === 'history' ? 'active' : ''}`}
        onClick={() => onChange('history')}
      >
        Historik
      </button>
    </nav>
  );
}