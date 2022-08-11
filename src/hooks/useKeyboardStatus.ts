import React, { useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener: any = useRef(null);
  const keyboardHideListener: any = useRef(null);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );
    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  });
  return isOpen;
};
export default useKeyboardStatus;
