import { render, screen, fireEvent } from '@testing-library/react';
import Greeting from './Greeting';

describe('Testing the <Greeting/> component', () => {
    test('The component  must render with default message', async () => {
        await render(<Greeting />);
        const h1 = screen.getByTestId('msg');
        expect(h1).toHaveTextContent('Hello, world!');
    });

    test('The component must render with custom message', async () => {
        await render(<Greeting message='Welcome to React' />);
        expect(screen.getByTestId('msg')).toHaveTextContent('Welcome to React');
    });

    test('Clicking the button should change the text to uppercase', async () => {
        await render(<Greeting />);
        await fireEvent.click(screen.getByTestId('btnGreet'));
        expect(screen.getByTestId('msg')).toHaveTextContent('HELLO, WORLD!');
    });
});
