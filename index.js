const sumItems = function(array) {
  let result = 0;
  for (let element of array) {
    if (Array.isArray(element)) {
      result += sumItems(element);
    } else {
      result += element;
    }
  }
  return result;
};

module.exports = sumItems;