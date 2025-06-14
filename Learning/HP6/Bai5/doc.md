Tài liệu https://developer.mozilla.org/en-US/docs/Web
https://docs.google.com/presentation/d/1tyvQ4N4-pKRhSYRvEzpUkWWdpVGUylFBatr21orErLo/pub?slide=id.p1
## 1. CSS function
CSS functions (hàm trong CSS) là các công cụ mạnh mẽ giúp thực hiện các phép tính, tạo giá trị động, hoặc xử lý dữ liệu trực tiếp trong mã CSS. Chúng được sử dụng để tạo kiểu linh hoạt và đáp ứng hơn. Các hàm CSS thường được dùng trong các thuộc tính như color, transform, background, clip-path, và nhiều hơn nữa.

1. Hàm liên quan đến màu sắc
rgb() và rgba()
	• Định nghĩa màu bằng các giá trị RGB (Red, Green, Blue) với tùy chọn alpha (độ trong suốt).
	• Cú pháp: 
color: rgb(255, 0, 0);       /* Màu đỏ */
color: rgba(255, 0, 0, 0.5); /* Màu đỏ, độ trong suốt 50% */

hsl() và hsla()
	• Định nghĩa màu bằng Hue (sắc độ), Saturation (độ bão hòa), và Lightness (độ sáng) với tùy chọn alpha.
	• Cú pháp: 
color: hsl(0, 100%, 50%);       /* Màu đỏ */
color: hsla(0, 100%, 50%, 0.5); /* Màu đỏ, độ trong suốt 50% */

currentColor
	• Sử dụng màu của thuộc tính color hiện tại cho các thuộc tính khác.
	• Cú pháp: 
border: 2px solid currentColor;

2. Hàm xử lý hình học và vị trí
calc()
	• Dùng để tính toán giá trị động cho các thuộc tính CSS.
	• Cú pháp: 
width: calc(100% - 50px);
padding: calc(10px + 2%);
min() và max()
	• min(): Chọn giá trị nhỏ nhất từ các giá trị được cung cấp.
	• max(): Chọn giá trị lớn nhất từ các giá trị được cung cấp.
	• Cú pháp: 
width: min(50vw, 400px);
height: max(200px, 10%);
clamp()
	• Đặt giá trị trong khoảng tối thiểu và tối đa.
	• Cú pháp: 
font-size: clamp(12px, 5vw, 24px); /* Tối thiểu 12px, tối đa 24px, tỷ lệ 5vw */


3. Hàm liên quan đến hình nền và hình ảnh
url()
	• Dùng để định nghĩa URL của hình ảnh, font hoặc tài nguyên khác.
	• Cú pháp: 
background-image: url('example.jpg');
linear-gradient()
	• Tạo gradient tuyến tính.
	• Cú pháp: 
background: linear-gradient(to right, red, blue);
radial-gradient()
	• Tạo gradient dạng vòng tròn hoặc hình elip.
	• Cú pháp: 
background: radial-gradient(circle, red, blue);
conic-gradient()
	• Tạo gradient theo hướng quay (hình nón).
	• Cú pháp: 
background: conic-gradient(from 0deg, red, blue, green);

4. Hàm liên quan đến xử lý dữ liệu
var()
	• Sử dụng giá trị của biến CSS.
	• Cú pháp: 
:root {
  --main-color: #ff6600;
}
background-color: var(--main-color);
attr()
	• Truy xuất giá trị thuộc tính HTML (hạn chế hỗ trợ).
	• Cú pháp: 
content: attr(data-title); /* Dùng trong `content` */

5. Hàm liên quan đến 2D/3D Transform
translate()
	• Dịch chuyển phần tử.
	• Cú pháp: 
transform: translate(50px, 100px);
rotate()
	• Xoay phần tử.
	• Cú pháp: 
transform: rotate(45deg);
scale()
	• Phóng to hoặc thu nhỏ phần tử.
	• Cú pháp: 
transform: scale(1.5, 2); /* Tăng 1.5 lần ngang, 2 lần dọc */


6. Hàm khác
steps()
	• Được sử dụng trong animation để tạo hiệu ứng từng bước.
	• Cú pháp: 
animation-timing-function: steps(5);
cubic-bezier()
	• Tạo hiệu ứng chuyển động tùy chỉnh.
	• Cú pháp: 
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

Lưu ý
	• Các hàm CSS rất linh hoạt và cần hiểu rõ mục đích sử dụng để áp dụng hiệu quả.
	• Một số hàm yêu cầu trình duyệt hỗ trợ hiện đại (kiểm tra khả năng hỗ trợ trước khi sử dụng).
## 2. Pseudo classes trong CSS
Pseudo-classes trong CSS là các từ khóa được thêm vào các bộ chọn (selectors) để xác định trạng thái đặc biệt của phần tử hoặc lựa chọn các phần tử dựa trên điều kiện cụ thể mà không cần thay đổi trực tiếp HTML. Pseudo-classes giúp bạn tạo kiểu cho các phần tử dựa trên trạng thái, vị trí, hoặc các đặc điểm khác.

Cú pháp
selector:pseudo-class {
  property: value;
}

Các nhóm pseudo-classes phổ biến
1. Pseudo-classes dựa trên trạng thái phần tử
	• :hover: Áp dụng khi người dùng di chuột qua phần tử. 
button:hover {
  background-color: lightblue;
}

	• :focus: Áp dụng khi phần tử nhận được tiêu điểm (focus), ví dụ khi người dùng nhấp vào một trường nhập liệu. 
input:focus {
  border: 2px solid blue;
}

	• :active: Áp dụng khi người dùng nhấn chuột vào phần tử. 
a:active {
  color: red;
}

	• :visited: Áp dụng cho liên kết đã được truy cập. 
a:visited {
  color: purple;
}

	• :disabled: Áp dụng cho phần tử bị vô hiệu hóa. 
button:disabled {
  background-color: grey;
  cursor: not-allowed;
}


2. Pseudo-classes dựa trên cấu trúc tài liệu
	• :first-child: Chọn phần tử con đầu tiên trong phần tử cha. 
p:first-child {
  font-weight: bold;
}

	• :last-child: Chọn phần tử con cuối cùng. 
p:last-child {
  color: blue;
}

	• :nth-child(n): Chọn phần tử con thứ n (n có thể là số hoặc công thức). 
li:nth-child(2) {
  background-color: yellow;
}
li:nth-child(odd) {
  background-color: lightgrey; /* Các phần tử lẻ */
}

	• :only-child: Chọn phần tử là con duy nhất trong phần tử cha. 
p:only-child {
  color: green;
}

	• :empty: Chọn phần tử không có nội dung. 
div:empty {
  display: none;
}


3. Pseudo-classes cho kiểu nâng cao
	• :not(selector): Chọn các phần tử không khớp với bộ chọn được chỉ định. 
div:not(.active) {
  opacity: 0.5;
}

	• :is(selector) (CSS hiện đại): Chọn phần tử khớp với bất kỳ bộ chọn nào trong danh sách. 
a:is(:hover, :focus) {
  color: orange;
}

	• :where(selector) (CSS hiện đại): Giống :is(), nhưng không ưu tiên cụ thể. 
a:where(:hover, :focus) {
  text-decoration: underline;
}


4. Pseudo-classes dựa trên trạng thái biểu mẫu
	• :checked: Chọn các phần tử kiểm tra được (radio, checkbox) đã được chọn. 
input:checked {
  outline: 2px solid green;
}

	• :valid và :invalid: Chọn các trường nhập liệu hợp lệ hoặc không hợp lệ. 
input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}

	• :in-range và :out-of-range: Áp dụng cho các trường nhập liệu có giá trị nằm trong hoặc ngoài phạm vi quy định. 
input:in-range {
  background-color: lightgreen;
}
input:out-of-range {
  background-color: lightcoral;
}


5. Pseudo-classes cho bảng và danh sách
	• :nth-of-type(n): Chọn phần tử thứ n thuộc cùng loại trong phần tử cha. 
tr:nth-of-type(odd) {
  background-color: #f2f2f2;
}

	• :first-of-type và :last-of-type: Chọn phần tử đầu tiên hoặc cuối cùng thuộc cùng loại. 
h1:first-of-type {
  color: blue;
}


Ví dụ tổng hợp
<!DOCTYPE html>
<html>
<head>
  <style>
    a:hover {
      color: red;
    }
    li:nth-child(odd) {
      background: lightblue;
    }
    input:valid {
      border-color: green;
    }
    p:empty {
      display: none;
    }
  </style>
</head>
<body>
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <input type="text" required>
  <p></p>
</body>
</html>

Lưu ý
	• Pseudo-classes hoạt động dựa trên trạng thái phần tử, không thay đổi cấu trúc DOM.
	• Một số pseudo-classes yêu cầu hỗ trợ trình duyệt hiện đại, như :is(), :where().
	• Pseudo-classes khác với pseudo-elements (::before, ::after) vì chúng không tạo phần tử mới mà áp dụng trực tiếp trên phần tử hiện có.
## 3. Pseudo element trong CSS
Pseudo-elements trong CSS là các từ khóa đặc biệt được thêm vào bộ chọn để định kiểu cho các phần cụ thể của phần tử, chẳng hạn như thêm nội dung trước hoặc sau nội dung thực tế của phần tử. Pseudo-elements khác với pseudo-classes ở chỗ chúng tạo ra một phần tử ảo (không tồn tại trong DOM) và chỉ có thể áp dụng kiểu cho phần đó.

Cú pháp
selector::pseudo-element {
  property: value;
}
	• Hai dấu hai chấm :: là chuẩn hiện đại cho pseudo-elements.
	• Cách viết một dấu hai chấm : (ví dụ: :before) vẫn được hỗ trợ vì lý do tương thích với các trình duyệt cũ.

Các pseudo-elements phổ biến
1. ::before
	• Dùng để chèn nội dung hoặc kiểu vào trước nội dung chính của phần tử.
	• Cú pháp: 
p::before {
  content: "• "; /* Thêm ký tự trước đoạn văn */
  color: red;
}

2. ::after
	• Dùng để chèn nội dung hoặc kiểu vào sau nội dung chính của phần tử.
	• Cú pháp: 
p::after {
  content: " (End)";
  font-style: italic;
}
3. ::first-letter
	• Định kiểu cho chữ cái đầu tiên của đoạn văn.
	• Cú pháp: 
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: blue;
}
4. ::first-line
	• Định kiểu cho dòng đầu tiên của đoạn văn.
	• Cú pháp: 
p::first-line {
  font-style: italic;
  color: gray;
}
5. ::selection
	• Định kiểu cho phần văn bản được chọn (highlighted) bởi người dùng.
	• Cú pháp: 
::selection {
  background: yellow;
  color: black;
}
6. ::placeholder
	• Định kiểu cho văn bản giữ chỗ (placeholder) trong các trường nhập liệu.
	• Cú pháp: 
input::placeholder {
  color: gray;
  font-style: italic;
}
7. ::marker
	• Định kiểu cho dấu đầu dòng của danh sách (bullet points).
	• Cú pháp: 
li::marker {
  color: red;
  font-size: 1.5em;
}
8. ::backdrop
	• Dùng để định kiểu cho nền mờ phía sau hộp thoại (<dialog>).
	• Cú pháp: 
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}

Ví dụ tổng hợp
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Thêm ký tự trước đoạn văn */
    p::before {
      content: "Note: ";
      color: red;
      font-weight: bold;
    }

/* Định dạng chữ cái đầu tiên */
    p::first-letter {
      font-size: 2em;
      color: blue;
    }

/* Thêm nội dung sau đoạn văn */
    p::after {
      content: " (Read More)";
      font-style: italic;
      color: gray;
    }

/* Kiểu cho văn bản được chọn */
    ::selection {
      background: yellow;
      color: black;
    }

/* Placeholder */
    input::placeholder {
      color: gray;
      font-style: italic;
    }
  </style>
</head>
<body>
  <p>This is a sample paragraph.</p>
  <input type="text" placeholder="Enter your name">
</body>
</html>

Khác biệt giữa pseudo-class và pseudo-element
Pseudo-Class	Pseudo-Element
Áp dụng cho trạng thái hoặc điều kiện của phần tử.	Áp dụng cho một phần cụ thể trong phần tử.
Không tạo thêm nội dung trong DOM.	Có thể tạo nội dung ảo (sử dụng content).
Cú pháp: selector:pseudo-class	Cú pháp: selector::pseudo-element

Lưu ý
	• Các pseudo-elements có thể kết hợp với các selectors khác (ví dụ: p:hover::before).
	• Một số pseudo-elements, như ::selection hoặc ::placeholder, có hỗ trợ trình duyệt giới hạn. Hãy kiểm tra trước khi sử dụng trong các dự án thực tế.
## 4. Thuộc tính position
Thuộc tính position trong CSS được sử dụng để xác định cách định vị một phần tử trên trang web. Nó kiểm soát cách phần tử được đặt trong luồng tài liệu và có thể được kết hợp với các thuộc tính như top, right, bottom, và left để định vị chính xác phần tử.

Cú pháp
selector {
  position: value;
}
Các giá trị của position:
	1. static (mặc định)
	2. relative
	3. absolute
	4. fixed
	5. sticky

1. static
	• Đây là giá trị mặc định.
	• Phần tử được đặt theo luồng bình thường của tài liệu, không bị ảnh hưởng bởi các thuộc tính top, right, bottom, và left.
	• Không có tính năng định vị đặc biệt nào.
Ví dụ:
div {
  position: static;
}

2. relative
	• Phần tử vẫn giữ vị trí trong luồng tài liệu bình thường, nhưng có thể được di chuyển dựa trên giá trị của các thuộc tính top, right, bottom, và left.
	• Khoảng trống mà phần tử chiếm giữ ban đầu trong luồng vẫn được giữ nguyên.
Ví dụ:
div {
  position: relative;
  top: 10px; /* Dịch xuống 10px */
  left: 20px; /* Dịch sang phải 20px */
}


3. absolute
	• Phần tử được loại khỏi luồng tài liệu, không ảnh hưởng đến các phần tử khác.
	• Phần tử được định vị dựa trên phần tử cha gần nhất có position khác static. Nếu không tìm thấy, nó sẽ được định vị so với cửa sổ trình duyệt.
Ví dụ:
div {
  position: absolute;
  top: 50px; /* Dịch xuống 50px */
  left: 100px; /* Dịch sang phải 100px */
}


4. fixed
	• Tương tự như absolute, phần tử được loại khỏi luồng tài liệu.
	• Phần tử được định vị dựa trên cửa sổ trình duyệt và không thay đổi vị trí khi người dùng cuộn trang.
Ví dụ:
div {
  position: fixed;
  top: 0;
  right: 0;
  background: yellow;
}

5. sticky
	• Phần tử được định vị theo luồng tài liệu bình thường, nhưng có thể chuyển sang chế độ cố định khi người dùng cuộn đến một vị trí nhất định.
	• Phần tử sẽ "dính" vào vị trí được xác định bởi các thuộc tính top, right, bottom, hoặc left khi cuộn.
Ví dụ:
div {
  position: sticky;
  top: 10px; /* "Dính" vào 10px từ trên khi cuộn */
  background: lightblue;
}


So sánh các giá trị position
Giá trị	Vị trí	Thoát khỏi luồng tài liệu	Dựa trên phần tử tham chiếu
static	Theo luồng tài liệu bình thường	Không	Không áp dụng
relative	Theo vị trí bình thường, di chuyển thêm	Không	Vị trí ban đầu trong tài liệu
absolute	Hoàn toàn theo thuộc tính top, left...	Có	Phần tử cha gần nhất có position không static
fixed	Theo cửa sổ trình duyệt	Có	Cửa sổ trình duyệt
sticky	Theo vị trí cuộn	Không	Theo viewport khi cuộn

Ví dụ tổng hợp
<!DOCTYPE html>
<html>
<head>
  <style>
    .static {
      position: static;
      background: lightgrey;
    }
.relative {
      position: relative;
      top: 20px;
      left: 20px;
      background: lightblue;
    }
.absolute {
      position: absolute;
      top: 50px;
      left: 50px;
      background: lightgreen;
    }
.fixed {
      position: fixed;
      top: 0;
      right: 0;
      background: yellow;
    }
.sticky {
      position: sticky;
      top: 10px;
      background: pink;
    }
  </style>
</head>
<body>
  <div class="static">Static Position</div>
  <div class="relative">Relative Position</div>
  <div class="absolute">Absolute Position</div>
  <div class="fixed">Fixed Position</div>
  <div class="sticky">Sticky Position</div>
</body>
</html>

Lưu ý
	• z-index thường được sử dụng cùng với position để kiểm soát thứ tự chồng lớp của các phần tử.
	• sticky yêu cầu thuộc tính cha phải có kích thước cụ thể để hoạt động đúng.
	• Trình duyệt hỗ trợ các giá trị này hầu hết đều phổ biến, nhưng kiểm tra sticky ở các trình duyệt cũ (như IE) là cần thiết

