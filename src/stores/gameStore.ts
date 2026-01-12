import { create } from 'zustand';

export type GameState = 'menu' | 'playing' | 'paused' | 'gameOver';
export type Lane = -1 | 0 | 1; // left, center, right

interface GameStore {
  gameState: GameState;
  score: number;
  coins: number;
  highScore: number;
  currentLane: Lane;
  isJumping: boolean;
  speed: number;
  distance: number;
  
  // Actions
  startGame: () => void;
  endGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  goToMenu: () => void;
  
  addScore: (points: number) => void;
  addCoin: () => void;
  
  moveLeft: () => void;
  moveRight: () => void;
  jump: () => void;
  land: () => void;
  
  updateDistance: (delta: number) => void;
  increaseSpeed: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  gameState: 'menu',
  score: 0,
  coins: 0,
  highScore: parseInt(localStorage.getItem('highScore') || '0'),
  currentLane: 0,
  isJumping: false,
  speed: 15,
  distance: 0,
  
  startGame: () => set({
    gameState: 'playing',
    score: 0,
    coins: 0,
    currentLane: 0,
    isJumping: false,
    speed: 15,
    distance: 0,
  }),
  
  endGame: () => {
    const { score, highScore } = get();
    const newHighScore = Math.max(score, highScore);
    localStorage.setItem('highScore', newHighScore.toString());
    set({ gameState: 'gameOver', highScore: newHighScore });
  },
  
  pauseGame: () => set({ gameState: 'paused' }),
  resumeGame: () => set({ gameState: 'playing' }),
  goToMenu: () => set({ gameState: 'menu' }),
  
  addScore: (points) => set((state) => ({ score: state.score + points })),
  addCoin: () => set((state) => ({ coins: state.coins + 1 })),
  
  moveLeft: () => set((state) => ({
    currentLane: Math.max(-1, state.currentLane - 1) as Lane,
  })),
  
  moveRight: () => set((state) => ({
    currentLane: Math.min(1, state.currentLane + 1) as Lane,
  })),
  
  jump: () => set({ isJumping: true }),
  land: () => set({ isJumping: false }),
  
  updateDistance: (delta) => set((state) => {
    const newDistance = state.distance + delta * state.speed;
    const newScore = Math.floor(newDistance / 10);
    return { distance: newDistance, score: newScore };
  }),
  
  increaseSpeed: () => set((state) => ({
    speed: Math.min(state.speed + 0.5, 40),
  })),
}));
