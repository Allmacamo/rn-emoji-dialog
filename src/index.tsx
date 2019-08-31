import * as React from 'react';
import { View, Text, Animated, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IButton, IEmoji } from '../models';
import styles from './styles';

interface IEmojiDialogProps {
   type: 'primary' | 'secondary';
   emoji: IEmoji;
   title?: string;
   message?: string;
   size?: number;
   buttons?: IButton[];
   visible: boolean;
}

interface IEmojiDialogState {}

class EmojiDialog extends React.Component<IEmojiDialogProps, IEmojiDialogState> {
   constructor(props: IEmojiDialogProps) {
      super(props);
   }

   getButtons = () => {
      return this.props.buttons ? (
         <View style={styles.buttons}>
            {this.props.buttons.map((button: IButton) => (
               <Text key={button.id} style={[styles.button]} onPress={button.onClick!}>
                  {button.text}
               </Text>
            ))}
         </View>
      ) : (
         undefined
      );
   };

   render() {
      const { type, emoji, title, message, size, visible } = this.props;
      const emojiSize = size ? size : 65;

      return (
         <React.Fragment>
            <Animated.View style={{}}>
               <View style={[styles.container, { display: visible ? 'flex' : 'none' }]}>
                  <View style={styles.containerContent}>
                     <View style={[styles.emoji, { top: (emojiSize / 2) * -1 }]}>
                        <React.Suspense fallback={<View />}>
                           <emoji.Component height={emojiSize} width={emojiSize} />
                        </React.Suspense>
                     </View>
                     <LinearGradient start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 0.0 }} colors={emoji.colors} style={[styles.gradientBg]}>
                        <View style={[styles.content]}>
                           <Text style={styles.title}>{title}</Text>
                           <Text style={styles.message}>{message}</Text>
                        </View>
                     </LinearGradient>
                  </View>
               </View>
            </Animated.View>
         </React.Fragment>
      );
   }
}

export default EmojiDialog;
