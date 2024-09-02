import img from '../assets/img/cases/img.png';
import img1 from '../assets/img/cases/item1/item1-img1.png';
import img2 from '../assets/img/cases/item1/item1-img2.png';
import img3 from '../assets/img/cases/item1/item1-img3.png';
import img4 from '../assets/img/cases/item1/item1-img4.png';
import img5 from '../assets/img/cases/item1/item1-img5.png';

export const dataCases = {
  title: 'Кейсы',
  image: img,
  name: 'Сергей Горелов',
  position: 'Сооснователь студии, CTO',
  text: 'В мире мало студий разработки мобильных приложений, у которых есть кейс Top 1 AppStore. Мы одна из них. Мы знаем чего ожидать от большого наплыва юзеров и знаем, как максимально эффективно распределить нагрузку в приложении, что критически важно для сохранения аудитории и роста прибыли',
  items: [
    {
      title: 'AB.Money',
      text: 'Курсы медитаций, задания на день по чек-листу, видеоуроки и прямые эфиры. Ежедневные аффирмации и случайные карты таро, новости-сторисы, нетворкинг и чат',
      images: [img1, img2, img3, img4, img5],
    },
    {
      title: 'My Cake',
      text: 'CRM система для кондитеров. В приложении можно создавать заказы, рассчитывать себестоимость и вести учет доходов. Также внутри приложения есть календарь выполнения заказов, список клиентов, список целей кондитера.',
      images: [img1, img2, img3, img4, img5],
    },
    {
      title: 'CakeSchool',
      text: 'Приложение онлайн курсов по кулинарии и выпечке. Возможность оплатить подписку или купить онлайн курсы, сдать домашние задания и получить обратную связь',
      images: [img1, img2, img3, img4, img5],
    },
  ],
};
