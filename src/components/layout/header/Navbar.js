import { useState } from 'react';

const Navbar = ({ dataNavbar }) => {
  const [activeLink, setActiveLink] = useState('');

  const scrollToSection = (id) => {
    setActiveLink(id);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          {dataNavbar.map((item, i) => (
            <li key={i} className="navbar__menu-item">
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.link);
                }}
                className={
                  activeLink === item.link ? 'navbar__menu-link active' : 'navbar__menu-link'
                }>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
