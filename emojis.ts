import { IEmoji } from './models';

const pouting = {
   name: 'pouting',
   colors: ['#f2709c', '#ff9472'],
   content: require('./assets/png/1f621.png'),
} as IEmoji;

const grinning = {
   name: 'pouting',
   colors: ['#00c6ff', '#0072ff'],
   content: require('./assets/png/1f600.png'),
} as IEmoji;

export { pouting, grinning };
