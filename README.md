# Subway Runner 🛹🚄

A high-speed, adrenaline-pumping 3D endless runner web game built with vanilla JavaScript, Three.js, and Tailwind CSS. 

Survive the extreme speeds, dodge the traffic, surf on top of moving trains, and collect premium neon-infused power-ups as you outrun the chaser! 

## ✨ Features

- **Extreme Speed Calibration**: The game accelerates quickly, reaching an insane maximum speed of 80 units/sec, demanding lightning-fast reflexes.
- **Dynamic Obstacle Spawning**: Experience lethal density at high speeds with complex patterns including ramp-to-train transitions, staggered trains, and triple-car barricades.
- **Premium Reward Visuals**: 
  - 🧲 **Neon Magnet**: Attracts coins with glowing cyan electric tips.
  - 🚀 **Industrial Jetpack**: Soar above the obstacles with animated neon exhausts.
  - 🛡️ **Tech-Shield**: A translucent high-tech energy sphere.
  - ⚡ **Hoverboard**: Deploy a sleek black hoverboard with underside thrusters during a speed boost.
- **Immersive Audio Engine**: Centralized BGM and SFX for coin collection, jumps, crashes, and power-ups.
- **Neon-Infused Aesthetics**: Emissive materials on coins, ramps, and power-ups for a vibrant, modern look.
- **Missions & Unlockable Characters**: Complete daily objectives to earn coins and unlock a roster of diverse characters (Ninja, Robot, Alien, Zombie, Wizard).
- **Responsive Controls**: Optimized for both keyboard and mobile touch swipe gestures.

## 🎮 Controls

### Keyboard
- **A / D** or **Left / Right Arrows**: Change lanes
- **W / Up Arrow / Space**: Jump
- **S / Down Arrow**: Slide

### Touch (Mobile)
- **Swipe Left / Right**: Change lanes
- **Swipe Up**: Jump
- **Swipe Down**: Slide

## 🚀 How to Run Locally

You can run this game using any local web server. If you have Node.js installed, the easiest way is with `serve` or `live-server`:

1. Clone the repository:
   ```bash
   git clone https://github.com/Garud2009/Subway-Runner.git
   ```
2. Navigate to the directory:
   ```bash
   cd Subway-Runner
   ```
3. Run a local development server:
   ```bash
   npx serve .
   ```
   *Note: Because the game uses ES Modules (`type="module"`), opening `index.html` directly in a browser via the `file://` protocol will not work due to CORS restrictions.*

## 📄 License
This game is open-source and available under the standard **[MIT License](LICENSE)**.
