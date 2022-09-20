const myArray: { name: string; age?: number } = {
  name: 'Do Khanh Toan',
};
console.log(myArray.name); // ở đây nếu ko gán giá trị cho age thì TS vẫn ko phàn nàn vì ở age chúng ta có thêm dấu ?

const array: any = []; // vì array chúng ta gán cho nó kiểu any nên khi thêm vào arry thì chúng ta có thể dùng nhiều kiểu dữ liệu mà ko bị phàn nàn
array.push(true);
array.push(1);

// type
type typeFunction = (
  number1: number,
  number2: number
) => number;

// kế thừa từ type
const sum: typeFunction = (a, b) => {
  return a + b;
};
console.log(sum(1, 3));

// 1 biến có 2 hay nhiều kiểu dữ liệu:
let size: string | number;
size = 'hello';
size = 1;
// size = true;

// enum in TS

enum colors {
  blue,
  green,
  red = 'red',
}

console.log(colors.red);
