export const getMinMaxPrice = (string) => {
    const regex = /(\d+(\.\d+)?)/g;
    const matches = string.match(regex);
  
    if (!matches) return null;
  
    const numbers = matches.map(Number);
  
    if (string.includes('Dưới')) {
      const max = Math.max(...numbers);
      return { min: 0, max };
    } else if (string.includes('Từ')) {
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);
      return { min, max };
    } else if (string.includes('Trên')) {
      const min = Math.max(...numbers);
      return { min, max: 9999999999 };
    }
  
    return null;
  };
  
export const getNumbersArea = (string) => string.split(' ').map(item => +item.match(/\d+/)).filter(item => item !== 0)