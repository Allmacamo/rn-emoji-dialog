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
   emoji: {
      position: 'absolute',
      left: '5%',
      zIndex: 999,
   } as ViewStyle,
   gradientBg: {
      position: 'relative',
      borderRadius: borderRadius,
      paddingHorizontal: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
   } as ViewStyle,
   first: {
      paddingVertical: 40,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
   } as ViewStyle,
   second: {} as ViewStyle,
   third: {
      paddingVertical: 40,
   } as ViewStyle,
   fourth: {} as ViewStyle,
   content: {
      justifyContent: 'center',
   } as ViewStyle,
   title: {
      color: 'white',
      fontSize: 23,
   } as TextStyle,
   message: {
      color: 'rgba(255,255,255, .85)',
      fontSize: 14,
   } as TextStyle,
   buttons: {
      paddingHorizontal: '5%',
      paddingVertical: '5%',
      display: 'flex',
      alignItems: 'flex-end',
   } as ViewStyle,
   button: {
      fontSize: 16,
   } as TextStyle,
   firstButton: {} as TextStyle,
   secondButton: {} as TextStyle,
   thirdButton: {} as TextStyle,
   fourthButton: {} as TextStyle,
};
