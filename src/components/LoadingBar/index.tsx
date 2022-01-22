import './LoadingBar.scss';

const LoadingBar = () => {
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
    }
  };
  increaseBar();

  return (
    <div className="progress">
      <div id="bar" className="progress__bar" />
    </div>
  );
};

export default LoadingBar;
