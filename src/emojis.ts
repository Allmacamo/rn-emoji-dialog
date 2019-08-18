import React from 'react';
interface IEmoji {
   name: string;
   Component: any;
}
const pouting = { name: 'pouting', Component: React.lazy(() => import(newFunction())) } as IEmoji;

export { IEmoji, pouting };
function newFunction(): any {
   return '../assets/svg/1f621.svg';
}
