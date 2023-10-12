import { v1 } from 'uuid';
import { IWork } from '@typings/types.ts';

export const WORKS: IWork[] = [
  {
    id: v1(),
    link: '/',
    imgSrc: 'public/works/flowerland.jpg',
    title: 'Floral & Event Design Studio',
    date: '2019',
    linkTitle: 'lorem.com',
    tags: ['Pug', 'Scss', 'JS/Jquery'],
  },
  {
    id: v1(),
    link: '/',
    imgSrc: 'public/works/rabbit.jpg',
    title: 'White Rabbit ',
    date: '2019',
    linkTitle: 'lorem.com',
    tags: ['Pug', 'Scss', 'JS/Jquery'],
  },
  {
    id: v1(),
    link: '/',
    imgSrc: 'public/works/notary.jpg',
    title: 'Privat Notary Office',
    date: '2018',
    linkTitle: 'lorem.com',
    tags: ['Design', 'Pug', 'Scss', 'JS/Jquery'],
  },
  {
    id: v1(),
    link: 'https://4deluxe-whirlpool.de/',
    imgSrc: 'public/works/whirlpool.jpg',
    title: '4Deluxe - Whirlpools shop',
    date: '2018',
    linkTitle: '4deluxe-whirlpool.de',
    tags: ['Pug', 'Scss', 'JS/Jquery'],
  },
];