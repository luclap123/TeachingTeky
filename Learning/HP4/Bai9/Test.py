import pygame
import random

# Initialize Pygame
pygame.init()
WIDTH, HEIGHT = 600, 800
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Space Shooter 🚀")

# Load Assets
PLAYER_IMG = pygame.image.load("assets/player.png")
ENEMY_IMG = pygame.image.load("assets/enemy.png")
BULLET_IMG = pygame.image.load("assets/bullet.png")

# Constants
FPS = 60
VEL = 5
BULLET_VEL = 7
ENEMY_VEL = 2
ENEMY_SPAWN_TIME = 1000  # in ms

# Player class
class Player:
    def __init__(self):
        self.img = PLAYER_IMG
        self.x = WIDTH // 2 - self.img.get_width() // 2
        self.y = HEIGHT - self.img.get_height() - 10
        self.bullets = []

    def draw(self):
        WIN.blit(self.img, (self.x, self.y))
        for bullet in self.bullets:
            WIN.blit(BULLET_IMG, (bullet[0], bullet[1]))

    def move(self, keys):
        if keys[pygame.K_LEFT] and self.x > 0:
            self.x -= VEL
        if keys[pygame.K_RIGHT] and self.x < WIDTH - self.img.get_width():
            self.x += VEL

    def shoot(self):
        self.bullets.append([self.x + self.img.get_width()//2 - BULLET_IMG.get_width()//2, self.y])

    def update_bullets(self):
        for bullet in self.bullets[:]:
            bullet[1] -= BULLET_VEL
            if bullet[1] < 0:
                self.bullets.remove(bullet)

# Enemy class
class Enemy:
    def __init__(self):
        self.img = ENEMY_IMG
        self.x = random.randint(0, WIDTH - self.img.get_width())
        self.y = -self.img.get_height()

    def move(self):
        self.y += ENEMY_VEL

    def draw(self):
        WIN.blit(self.img, (self.x, self.y))

def draw_window(player, enemies, score):
    WIN.fill((0, 0, 0))
    player.draw()
    for enemy in enemies:
        enemy.draw()
    score_font = pygame.font.SysFont("arial", 30)
    score_text = score_font.render(f"Score: {score}", True, (255, 255, 255))
    WIN.blit(score_text, (10, 10))
    pygame.display.update()

def main():
    run = True
    clock = pygame.time.Clock()
    player = Player()
    enemies = []
    score = 0

    pygame.time.set_timer(pygame.USEREVENT, ENEMY_SPAWN_TIME)

    while run:
        clock.tick(FPS)
        draw_window(player, enemies, score)
        player.update_bullets()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
            if event.type == pygame.USEREVENT:
                enemies.append(Enemy())
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                player.shoot()

        keys = pygame.key.get_pressed()
        player.move(keys)

        for enemy in enemies[:]:
            enemy.move()
            if enemy.y > HEIGHT:
                enemies.remove(enemy)
            for bullet in player.bullets:
                bullet_rect = pygame.Rect(bullet[0], bullet[1], BULLET_IMG.get_width(), BULLET_IMG.get_height())
                enemy_rect = pygame.Rect(enemy.x, enemy.y, ENEMY_IMG.get_width(), ENEMY_IMG.get_height())
                if bullet_rect.colliderect(enemy_rect):
                    score += 1
                    enemies.remove(enemy)
                    player.bullets.remove(bullet)
                    break

    pygame.quit()

if __name__ == "__main__":
    main()
