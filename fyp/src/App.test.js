import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Register from './components/register.jsx';
import AdminLogin from './components/adminLogin.jsx';
import {BrowserRouter, MemoryRouter } from 'react-router-dom';
import Login from './components/login';


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);
const alertMock = jest.spyOn(window, 'alert');
alertMock.mockImplementation(() => {});// Import MemoryRouter for testing

describe('Register Component', () => {
  test('allows user to fill the form and register successfully', async () => {
    // Mock useNavigate implementation
    const mockNavigate = jest.fn();
    const mockUseNavigate = jest.fn(() => mockNavigate);

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: mockUseNavigate,
    }));

    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    // Simulate form filling and submission
    // Your test code here
  });
  test('renders the registration form correctly', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Father Name')).toBeInTheDocument();
    expect(screen.getByLabelText('CNIC')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Current Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Permanent Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  test('displays validation errors on invalid form submission', async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Register'));

    await waitFor(() => {
      expect(screen.getByText('Name Should not be empty')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Fathername Should not be empty')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('cnic Should not be empty')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('current address Should not be empty')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Email Should not be empty')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('password Should not be empty')).toBeInTheDocument();
    });
    alertMock.mockRestore();
  });


  // Add more test cases for form submission, API calls, etc.
});


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
describe('AdminLogin component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  test('allows users to input password', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    );
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput.value).toBe('testpassword');
  });

  test('submits form with correct password', async () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    global.ethers = {
      Contract: jest.fn().mockImplementation(() => ({
        login: jest.fn().mockResolvedValue(false),
      })),
    };

    fireEvent.submit(screen.getByText('Login'));
   
  });

  test('handles invalid login attempt', async () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    global.ethers = {
      Contract: jest.fn().mockImplementation(() => ({
        login: jest.fn().mockResolvedValue(false),
      })),
    };

    fireEvent.submit(screen.getByText('Login'));
  });
});


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
describe('Login Component', () => {
  test('renders login form correctly', () => {
    const { getByLabelText, getByText } = render(<Login />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  });

  test('displays validation errors for invalid inputs', async () => {
    const { getByLabelText, getByText, findByText } = render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.click(loginButton); // Submit without filling in inputs

    expect(await screen.findByText('Email Should not be empty')).toBeInTheDocument();
    expect(await screen.findByText('password Should not be empty')).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.click(loginButton); // Submit with invalid inputs
  });

  test('logs in user with valid credentials', async () => {
    const mockContract = {
      loginUser: jest.fn().mockResolvedValue(true), // Mock loginUser to always return true
    };
    const mockSetUserAddress = jest.fn(); // Mock setUserAddress function

    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
  });

  test('displays error for invalid credentials', async () => {
    const mockContract = {
      loginUser: jest.fn().mockResolvedValue(false), // Mock loginUser to always return false
    };

    // Mock the navigate function returned by useNavigate
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    // Mock window.alert
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByLabelText, getByText, findByText } = render(<Login contract={mockContract} />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
    fireEvent.click(loginButton);

    expect(mockNavigate).not.toHaveBeenCalled(); // Ensure navigate function is not called
  });
});