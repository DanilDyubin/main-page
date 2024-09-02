import logo from '../../assets/img/logo/LogoS.png';

const Logo = () => {
  return (
    <a href="#" className="logo__link">
      <img src={logo} alt="logo" className="logo__img" style={{ height: '22px' }} />
    </a>
  );
};

export default Logo;
