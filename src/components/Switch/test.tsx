import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Switch } from '.';
import { theme } from '../../styles/theme';

describe('<Switch />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('should render input without theme', () => {
    renderTheme(<Switch />);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('should render input with default theme', () => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'default' }),
    );
  });

  it('should render input checked with inverted theme', () => {
    renderTheme(<Switch />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should render input and switch between theme when switching input', () => {
    const { container } = renderTheme(<Switch />);

    const label = screen.getByLabelText('Toggle light and dark modes');
    const input = screen.getByRole('checkbox');

    fireEvent.click(label);
    expect(input).not.toBeChecked();

    fireEvent.click(label);
    expect(input).toBeChecked();
    expect(container).toMatchSnapshot();
  });
});