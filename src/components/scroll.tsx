import { ReactNode, useEffect } from 'react';

interface ScrollWrapperProps {
  children: ReactNode;
  allowScroll?: boolean;
}

function ScrollWrapper ({ children, allowScroll = false }: ScrollWrapperProps) {
  useEffect(() => {
    if (allowScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [allowScroll]);

  return <>{children}</>;
};

export default ScrollWrapper