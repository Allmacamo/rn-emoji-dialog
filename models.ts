export interface IButton {
   id: number;
   text: string;
   onClick?(): void;
}

export interface IEmoji {
   name: string;
   content: any;
   colors: Array<string | number>;
}
