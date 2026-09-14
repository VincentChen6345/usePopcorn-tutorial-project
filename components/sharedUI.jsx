export function Loader() {
  return <p className="loader">Loading...</p>;
}

export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🛑</span> {message}
    </p>
  );
}

export function Main({ children }) {
  return <main className="main">{children}</main>;
}
