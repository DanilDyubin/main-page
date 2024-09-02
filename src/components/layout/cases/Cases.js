import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../UI/Button';

const Cases = ({ dataCases, dataButton }) => {
  const CasesItem = ({ item, index }) => {
    return (
      <div className="cases__item">
        <div
          className={index % 2 === 1 ? 'cases__item-container reverse' : 'cases__item-container'}>
          <div className="cases__item-wrapper">
            <h3 className="cases__item-title">{item.title}</h3>
            <div className="cases__item-descr">{item.text}</div>
            <Button title={dataButton.casesItem} className="transparent" />
          </div>
          <img
            src={item.images[0]}
            alt=""
            className={index % 2 === 1 ? 'cases__item-img--1 left' : 'cases__item-img--1'}
          />
          <div className="cases__item-imgs">
            <img src={item.images[1]} alt="" className="cases__item-img--2" />
            <img src={item.images[2]} alt="" className="cases__item-img--3" />
            <img src={item.images[3]} alt="" className="cases__item-img--4" />
            <img src={item.images[4]} alt="" className="cases__item-img--5" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="cases" id="cases">
      <Container>
        <Row>
          <Col>
            <h2 className="cases__title title-main">{dataCases.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cases__founder">
              <img src={dataCases.image} alt="photo" className="cases__founder-img" />
              <div className="cases__founder-wrapper">
                <div className="cases__founder-name">{dataCases.name}</div>
                <div className="cases__founder-position">{dataCases.position}</div>
                <p className="cases__founder-text">{dataCases.text}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gy-5">
          {dataCases.items.map((item, i) => {
            return (
              <Col key={i} className="col-12 ">
                <CasesItem item={item} index={i} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Cases;
