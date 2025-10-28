# Pathfinding Visualiser

Pathfinding Visualiser is an interactive web application that allows users to visualize and understand popular pathfinding algorithms. Built primarily with TypeScript, this tool provides an educational and intuitive interface for exploring how algorithms like A*, Dijkstra, Breadth-First Search, and others find the shortest path between two points on a grid.

## Features

- **Interactive Grid:** Create walls, set start and end nodes, and see how different algorithms navigate the grid.
- **Multiple Algorithms:** Support for popular pathfinding algorithms including:
  - A* Search
  - Dijkstra's Algorithm
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
- **Real-Time Visualization:** Watch each algorithm step through the search process, highlighting visited nodes and the final path.
- **Customizable Settings:** Adjust grid size, animation speed, and more.
- **User-Friendly Interface:** Simple controls for resetting the board, toggling walls, and switching algorithms.

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tanbiralam/Pathfinding-Visualiser.git
   cd Pathfinding-Visualiser
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to use the visualiser.

## Usage

- Click and drag on the grid to draw walls (obstacles).
- Click the "Set Start" or "Set End" buttons to position the start and end nodes.
- Select an algorithm from the dropdown menu.
- Press "Visualize" to watch the algorithm in action.
- Use the reset button to clear the grid or paths.

## Technologies Used

- **TypeScript** (Primary language)
- **JavaScript**
- Modern web development frameworks/libraries (React, etc.)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---

**Author:** [tanbiralam](https://github.com/tanbiralam)
