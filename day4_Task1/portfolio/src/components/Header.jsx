// import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Chanchala</div>
      <nav>
        <ul className="navList">
          <li><a href="#about" className="navLink">About</a></li>
          <li><a href="#education" className="navLink">Education</a></li>
          <li><a href="#projects" className="navLink">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
