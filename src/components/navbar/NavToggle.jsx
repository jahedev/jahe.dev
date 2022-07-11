import { BulbOutlined } from '@ant-design/icons';
import React from 'react';

export default function NavToggle() {
  return (
    <div className='w-1/5'>
      <label className='form-switch noselect'>
        <input type='checkbox' />

        <i>
          <BulbOutlined />
        </i>
      </label>
    </div>
  );
}
