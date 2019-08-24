import React from 'react';
interface IEmoji {
   name: string;
   Component: any;
}
const pouting = { name: 'pouting', Component: React.lazy(() => import('../assets/svg/1f621.svg')) } as IEmoji;

export { IEmoji, pouting };
