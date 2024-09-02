import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Button from '../../UI/Button';

const itemAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.8 + 0.8 }, // чтобы items появлялись по очереди с небольшой задержкой
  }),
};

const Plan = ({ dataPlan, dataButton }) => {
  const PlanItem = ({ item, i }) => {
    return (
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={itemAnimation}
        сustom={i}
        viewport={{ amount: 0.3, once: true }} // анимация появляется чуть позже, чтобы дать пользователю возможность увидеть этот элемент
        className="plan__list-item">
        <div className="plan__list-item--img">
          <img src={item.icon} alt="#" />
        </div>
        <div className="plan__list-item--descr">{item.description}</div>
      </motion.li>
    );
  };

  return (
    <section className="plan">
      <Container>
        <Row>
          <Col className="col-md-7 col-5">
            <h2 className="plan__title">{dataPlan.title}</h2>
            <Button title={dataButton.plan} className="primary-medium" />
          </Col>
          <Col className="offset-md-1 offset-lg-0">
            <ul className="plan__list">
              {dataPlan.items.map((item, i) => {
                return <PlanItem item={item} key={i} />;
              })}
            </ul>
          </Col>
          <Col className="d-block d-sm-none">
            <Button title={dataButton.plan} className="primary-medium--mobile" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Plan;
