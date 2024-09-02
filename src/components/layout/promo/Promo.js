import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Button from '../../UI/Button';

const imageAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const btnAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const Promo = ({ dataPromo, dataButton }) => {
  const PromoIcon = ({ item }) => {
    return (
      <div className="promo__icon">
        <img src={item.icon} alt="img" className="promo__icon-img" />
        <div className="promo__icon-descr">{item.description}</div>
      </div>
    );
  };
  return (
    <section className="promo">
      <Container className="promo__container">
        <Row>
          <Col className="col-lg-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
              className="promo__img">
              <img src={dataPromo.image} alt="img" />
            </motion.div>
            <h1 className="promo__title">{dataPromo.title}</h1>
            <div className="promo__icons">
              {dataPromo.items.map((item, i) => {
                return <PromoIcon key={i} item={item} />;
              })}
            </div>
            <motion.div initial="hidden" animate="visible" variants={btnAnimation}>
              <Button title={dataButton.consultation} className="primary-big" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;
