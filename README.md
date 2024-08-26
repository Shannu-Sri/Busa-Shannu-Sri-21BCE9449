# Turn-based Chess-like Game with Websocket Communication

This project implements a turn-based chess-like game with a 5x5 grid. It uses WebSocket for real-time communication between the server and clients, and provides a web-based user interface for interaction.

## Features

- **Game Setup**: Two players each control a team of characters and arrange them on a 5x5 grid.
- **Character Types**:
  - **Pawn**: Moves one block in any direction.
  - **Hero1**: Moves two blocks straight in any direction.
  - **Hero2**: Moves two blocks diagonally in any direction.
  - **Hero3** (Bonus): Moves 2 steps straight and one to the side.
- **Dynamic Team Composition**: Players can choose their team composition at the start of the game.
- **Spectator Mode**: Other clients can watch ongoing games.
- **Chat Feature**: Players can communicate during the game.
- **AI Opponent** (Bonus): Play against a basic AI opponent.
- **Replay System** (Bonus): Review past games move by move.
- **Ranking System** (Bonus): Track player performance across multiple games.

## Project Structure

- `client/`: Contains the client-side code.
  - `index.html`: The main HTML file for the client.
  - `app.js`: JavaScript code for handling game interactions and WebSocket communication.
  - `styles.css`: CSS file for styling the client interface.
- `server/`: Contains the server-side code.
  - `server.js`: Main server file that handles WebSocket connections and game logic.
  - `gameLogic.js`: Contains game logic and state management.
- `README.md`: This file.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Setup

1. **Clone the Repository**

   ```bash
   git clone <https://github.com/ShreyasVajpayee19/ShreyasVajpayee21BIT0202>
   
