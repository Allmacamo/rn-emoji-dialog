import { ViewStyle, Dimensions, TextStyle } from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;
const borderRadius = 30;

export default {
   container: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: deviceHeight,
      width: deviceWidth,
      backgroundColor: 'rgba(0,0,0,.2)',
      zIndex: 999,
   } as ViewStyle,
   containerContent: {
      position: 'relative',
      minHeight: 100,
      width: '75%',
      backgroundColor: 'white',
      borderRadius: borderRadius,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2.27,
      elevation: 20,
   } as ViewStyle,
   gradientBg: {
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      paddingHorizontal: '5%',
      paddingVertical: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
   } as ViewStyle,
   emoji: {} as ViewStyle,
   content: {
      justifyContent: 'center',
   } as ViewStyle,
   title: {
      color: 'white',
      fontSize: 23,
   } as TextStyle,
   message: {
      color: 'rgba(255,255,255, .85)',
      fontSize: 16,
   } as TextStyle,
   buttons: {
      paddingVertical: '5%',
      paddingHorizontal: '5%',
   } as ViewStyle,
};
