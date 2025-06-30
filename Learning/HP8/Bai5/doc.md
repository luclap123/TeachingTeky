

## 🧠 **BÀI HỌC: DOM TRONG JAVASCRIPT**

### I. Mục tiêu bài học

* Hiểu khái niệm DOM là gì.
* Biết cách truy cập và thay đổi nội dung của phần tử HTML bằng JavaScript.
* Biết cách thêm, xoá, thay đổi thuộc tính và class của phần tử HTML.
* Thực hành tương tác với HTML qua các bài tập.

---

### II. 1. **DOM là gì?**

DOM (Document Object Model) là một cấu trúc dạng cây của trang web. Mỗi thành phần HTML (như `<div>`, `<p>`, `<button>`,...) là một **node** trong cây này.

**JavaScript** có thể được dùng để:

* Thay đổi nội dung, cấu trúc, hoặc style của trang.
* Phản hồi các sự kiện người dùng (click, nhập liệu, ...).

---

### II. 2. **Truy cập phần tử HTML**

```js
// Theo id
const heading = document.getElementById("title");

// Theo class
const items = document.getElementsByClassName("item");

// Theo thẻ
const paragraphs = document.getElementsByTagName("p");

// Query Selector (mạnh mẽ nhất)
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");
```

---

### II. 3. **Thay đổi nội dung**

```js
const title = document.getElementById("title");
title.innerText = "Xin chào JavaScript DOM!";
```

---

### II. 4. **Thay đổi thuộc tính**

```js
const link = document.querySelector("a");
link.href = "https://www.google.com";
link.target = "_blank";
```

---

### II. 5. **Thay đổi class và style**

```js
const box = document.querySelector(".box");
box.classList.add("active");
box.classList.remove("inactive");
box.style.backgroundColor = "lightblue";
```

---

### II. 6. **Tạo phần tử mới và thêm vào DOM**

```js
const newItem = document.createElement("li");
newItem.innerText = "Mục mới";
document.querySelector("ul").appendChild(newItem);
```

---

### II. 7. **Bắt sự kiện (event)**

```js
const btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
  alert("Bạn vừa click nút!");
});
```

---

## 📝 BÀI TẬP THỰC HÀNH

### 🔹 **Bài tập 1: Thay đổi tiêu đề**

**HTML:**

```html
<h1 id="title">Tiêu đề ban đầu</h1>
<button id="changeTitle">Đổi tiêu đề</button>
```

**Yêu cầu:** Khi click vào nút, thay đổi nội dung thẻ `<h1>` thành “Tiêu đề đã thay đổi!”

---

### 🔹 **Bài tập 2: Thêm mục vào danh sách**

**HTML:**

```html
<ul id="list">
  <li>Item 1</li>
</ul>
<input type="text" id="newItemText" />
<button id="addItem">Thêm mục</button>
```

**Yêu cầu:** Khi click nút "Thêm mục", lấy nội dung trong ô input, tạo một thẻ `<li>` mới và thêm vào danh sách `<ul>`.

---

### 🔹 **Bài tập 3: Đổi màu nền**

**HTML:**

```html
<div id="colorBox" style="width:100px; height:100px; background-color:gray;"></div>
<button id="changeColor">Đổi màu</button>
```

**Yêu cầu:** Khi bấm nút, thay đổi màu nền của `div` thành màu bạn chọn (ví dụ: "green").

---

### 🔹 **Bài tập 4: Ẩn/Hiện đoạn văn**

**HTML:**

```html
<p id="content">Đây là một đoạn văn.</p>
<button id="toggleBtn">Ẩn</button>
```

**Yêu cầu:** Khi click vào nút:

* Nếu đoạn văn đang hiển thị, ẩn nó và đổi nội dung nút thành "Hiện"
* Nếu đang bị ẩn, hiện lại và đổi nội dung nút thành "Ẩn"
