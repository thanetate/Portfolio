import { atom } from 'jotai';

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme : 'dark';
    }
    return 'dark';
  };
  
  const themeAtom = atom(getInitialTheme());
  
  export default themeAtom;