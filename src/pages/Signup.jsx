import React from 'react';

import { Input } from '../elements';

const Signup = props => {
  return (
    <form>
      <p>
        <label htmlFor=''>이메일</label>
        <Input />
      </p>
      <p>
        <label htmlFor=''>닉네임</label>
        <input type='text' />
      </p>
      <p>
        <label htmlFor=''>MBTI</label>
        <select name='' id=''>
          <option value=''>INTJ</option>
          <option value=''>INTP</option>
          <option value=''>ENTJ</option>
          <option value=''>ENTP</option>
          <option value=''>INFA</option>
          <option value=''>INFP</option>
          <option value=''>ENFJ</option>
          <option value=''>ENFP</option>
          <option value=''>ISTJ</option>
          <option value=''>ISFJ</option>
          <option value=''>ESTJ</option>
          <option value=''>ESFJ</option>
          <option value=''>ISTP</option>
          <option value=''>ISFP</option>
          <option value=''>ESTP</option>
          <option value=''>ESFP</option>
        </select>
      </p>
      <p>
        <label htmlFor=''>비밀번호</label>
        <input type='password' />
      </p>
      <p>
        <label htmlFor=''>비밀번호확인</label>
        <input type='password' />
      </p>
    </form>
  );
};

export default Signup;
