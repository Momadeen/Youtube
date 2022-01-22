// import ClipLoader from 'react-spinners/ClipLoader';
import './Spinner.scss';

export const Spinner = () => (
  <div className="spinner-container">
    {/* <ClipLoader color="gray" size={30} /> */}
    <div className="spinner-container__icon" />
    <p>Loading</p>
  </div>
);
