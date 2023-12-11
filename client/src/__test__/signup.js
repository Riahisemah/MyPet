import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '../Components/FormContainer/FormContainer';

describe('SignupForm', () => {
  it('should render the signup form', () => {
    render(<SignupForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should validate email field', () => {
    render(<SignupForm />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('should validate password field', () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    expect(screen.getByText('Password must be at least 8 characters long')).toBeInTheDocument();
  });

  it('should show error message on invalid signup', async () => {
    render(<SignupForm />);
    const submitButton = screen.getByText('Sign Up');
    fireEvent.click(submitButton);
    expect(await screen.findByText('Please fill all required fields')).toBeInTheDocument();
  });

  it('should create a new account', async () => {
    render(<SignupForm />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456789' } });
    fireEvent.click(screen.getByText('Sign Up'));

    // Attente de la réponse de l'API
    const response = await fetch('localhost:5000/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // eslint-disable-next-line no-undef
      body: JSON.stringify({ email, password }),
    });

    // Vérification de la réponse de l'API
    expect(response.ok).toBeTruthy();

    // Vérification de l'affichage du message de succès
    expect(await screen.findByText('Account created successfully')).toBeInTheDocument();
  });
});
