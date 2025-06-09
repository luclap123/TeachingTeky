### ✅ **Các bước thực hiện trong chương trình "Rắn săn mồi":**

---

### **1. Khởi tạo và cấu hình ban đầu**

* `pygame.init()` để khởi động thư viện `pygame`.
* Xác định:

  * Kích thước màn hình (`width`, `height`)
  * Kích thước mỗi ô lưới (`grid_size`)
  * Số hàng/cột trong lưới
  * Tốc độ khung hình (`fps`)
* Tạo cửa sổ game bằng `pygame.display.set_mode(...)`.

---

### **2. Định nghĩa hằng số và biến cần thiết**

* Các hướng di chuyển: `up`, `down`, `left`, `right`
* Các màu sắc cần dùng: `black`, `blue`, `red`, v.v.
* Biến lưu trạng thái: `score`, `gameover`, `clock`, `running`

---

### **3. Xây dựng lớp Apple (quả táo)**

* **`__init__`**: Sinh vị trí ngẫu nhiên ban đầu.
* **`randomize_location()`**: Sinh lại vị trí mới cho quả táo.
* **`draw()`**: Vẽ quả táo lên màn hình.

---

### **4. Xây dựng lớp Snake (con rắn)**

* **`__init__()`**: Khởi tạo thân rắn và hướng ban đầu.
* **`turn(direction)`**: Đổi hướng đi, nhưng không cho quay ngược đầu trực tiếp.
* **`move()`**:

  * Di chuyển đầu rắn về phía trước.
  * Kiểm tra ăn táo hoặc không, để quyết định có tăng chiều dài hay không.
  * Nếu không ăn táo → xóa đuôi (để tạo ảo giác di chuyển).
* **`check_collision()`**: Kiểm tra rắn tự đâm vào thân.
* **`draw()`**: Vẽ rắn lên màn hình.

---

### **5. Vòng lặp chính của game**

* Xử lý sự kiện (`QUIT`, `KEYDOWN`)
* Cập nhật hướng rắn theo phím mũi tên.
* Vẽ nền game (ô lưới kiểu caro).
* Gọi `apple.draw()` và `snake.draw()`.
* Gọi `snake.move()` để cập nhật trạng thái rắn.
* Kiểm tra va chạm bằng `snake.check_collision()`.
* Hiển thị điểm số lên màn hình.

---

### **6. Xử lý trạng thái Game Over**

* Khi rắn tự đâm vào thân → bật trạng thái `gameover = True`.
* Vẽ thông báo "Game Over", chờ nhấn phím `SPACE` để chơi lại.
* Reset lại trạng thái game: vị trí rắn, hướng, táo mới, điểm số.

---

### ✅ **Tổng kết:**

| Bước | Mục tiêu              | Liên quan đến               |
| ---- | --------------------- | --------------------------- |
| 1    | Khởi tạo môi trường   | `pygame`, màn hình          |
| 2    | Định nghĩa biến & màu | Logic điều hướng & hiển thị |
| 3    | Quản lý quả táo       | `Apple` class               |
| 4    | Quản lý rắn           | `Snake` class               |
| 5    | Vòng lặp trò chơi     | Tương tác người dùng        |
| 6    | Kết thúc & reset game | Điều kiện thua              |

