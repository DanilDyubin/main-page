import { Container, Row, Col } from 'react-bootstrap';

const Numbers = ({ dataNumbers }) => {
  const NumbersItem = ({ item }) => {
    return (
      <div className="numbers__item">
        <img src={item.icon} alt="img" className="numbers__item-img" />
        <h3 className="numbers__item-title">{item.title}</h3>
        <div className="numbers__item-descr">{item.description}</div>
      </div>
    );
  };

  return (
    <section className="numbers" id="advantages">
      <Container>
        <Row>
          <Col>
            <h2 className="numbers__title title-main">{dataNumbers.title}</h2>
          </Col>
        </Row>
        <Row className="gy-5">
          {dataNumbers.items.map((item, i) => {
            return (
              <Col className="col-md-4 " key={i}>
                <NumbersItem item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Numbers;
