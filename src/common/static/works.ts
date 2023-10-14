import { v1 } from 'uuid';
import { IWork } from '@typings/types.ts';

export const WORKS: IWork[] = [
  {
    id: v1(),
    link: 'http://flowerland.odinokun.com/',
    imgSrc: 'public/works/flowerland.jpg',
    title: 'Floral & Event Design Studio',
    date: '2019',
    linkTitle: 'flowerland.odinokun.com',
    tags: ['Pug', 'Scss', 'JS/Jquery'],
  },
  {
    id: v1(),
    link: 'http://rabbit.odinokun.com/',
    imgSrc: 'public/works/rabbit.jpg',
    title: 'White Rabbit ',
    date: '2019',
    linkTitle: 'rabbit.odinokun.com',
    tags: ['Pug', 'Scss', 'JS/Jquery'],
  },
  {
    id: v1(),
    link: 'http://notary.odinokun.com/',
    imgSrc: 'public/works/notary.jpg',
    title: 'Privat Notary - personal website',
    date: '2018',
    linkTitle: 'notary.odinokun.com',
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