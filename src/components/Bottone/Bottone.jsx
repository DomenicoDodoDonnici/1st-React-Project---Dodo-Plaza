export default function Bottone({ children, onClick }) {
  return <button className="bottone" onClick={onClick}>{children}</button>;
}
