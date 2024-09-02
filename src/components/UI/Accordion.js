import { useState } from 'react';

const Accordion = ({ data }) => {
  const [openId, setOpenId] = useState(null);

  const openHandler = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <ul className="accordion">
      {data.accordion.map((item, id) => {
        return (
          <li className="accordion__item" key={id}>
            <button className="accordion__title" onClick={() => openHandler(id)}>
              {item.title}
              <span className={id === openId ? 'accordion__icon active' : 'accordion__icon'}>
                {item.icon}
              </span>
            </button>
            <div className={id === openId ? 'accordion__collapse open' : 'accordion__collapse'}>
              <div className="accordion__text">{item.text}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
