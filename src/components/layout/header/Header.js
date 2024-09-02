import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../../../components/UI/Logo';
import Navbar from './Navbar';
import Button from '../../UI/Button';
import BurgerButton from '../../UI/BurgerButton';
import MobileMenu from './mobileMenu';
import LanguageToggle from '../../UI/languageToggle';

const Header = ({ dataNavbar, dataButton }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // делаем меню fixed и добавляем к нему стили
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    // убираем scroll в mobilemenu
    if (menuActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuActive]);

  return (
    <>
      <header className={scrolled ? 'header scrolled' : 'header'}>
        <Container>
          <div className="header__container">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__wrapper">
              <div className="header__navbar">
                <Navbar dataNavbar={dataNavbar} />
              </div>
              <div className="header__button">
                <Button title={dataButton.consultation} className="primary" />
              </div>
              <div className="header__language">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <div className="burger-container">
        <BurgerButton onClick={() => setMenuActive(true)} />
      </div>

      <MobileMenu active={menuActive} setActive={setMenuActive}>
        <div>
          <Logo />
          <Navbar dataNavbar={dataNavbar} />
        </div>
        <div>
          <Button title="Консультация" className="menu" />
          <LanguageToggle />
        </div>
      </MobileMenu>
    </>
  );
};

export default Header;
