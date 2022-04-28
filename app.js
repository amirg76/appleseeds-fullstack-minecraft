arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

Array.prototype.myFind = function (callback, extraArr = this) {
  for (let i = 0; i < extraArr.length; i++) {
    if (callback(extraArr[i], i, extraArr) === true) {
      return extraArr[i];
    }
  }
  return undefined;
};

Array.prototype.myFilter = function (callback, extraArr = this) {
  let filterArr = [];
  for (let i = 0; i < extraArr.length; i++) {
    if (callback(extraArr[i], i, extraArr) === true) {
      filterArr.push(extraArr[i]);
    }
  }
  return filterArr;
};

const testFind = arr.myFind((element) => element === 60);
console.log(testFind);
const testFilter = arr.myFilter((element) => element > 60);
console.log(testFilter);
