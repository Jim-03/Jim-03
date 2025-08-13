import { IoMdMenu } from 'react-icons/io';

function Header ({ openSide }) {
  return (
    <div className='header-container'>
      <IoMdMenu onClick={openSide} />
    </div>
  );
}

export default Header;
