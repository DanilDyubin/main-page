import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const imageAnimation = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Contacts = ({ dataContacts }) => {
  const ContactsItem = ({ item }) => {
    return (
      <div className="contacts__item">
        <h3 className="contacts__item-title">{item.title}</h3>
        <div className="contacts__item-subtitle">{item.subtitle}</div>
        <a href="" className="contacts__item-link">
          {item.link}
        </a>
      </div>
    );
  };
  return (
    <footer className="contacts" id="contacts">
      <Container>
        <Row>
          <h2 className="contacts__title title-main">Контакты</h2>
        </Row>
        <Row>
          <div className="contacts__container">
            <div className="contacts__left">
              {dataContacts.items.map((item, i) => {
                return <ContactsItem item={item} key={i} />;
              })}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
              viewport={{ amount: 0.3, once: true }}
              className="contacts__right">
              <div className="contacts__right-img">
                <img src={dataContacts.image} alt="" />
              </div>
              <div className="contacts__right-text">{dataContacts.text}</div>
            </motion.div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Contacts;
