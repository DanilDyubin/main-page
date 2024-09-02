import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const imageAnimation = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Structure = ({ dataStructure }) => {
  const StructureItem = ({ item, index }) => {
    return (
      <div className={index % 2 === 1 ? 'structure__item reverse' : 'structure__item'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
          viewport={{ amount: 0.3, once: true }}
          className="structure__item-img">
          <img src={item.image} alt="image" />
        </motion.div>
        <div className="structure__item-wrapper">
          <h3 className="structure__item-title">{item.title}</h3>
          <ul className="structure__item-list">
            {item.list.map((li, i) => {
              return (
                <li className="structure__item-list--li" key={i}>
                  {li}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <section className="structure">
      <Container>
        <Row>
          <Col>
            <h2 className="structure__title title-main">{dataStructure.title}</h2>
          </Col>
        </Row>
        <Row className="gy-5">
          {dataStructure.items.map((item, i) => {
            return (
              <Col key={i} className="col-12">
                <StructureItem item={item} index={i} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Structure;
