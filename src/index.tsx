import * as React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IEmoji } from './emojis';
import styles from './styles';

interface IEmojiDialogProps {
   emoji: IEmoji;
   title?: string;
   message?: string;
   size: number;
   visible: boolean;
}

class EmojiDialog extends React.Component<IEmojiDialogProps> {
   constructor(props: IEmojiDialogProps) {
      super(props);
   }

   render() {
      const { emoji, title, message, size, visible } = this.props;
      return (
         <React.Fragment>
            <View style={[styles.container, { display: visible ? 'flex' : 'none' }]}>
               <View style={styles.containerContent}>
                  <LinearGradient start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#f2709c', '#ff9472']} style={[styles.gradientBg]}>
                     <View style={styles.emoji}>
                        <React.Suspense fallback={<View />}>
                           <emoji.Component height={size} width={size} />
                        </React.Suspense>
                     </View>
                     <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.message}>{message}</Text>
                     </View>
                  </LinearGradient>
                  <View style={styles.buttons}>
                     <Text>asdasds</Text>
                  </View>
               </View>
            </View>
         </React.Fragment>
      );
   }
}

export default EmojiDialog;
