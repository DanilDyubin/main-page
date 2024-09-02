import { Container, Row, Col } from 'react-bootstrap';

const Tasks = ({ dataTasks }) => {
  const TasksItem = ({ item }) => {
    return (
      <div className="tasks__item">
        <div className="tasks__item-wrapper">
          <h3 className="tasks__item-title">{item.title}</h3>
          <div className="tasks__item-descr">{item.description}</div>
        </div>
        <img src={item.image} alt="img" className="tasks__item-img" />
      </div>
    );
  };

  return (
    <section className="tasks">
      <Container>
        <Row>
          <Col>
            <h2 className="tasks__title title-main">{dataTasks.title}</h2>
          </Col>
        </Row>
        <Row className="gy-4">
          {dataTasks.items.map((item, i) => {
            return (
              <Col className="col-md-6" key={i}>
                <TasksItem item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Tasks;
