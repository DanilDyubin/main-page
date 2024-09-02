import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../../UI/Slider';

const Reviews = ({ dataReviews }) => {
  return (
    <section className="reviews">
      <Container>
        <h2 className="reviews__title title-main">{dataReviews.title}</h2>
        <div className="reviews__slider">
          <Slider data={dataReviews.items} />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
