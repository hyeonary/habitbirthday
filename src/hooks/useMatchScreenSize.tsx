import { useMediaQuery } from 'react-responsive';
import { findLastKey as _findLastKey } from 'lodash-es';
import { fromPairs as _fromPairs } from 'lodash-es';

interface IScreenSize {
  isXSmall?: boolean;
  isSmall?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  isXLarge?: boolean;
  isXXLarge?: boolean;
}

/**
 * @returns exactMatchedScreen: 조건을 통과하는 마지막 분기점 스크린사이즈
 * @returns isXSmall: mobile (576px이상)
 * @returns md: desktop (768px이상)
 */

function useMatchScreenSize() {
  const matchesScreen = {
    isXSmall: useMediaQuery({ minWidth: 396 }),
    isSmall: useMediaQuery({ minWidth: 576 }),
    isMedium: useMediaQuery({ minWidth: 768 }),
    isLarge: useMediaQuery({ minWidth: 992 }),
    isNotLarge: useMediaQuery({ maxWidth: 992 }),
    isXLarge: useMediaQuery({ minWidth: 1200 }),
    isXXLarge: useMediaQuery({ minWidth: 1400 }),
  };

  const exactMatchedScreen = _fromPairs([
    [
      _findLastKey(matchesScreen, (s) => {
        if (s) return s;
      }),
      true,
    ],
  ]);

  return { exactMatchedScreen, ...matchesScreen };
}

export default useMatchScreenSize;
