<p align="center">
  <a href="https://github.com/bozd4g/react-native-emoji-dialog">
    <img alt="react-native-emoji-dialog" src="https://raw.githubusercontent.com/bozd4g/react-native-emoji-dialog/master/assets/github/logo.png" width="500" />
  </a>
</p>

<h1 align="center">
  react-native-emoji-dialog
</h1>

<p align="center">
  A different dialog approach for <a href="https://facebook.github.io/react-native/">React Native</a>
</p>

<p align="center">
  <a href="https://bozd4g.mit-license.org/"><img src="https://img.shields.io/badge/License-MIT-blue.svg" /></a>
  <a href="https://www.npmjs.com/package/react-native-emoji-dialog"><img src="https://img.shields.io/npm/v/react-native-emoji-dialog" /></a>
  <a href="https://www.npmjs.com/package/react-native-emoji-dialog"><img src="https://img.shields.io/npm/dt/react-native-emoji-dialog" /></a>
</p>

This package provides you a different approach when you display a dialog in your Android & iOS application. If you want to contribute this package,
please fork and [create](https://github.com/bozd4g/react-native-emoji-dialog/pulls) a pull request.

# Installation

```
$ npm install react-native-emoji-dialog
```

or

```
$ yarn add react-native-emoji-dialog
```

And add the **dependent** package and link this.

```
$ yarn add react-native-linear-gradient --dev
$ react-native link react-native-linear-gradient
```

## Android

<p align="center">
  <a href="https://github.com/bozd4g/react-native-emoji-dialog">
    <img alt="react-native-emoji-dialog" src="https://raw.githubusercontent.com/bozd4g/react-native-emoji-dialog/master/assets/github/android.png" width="300" />
    <img alt="react-native-emoji-dialog" src="https://raw.githubusercontent.com/bozd4g/react-native-emoji-dialog/master/assets/github/android2.png" width="300" />
  </a>
</p>

## iOS

Install BVLinearGradient for UIManager as below.

```
$ cd projectName/ios
$ pod install
```

<p align="center">
  <a href="https://github.com/bozd4g/react-native-emoji-dialog">
    <img alt="react-native-emoji-dialog" src="https://raw.githubusercontent.com/bozd4g/react-native-emoji-dialog/master/assets/github/ios.png" width="300" />
    <img alt="react-native-emoji-dialog" src="https://raw.githubusercontent.com/bozd4g/react-native-emoji-dialog/master/assets/github/ios2.png" width="300" />
  </a>
</p>

## Usage

```js
import EmojiDialog from 'react-native-emoji-dialog/';
import { pouting } from 'react-native-emoji-dialog/emojis';

<EmojiDialog
   type="primary"
   emoji={pouting}
   title="Title"
   message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
   button={{
      id: 0,
      text: 'okay!',
      onClick: () => Alert.alert('Button clicked!'),
   }}
   visible
/>;
```

Click **[here](/EmojiList.md)** to see the full emoji list.

## Props

| **Prop Name**     | **Value Type**       | **Description**                                                         |
| ----------------- | -------------------- | ----------------------------------------------------------------------- |
| type              | primary - secondary  | It declares type of dialog                                              |
| emoji             | [IEmoji](models.ts)  | An interface and it provides you variables of an emoji                  |
| message           | string               | It provides you give a message as content to dialog                     |
| size              | number               | Emoji's height and width                                                |
| button            | [IButton](models.ts) | An interface and it provides you variables of an your button            |
| visible           | boolean              | It provides when you make dialog able to visible                        |
| colors            | string[] - number[]  | You can give to the background of dialog your custom colors as gradient |
| onBackgroundClick | void                 | You can control when clicked to background                              |

## Development Dependencies

-  [twemoji](https://github.com/twitter/twemoji)
-  [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient)

# License

Copyright (c) 2019 Furkan Bozdag

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
