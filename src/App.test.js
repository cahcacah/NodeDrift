// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeDrift/i);
    expect(titleElement).toBeInTheDocument();
});
