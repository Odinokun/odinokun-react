import img_2020_09_24 from "../assets/img/articles/2020-09-24/top-img.jpg";
import img_2020_07_09 from "../assets/img/articles/2020-07-09/top-img.jpg";

const blogItems = [
  {
    src: img_2020_09_24,
    alt: "input before after",
    link: "/",
    title: "Почему псевдоэлементы ::before и ::after не работают для полей ввода и картинок",
    subtitle: "Попробуем разобраться почему псевдоэлементы ::before и ::after нельзя добавить к таким элементам как input, img, iframe и еще ряду элементов и в чем отличие этих элементов от остальных.",
    dateTime: '2020-09-24',
    author: 'Šime Vidas',
    badges: ['css', 'before', 'after', 'pseudo-elements']
  }, {
    src: img_2020_07_09,
    alt: "css properties",
    link: "/",
    title: "Необычные CSS-свойства",
    subtitle: "Вместе с Ahmad Shadeed, мы рассмотрим некоторые CSS-свойства, которые, я надеюсь, покажутся вам интересными. Для некоторых свойств посмотрим браузерную поддержку и применим подход прогрессивного улучшения, чтобы их можно было использовать, не боясь того, что свойство не поддерживается в браузере X.",
    dateTime: '2020-07-09',
    author: 'Ahmad Shadeed',
    badges: ['css', 'background', 'object-fit', 'grid', 'flexbox']
  },
]

export default blogItems;