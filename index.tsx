import * as React from 'react';
import { View, Text, Animated, Alert, TextStyle, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IButton, IEmoji } from './models';
import styles from './styles';

interface IEmojiDialogProps {
   type: 'primary' | 'secondary';
   emoji: IEmoji;
   title?: string;
   message?: string;
   size?: number;
   button?: IButton;
   visible: boolean;
   onBackgroundClick?(): void;
}

interface IEmojiDialogState {
   fadingValue: Animated.Value;
   visible: boolean;
}

class EmojiDialog extends React.Component<IEmojiDialogProps, IEmojiDialogState> {
   constructor(props: IEmojiDialogProps) {
      super(props);

      this.state = {
         fadingValue: new Animated.Value(0),
         visible: false,
      };
   }

   /***
    * TODO:
    * This function will be change with getDerivedStateFromProps
    * when React releases the new major version is 17.x.x
    */
   UNSAFE_componentWillReceiveProps(nextProps: IEmojiDialogProps) {
      if (nextProps.visible) {
         this.setState({ visible: true });
      }

      Animated.timing(this.state.fadingValue, {
         toValue: nextProps.visible ? 1 : 0,
         duration: 300,
      }).start(() =>
         this.setState({
            visible: nextProps.visible,
         }),
      );
   }

   private getButtons = () => {
      const buttonsContainer = this.props.type === 'primary' ? styles.primaryContainer : styles.secondaryContainer;
      const buttonStyle = this.props.type === 'primary' ? styles.primaryButton : [styles.secondaryButton];
      if (this.props.type === 'secondary') (buttonStyle as any).button = { color: this.props.emoji.colors[0], fontWeight: 'bold' } as TextStyle;

      return this.props.button ? (
         <View style={[styles.buttons, buttonsContainer]}>
            <TouchableWithoutFeedback onPress={this.props.button!.onClick}>
               <View style={[styles.button, buttonStyle]}>
                  <Text key={this.props.button!.id} style={(buttonStyle as any).button} onPress={this.props.button!.onClick}>
                     {this.props.button!.text}
                  </Text>
               </View>
            </TouchableWithoutFeedback>
         </View>
      ) : (
         undefined
      );
   };

   render() {
      const { type, emoji, title, message, size, button, visible, onBackgroundClick } = this.props;

      const emojiSize = size ? size : 65;
      const gradientStyle = button ? (type === 'primary' ? { paddingVertical: 15 } : { paddingBottom: 50 }) : { paddingBottom: 20 };

      return this.state.visible ? (
         <React.Fragment>
            <TouchableWithoutFeedback onPress={onBackgroundClick}>
               <Animated.View
                  style={[
                     {
                        opacity: this.state.fadingValue.interpolate({
                           inputRange: [0, 1],
                           outputRange: [0, 1],
                        }),
                        transform: [
                           {
                              scale: this.state.fadingValue.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [1, 1],
                              }),
                           },
                        ],
                     },
                     styles.container,
                  ]}
               >
                  <TouchableWithoutFeedback>
                     <View style={styles.containerContent}>
                        <View style={[styles.emoji, { top: (emojiSize / 2) * -1 }]}>
                           <React.Suspense fallback={<View />}>
                              <emoji.Component height={emojiSize} width={emojiSize} />
                           </React.Suspense>
                        </View>
                        <LinearGradient
                           start={{ x: 0.0, y: 1.0 }}
                           end={{ x: 1.0, y: 0.0 }}
                           colors={emoji.colors}
                           style={[styles.gradientBg, gradientStyle]}
                        >
                           <View style={[styles.content]}>
                              <Text style={styles.title}>{title}</Text>
                              <Text style={styles.message}>{message}</Text>
                           </View>

                           {type === 'primary' ? this.getButtons() : undefined}
                        </LinearGradient>

                        {type === 'secondary' ? this.getButtons() : undefined}
                     </View>
                  </TouchableWithoutFeedback>
               </Animated.View>
            </TouchableWithoutFeedback>
         </React.Fragment>
      ) : null;
   }
}

export default EmojiDialog;
