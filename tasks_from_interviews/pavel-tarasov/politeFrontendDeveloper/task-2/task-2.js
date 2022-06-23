/**
 * task - https://jsfiddle.net/mockinterview/us31gjhn/
 * info - // https://learn.javascript.ru/custom-errors
 * https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
 * Прислал Anton
 *
 * Необходимо дописать код так, чтобы метод "getRange" возвращал
 * подмассив массива размером "size", начиная с индекса "offset". В
 * случае пересечения возвращаемого массива с одним из уже возвращенных
 * необходимо выбросить RangeError ошибку.
 *
 * Например:
 * В конструктор передан массив размером 5: [0, 1, 2, 3, 4]
 * вызываем getRange(0, 2) => [0,1]
 * вызываем getRange(2, 2) => [2,3]
 * вызываем getRange(3, 2) => ошибка, так как элемент с индексом 3 уже
 * был возвращен в массиве выше (массивы пересекаются)
 */
  // class RangeError extends Error {
  //   constructor(message) {
  //     super(message);
  //     this.name = 'RangeError';
  //   }
  // }
  class TypedArrayRangeStorage {
    /**
     * @param {TypedArray} typedArray
     */
    constructor(typedArray) {
      this.typedArray = typedArray;
      this.set = new Set();
    }
    *generatorRange(start, end) {
      for(let i = start; i <= end; i++)
        yield i; 
    }
    /**
     * @param {number} offset
     * @param {number} size
     * @returns {TypedArray}
     */
    getRange(offset, size) {
      try {
        // range end value
        const endValue = offset + size - 1;
        // check invalid range error 
        if(endValue > this.typedArray.length - 1) 
          throw new RangeError(`Invalid range: [${offset}, ${endValue}]`);
        // check arrays intersect error (get indexes of range)
        for (let i = offset; i <= endValue; i++) {
          if(this.set.has(i))
            throw new RangeError('arrays intersect');
        }
        // range array  
        const range = this.typedArray.slice(offset, offset + size);
        // const range = [...this.generatorRange(offset, endValue)];
        // add range to storage
        for(const el of range) 
          this.set.add(el);
        return range; 
      } catch(error) {
          return`${error.name}: ${error.message}`;
      }
    }
  }
  // const u8 = Uint8Array.from({ length: 12 }, (_) => Math.random() * 8);
  const u8 = Uint8Array.from([0, 1, 2, 3, 4]);
  // console.log(u8);
  const rangeStorage = new TypedArrayRangeStorage(u8);
//   console.log(rangeStorage.getRange(4, 4));
//   console.log(rangeStorage.getRange(2, 2));
//   console.log(rangeStorage.getRange(3, 4)); // RangeError: Invalid range: [3,7]
  console.log(rangeStorage.getRange(0, 2)); // => [0,1]
  console.log(rangeStorage.getRange(2, 2)); // => [2,3]
  console.log(rangeStorage.getRange(1, 2));
  // console.log(rangeStorage.getRange(3, 2));
  console.log(rangeStorage.getRange(3, 4)); //=>; // RangeError: Invalid range: [3,7]
  console.log(rangeStorage.set);