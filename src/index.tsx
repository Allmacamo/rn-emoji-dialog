import React from 'react';
import { View, Text } from 'react-native';
import { IEmoji } from './emojis';

interface IEmojiDialogProps {
   emoji: IEmoji;
   title?: string;
   message?: string;
   visible: boolean;
}
class EmojiDialog extends React.Component<IEmojiDialogProps> {
   constructor(props: IEmojiDialogProps) {
      super(props);
   }

   render() {
      return (
         <View>
            <Text>Hello World</Text>
         </View>
      );
   }
}

export default EmojiDialog;
