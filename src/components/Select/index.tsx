import { AiFillCaretDown } from 'react-icons/ai';
import './Select.scss';

const Select = ({ label }: { label: string }) => (
  <div className="select">
    <p>{label}</p>
    <AiFillCaretDown />
  </div>
);

export default Select;
