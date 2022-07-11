import React from 'react';

export default function NavLinks({ children }) {
  return (
    <ul className='w-full inline-flex justify-end items-center mr-12'>
      {children}
    </ul>
  );
}
