## 🔹 1. **Hàm trong JavaScript**

### 🔸 Bài học:

* Hàm (function) là khối mã có thể tái sử dụng.
* Khai báo bằng `function`, tên hàm, tham số (tùy chọn), và thân hàm.

```js
function sayHello() {
  console.log("Xin chào!");
}
sayHello(); // Gọi hàm
```

### 🔸 Bài tập:

1. Viết hàm `greet` in ra “Chào bạn!”
2. Viết hàm `multiply` nhận 2 số và in tích của chúng.

---

## 🔹 2. **Tham số trong hàm**

### 🔸 Bài học:

* Tham số là giá trị truyền vào hàm khi gọi nó.

```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // Kết quả: 8
```

### 🔸 Bài tập:

1. Viết hàm `square(n)` để trả về bình phương của `n`.
2. Viết hàm `sayHi(name)` để chào tên bất kỳ được truyền vào.

---

## 🔹 3. **Return trong hàm**

### 🔸 Bài học:

* `return` giúp trả giá trị từ hàm.
* Sau `return`, các dòng phía sau trong hàm sẽ không được thực thi.

```js
function double(x) {
  return x * 2;
}
```

### 🔸 Bài tập:

1. Viết hàm `sum(a, b)` trả về tổng của hai số.
2. Viết hàm `isEven(n)` trả về true nếu `n` là số chẵn.

---

## 🔹 4. **Hiểu sâu hơn về function trong JS**

### 🔸 Bài học:

* Hàm cũng là **object**.
* Có thể truyền hàm như tham số, hoặc trả về hàm khác.

```js
function greet(name) {
  return function() {
    console.log("Hello " + name);
  }
}
let greetJohn = greet("John");
greetJohn(); // Hello John
```

### 🔸 Bài tập:

1. Viết hàm nhận vào một hàm khác làm tham số.
2. Viết hàm `createMultiplier(n)` trả về hàm nhân số với `n`.

---

## 🔹 5. **Các loại function trong JS**

### 🔸 Bài học:

* **Function Declaration**: `function foo() {}`
* **Function Expression**: `const foo = function() {}`
* **Arrow Function**: `const foo = () => {}`

```js
const add = (a, b) => a + b;
```

### 🔸 Bài tập:

1. Chuyển một function declaration thành arrow function.
2. Viết 3 kiểu hàm thực hiện cùng một nhiệm vụ: cộng 2 số.

---

## 🔹 6. **Polyfill là gì?**

### 🔸 Bài học:

* Polyfill là đoạn mã dùng để giả lập tính năng mới trong JS cũ.

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}
```

### 🔸 Bài tập:

1. Viết polyfill cho `String.prototype.startsWith`.
2. Tạo polyfill cho `Array.prototype.find`.

---

## 🔹 7. **Object trong JS**

### 🔸 Bài học:

* Object chứa các cặp key-value.

```js
const person = {
  name: "An",
  age: 25
};
```

### 🔸 Bài tập:

1. Tạo object `student` với các thuộc tính: `name`, `grade`, `school`.
2. Viết function nhận object và in ra từng thuộc tính.

---

## 🔹 8. **Object prototype (cơ bản)**

### 🔸 Bài học:

* Prototype cho phép các object chia sẻ thuộc tính và phương thức.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello " + this.name);
};
```

### 🔸 Bài tập:

1. Tạo constructor function `Car` có thuộc tính `brand`, `speed`.
2. Thêm method `drive()` vào prototype của `Car`.

---

## 🔹 9. **Date object**

### 🔸 Bài học:

* `Date` dùng để làm việc với thời gian.

```js
let now = new Date();
console.log(now.getFullYear());
```

### 🔸 Bài tập:

1. Tạo object `Date` cho ngày sinh của bạn.
2. Viết hàm trả về số ngày từ đầu năm đến hôm nay.

---

## 🔹 10. **Học sâu về if-else, switch**

### 🔸 Bài học:

* `if-else` kiểm tra điều kiện.
* `switch` dùng thay thế cho nhiều `if-else`.

```js
let color = "blue";
switch (color) {
  case "red": console.log("Màu đỏ"); break;
  case "blue": console.log("Màu xanh"); break;
  default: console.log("Không biết màu");
}
```

### 🔸 Bài tập:

1. Viết chương trình kiểm tra xem số là dương, âm hay 0.
2. Dùng `switch` để in ngày trong tuần (0 -> Chủ Nhật,…).

---

## 🔹 11. **Toán tử 3 ngôi (Ternary Operator)**

### 🔸 Bài học:

* Cú pháp: `condition ? expr1 : expr2`

```js
let age = 18;
let message = age >= 18 ? "Được phép" : "Không được phép";
```

### 🔸 Bài tập:

1. Viết hàm kiểm tra một số là chẵn hay lẻ bằng toán tử 3 ngôi.
2. Viết một đoạn mã kiểm tra người có đủ tuổi uống bia không (tuổi >= 18).



