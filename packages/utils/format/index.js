export function formatStr(value, blocks, delimiter = ' ') {
  if (blocks.length === 0) return;

  let res = '';
  let newStr = value;
  blocks.forEach((num, index) => {
    if (newStr.length > 0) {
      const subStr = newStr.slice(0, num);
      if (subStr.length <= num && index !== 0) {
        res += delimiter;
      }
      res += subStr;
      
      newStr = newStr.slice(num);
    }
  });

  return res;
}