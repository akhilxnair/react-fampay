import { useCallback, useRef, useState } from 'react';

const useLongPress = (onLongPress, { shouldPreventDefault = true, delay = 300 } = {}) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const isTouchEvent = (event) => 'touches' in event;

  const preventDefault = (event) => {
    if (!isTouchEvent(event)) return;
    if (event.touches.length < 2 && event.preventDefault) event.preventDefault();
  };

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault],
  );

  const clear = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setLongPressTriggered(false);
    if (shouldPreventDefault && target.current) {
      target.current.removeEventListener('touchend', preventDefault);
    }
  },
  [shouldPreventDefault, longPressTriggered]);

  return {
    onMouseDown: (e) => start(e),
    onTouchStart: (e) => start(e),
    onMouseUp: (e) => clear(e),
    onMouseLeave: (e) => clear(e, false),
    onTouchEnd: (e) => clear(e),
  };
};

export default useLongPress;
