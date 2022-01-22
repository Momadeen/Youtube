import useGetContent from 'hooks/useGetContent';
import { useEffect } from 'react';
import './LoadingBar.scss';

const LoadingBar = () => {
  const { loading } = useGetContent();

  const elem = document.getElementById('bar') as HTMLElement | null;

  const increaseBar = () => {
    let width = 1;
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width += 1;

        elem?.setAttribute('style', `width: ${width}%;`);
      }
      if (width === 100) elem?.setAttribute('style', `display: none`);
    }
  };
  useEffect(() => {
    if (loading) increaseBar();
  }, [loading]);

  return (
    <div className="progress">
      <div id="bar" className="progress__bar" />
    </div>
  );
};

export default LoadingBar;
