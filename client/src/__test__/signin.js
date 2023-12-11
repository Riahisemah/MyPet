import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '../Pages/Login';

describe('SignupForm', () => {
  it('should sign in successfully', async () => {
    // Initialisation des données
    const email = 'test@email.com';
    const password = '123456789';

    // Simule le changement de formulaire vers la connexion
    render(<SignupForm isLogin={true} />);

    // Remplissage des champs de connexion
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    // Simule la soumission du formulaire
    fireEvent.click(screen.getByText('Sign In'));

    // Attente de la réponse de l'API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Vérification du message de succès
    expect(await screen.findByText('Sign in successful')).toBeInTheDocument();

    // Envoi des données à l'API
    const response = await fetch('localhost:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Analyse de la réponse
    if (response.ok) {
      // Traitement en fonction du type d'action
      if (true) {
        const sessionToken = await response.json();
        alert('Sign in successful');
      } else {
        alert('Account created successfully');
      }
    } else {
      const errorText = await response.text();
      alert(errorText);
    }
  });
});
