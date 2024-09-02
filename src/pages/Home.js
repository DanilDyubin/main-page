// Components
import Header from '../components/layout/header/Header';
import Promo from '../components/layout/promo/Promo';
import Tasks from '../components/layout/tasks/Tasks';
import Cases from '../components/layout/cases/Cases';
import Reviews from '../components/layout/reviews/Reviews';
import Numbers from '../components/layout/numbers/Numbers';
import Structure from '../components/layout/structure/Structure';
import Plan from '../components/layout/plan/Plan';
import Faq from '../components/layout/faq/Faq';
import Contacts from '../components/layout/contacts/Contacts';

// Data
import { dataNavbar } from '../data/dataNavbar';
import { dataButton } from '../data/dataButton';
import { dataPromo } from '../data/dataPromo';
import { dataTasks } from '../data/dataTasks';
import { dataCases } from '../data/dataCases';
import { dataReviews } from '../data/dataReviews';
import { dataNumbers } from '../data/dataNumbers';
import { dataStructure } from '../data/dataStructure';
import { dataPlan } from '../data/dataPlan';
import { dataFaq } from '../data/dataFaq';
import { dataContacts } from '../data/dataContacts';

const Home = () => {
  return (
    <>
      <Header dataNavbar={dataNavbar} dataButton={dataButton} />
      <Promo dataPromo={dataPromo} dataButton={dataButton} />
      <Tasks dataTasks={dataTasks} />
      <Cases dataCases={dataCases} dataButton={dataButton} />
      <Reviews dataReviews={dataReviews} />
      <Numbers dataNumbers={dataNumbers} />
      <Structure dataStructure={dataStructure} />
      <Plan dataPlan={dataPlan} dataButton={dataButton} />
      <Faq dataFaq={dataFaq} />
      <Contacts dataContacts={dataContacts} />
    </>
  );
};

export default Home;
