import { Container, Row, Col } from 'react-bootstrap';
import Accordion from '../../UI/Accordion';

const Faq = ({ dataFaq }) => {
  return (
    <section className="faq" id="faq">
      <Container>
        <Row>
          <Col className="col-md-4 col-12">
            <h2 className="faq__title title-main">{dataFaq.title}</h2>
            <div className="faq__subtitle">
              <span className="faq__subtitle-strong">{dataFaq.strong}</span>
              {dataFaq.subtitle}
            </div>
          </Col>
          <Col className="offset-md-1">
            <Accordion data={dataFaq} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
