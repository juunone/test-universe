export const deleteOne = ({ list, key }) => {
  const newList = [...list];
  const filtered = newList.findIndex((_value, index) => {
    return index === key;
  });
  newList.splice(filtered, 1);
  return newList;
};
