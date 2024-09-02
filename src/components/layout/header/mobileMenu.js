import icon from '../../../assets/img/icons/icon-close.svg';

const MobileMenu = ({ children, active, setActive }) => {
  return (
    <div className={active ? 'mobile-menu active' : 'mobile-menu'}>
      <div className="mobile-menu__overlay"></div>
      <div className="mobile-menu__content">
        <div className="mobile-menu__close" onClick={() => setActive(false)}>
          <img src={icon} alt="close" />
        </div>
        <div className="mobile-menu__wrapper">{children}</div>
      </div>
    </div>
  );
};

export default MobileMenu;
