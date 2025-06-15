# mục tiêu
# 1. Khởi tạo môi trường: lưới, màn hình
# 2. Định nghĩa biến và màu sắc
# 3. Nhân vật rắn: khởi tạo, di chuyển, va chạm
# 4. Quả táo: khởi tạo, di chuyển ngẫu nhiên
# 5. Vòng lặp trò chơi
# 6. Kết thúc và reset game

import pygame
import random
# khởi tạo và cài đặt kích thước
pygame.init()
# tạo kích thước màn hình
width = 500
height = 500
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

# tạo đối tượng apple
apple = Apple()


running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
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
    pygame.display.flip()
pygame.quit()
