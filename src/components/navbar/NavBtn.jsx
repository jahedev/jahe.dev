import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBtn({ to, children }) {
  return (
    <Link to={to}>
      <div className='px-5 py-2 bg-zpurple-900 hover:bg-zpurple-500 active:bg-zpurple-900 text-zwhite-100 select-none font-["Josefin_Sans"'>
        {children}
      </div>
    </Link>
  );
}
