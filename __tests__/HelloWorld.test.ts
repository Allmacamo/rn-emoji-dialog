import { HelloWorld } from '../src/index';

test('My Greeter', () => {
   expect(HelloWorld('World')).toBe('Hello World');
});
