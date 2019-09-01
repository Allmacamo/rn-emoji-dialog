export interface IButton {
   id: number;
   text: string;
   onClick?(): void;
}

export interface IEmoji {
   name: string;
   Component: any;
   colors: Array<string | number>;
}
