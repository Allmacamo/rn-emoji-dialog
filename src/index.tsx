import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { IEmoji } from './emojis';
import styles from './styles';
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
      const { emoji, title, message, visible } = this.props;
      return (
         <Fragment>
            <View style={[styles.container, { display: visible ? 'flex' : 'none' }]}>
               <View style={styles.containerContent}>
                  <View style={styles.emoji}></View>
                  <View style={styles.content}>
                     <Text style={styles.title}>{title}</Text>
                     <Text style={styles.message}>{message}</Text>
                  </View>
                  <View style={styles.buttons}>
                     <Text>asdasds</Text>
                  </View>
               </View>
            </View>
         </Fragment>
      );
   }
}

export default EmojiDialog;
