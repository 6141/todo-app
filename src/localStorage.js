export const saveToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };
  
  export const loadFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading from local storage:', error);
      return [];
    }
  };
  export const removeFromLocalStorage = (key, data) => {
    try {
      localStorage.removeItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error removing from local storage:', error);
    }
  };
  