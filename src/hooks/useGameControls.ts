import { useEffect, useCallback } from 'react';
import { useGameStore } from '@/stores/gameStore';

export function useGameControls() {
  const { gameState, moveLeft, moveRight, jump, isJumping } = useGameStore();
  
  // Touch handling
  const touchStartRef = { x: 0, y: 0 };
  
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (gameState !== 'playing') return;
    touchStartRef.x = e.touches[0].clientX;
    touchStartRef.y = e.touches[0].clientY;
  }, [gameState]);
  
  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (gameState !== 'playing') return;
    
    const touchEnd = e.changedTouches[0];
    const deltaX = touchEnd.clientX - touchStartRef.x;
    const deltaY = touchEnd.clientY - touchStartRef.y;
    
    const minSwipe = 50;
    
    // Horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipe) {
      if (deltaX > 0) {
        moveRight();
      } else {
        moveLeft();
      }
    }
    // Vertical swipe (up = jump)
    else if (deltaY < -minSwipe && !isJumping) {
      jump();
    }
  }, [gameState, moveLeft, moveRight, jump, isJumping]);
  
  // Keyboard handling
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameState !== 'playing') return;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        moveLeft();
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        moveRight();
        break;
      case 'ArrowUp':
      case 'w':
      case 'W':
      case ' ':
        if (!isJumping) jump();
        break;
    }
  }, [gameState, moveLeft, moveRight, jump, isJumping]);
  
  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleTouchStart, handleTouchEnd, handleKeyDown]);
}
