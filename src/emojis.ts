import React from 'react';
import { IEmoji } from '../models';

const pouting = {
   name: 'pouting',
   colors: ['#f2709c', '#ff9472'],
   Component: React.lazy(() => import('../assets/svg/1f621.svg')),
} as IEmoji;

export { pouting };
