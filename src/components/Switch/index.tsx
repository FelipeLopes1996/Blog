import * as Styled from './styles';
import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../context/changeThema';

export const Switch = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'inverted' : 'default');
  };
  return (
    <Styled.Wrapper>
      <label className="switch">
        Toggle light and dark modes
        <input type="checkbox" onChange={handleChange} checked={checked} />
        <span className="slider round"></span>
      </label>
    </Styled.Wrapper>
  );
};
