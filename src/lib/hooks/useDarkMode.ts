import { useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { onDarkMode } from '../../modules/core';
import { DEVLOG_DARK_MODE } from '../constants';

type useDarkMode = {
  visible: boolean;
  darkMode: boolean;
};

export default function useDarkMode(): useDarkMode {
  const DARK_MODE = useRef<string | null>(
    localStorage.getItem(DEVLOG_DARK_MODE),
  );
  const dispatch = useDispatch();
  const { core } = useSelector(
    (state: RootState) => ({
      core: state.core,
    }),
    shallowEqual,
  );
  const {
    darkMode: { visible, darkMode },
  } = core;

  // none declare DARK_MODE
  useEffect(() => {
    if (DARK_MODE.current) return;
    const mode = ['light', 'dark'].reduce((acc, mode) => {
      return globalThis.matchMedia(`(prefers-color-scheme: ${mode})`).matches
        ? (acc += mode)
        : (acc += '');
    }, '');
    if (!mode) return;
    dispatch(
      onDarkMode({
        visible: false,
        darkMode: mode === 'dark',
      }),
    );
  }, []);

  // already declare DARK_MODE
  useEffect(() => {
    if (!DARK_MODE.current) return;
    dispatch(
      onDarkMode({
        visible: false,
        darkMode: DARK_MODE.current === 'true',
      }),
    );
  }, []);

  return {
    visible,
    darkMode,
  };
}
