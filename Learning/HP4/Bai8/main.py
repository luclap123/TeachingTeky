# mục tiêu
# 1. Khởi tạo môi trường: lưới, màn hình
# 2. Định nghĩa biến và màu sắc
# 3. Nhân vật rắn: khởi tạo, di chuyển, va chạm
# 4. Quả táo: khởi tạo, di chuyển ngẫu nhiên
# 5. Vòng lặp trò chơi
# 6. Kết thúc và reset game

import pygame
from pygame.locals import *
import random
# khởi tạo và cài đặt kích thước
pygame.init()
# tạo kích thước màn hình
width = 480
height = 480
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("snake game")

# tạo lưới
grid_size = 20
num_rows = height // grid_size
num_cols = width // grid_size

# tạo màu sắc
BLUE = (48, 3, 252)
RED = (252, 3, 3)
BLACK = (0, 0, 0)
GREEN = (0, 255, 4)
WHITE = (255, 255, 255)
YELLOW = (221, 255, 0)

# đặt các hướng
up = (0, -1)
down = (0, 1)
left = (-1, 0)
right = (1, 0)

# Tạo biến trò chơi
SCORE = 0
gameOver = False

# thời gian game
clock = pygame.time.Clock()
fps = 10


# tạo apple
class Apple:
    def __init__(self):
        self.randomize_location()
    
    def randomize_location(self):
        random_x = random.randint(0, num_cols - 1) * grid_size;
        random_y = random.randint(0, num_rows - 1) * grid_size;
        self.location = (random_x, random_y)

    def draw(self):
        square = pygame.Rect(self.location, (grid_size, grid_size))
        pygame.draw.rect(screen, RED, square)

# tạo rắn
class Snake:
    def __init__(self):
        self.body = [(width/2, height/2)]
        self.direction = right
        self.head = self.body[0]

    def turn(self, direction):
        if len(self.body) == 1:
            self.direction = direction
        else:
            # kiểm tra xem người chơi đổi hướng trái hay phải
            # truy cập vào thân của rắn, kiểm tra xem đầu rắn và
            # khúc thứ hai của rắn có nằm trên cùng một hàng ngang hay không
            # ở đây chúng ta chỉ cho phép rẽ trái hoặc rẽ phải
            # khi mà đầu rắn và phần thứ hai của rắn không cùng tọa độ Y
            if direction == left or direction == right:
                if self.body[0][1] != self.body[1][1]:
                    self.direction = direction
            
            if direction == up or direction==down:
                if self.body[0][0] != self.body[1][0]:
                    self.direction = direction


    def move(self):
        x, y = self.direction
        next_x = (self.head[0] + x * grid_size)
        next_y = (self.head[1] + y * grid_size)

        # nếu chạm vào tường, thì đi xuyên tường
        next_x = next_x % width
        next_y = next_y % height
        next_location = (next_x, next_y)

        # thêm head location và trước list
        self.body.insert(0, next_location)
        self.head = self.body[0]

        # kiểm tra xem có chạm vào apple không
        if self.head == apple.location:
            apple.randomize_location()
            # không cho quả táo respawn tại  thân rắn
            while apple.location in self.body:
                apple.randomize_location()
        else:
            self.body.pop()
    
    # kiểm tra rắn có chạm vào body rắn ko
    def check_collider(self):
        if self.head in self.body[1:]:
            return True
        else:
            return False
    
    # vẽ rắn
    def draw(self):
        for body_part in self.body:
            square = pygame.Rect(body_part, (grid_size, grid_size))
            pygame.draw.rect(screen, BLUE, square)
            pygame.draw.rect(screen, WHITE, square, 1)


# tạo đối tượng apple
apple = Apple()

# tạo đối tượng snake
snake = Snake()

# tạo hàm hiển thị điểm
# 1. tạo hàm ở bên ngoài
# 2. viết trực tiếp vào vòng lặp game

running = True
while running:
    # cài đặt game chạy theo thời gian thực
    clock.tick(fps)
    # cài đặt các phím bấm cho game
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == KEYDOWN:
            if event.key == K_UP:
                snake.turn(up)
            elif event.key == K_DOWN:
                snake.turn(down)
            elif event.key == K_RIGHT:
                snake.turn(right)
            elif event.key == K_LEFT:
                snake.turn(left)
    # vẽ background
    for x in range(num_cols):
        for y in range(num_rows):
            # tạo kích thước và vị trí của ô lưới
            square = pygame.Rect((x * grid_size, y * grid_size), (grid_size, grid_size))
            if (x + y) % 2 == 0:
                pygame.draw.rect(screen, GREEN, square)
            else:
                pygame.draw.rect(screen, YELLOW, square)

    # vẽ táo lên màn hình game
    apple.draw()

    snake.draw()
    snake.move()
    
    
    pygame.display.flip()
pygame.quit()
