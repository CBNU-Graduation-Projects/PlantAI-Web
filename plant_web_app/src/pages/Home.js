import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>식물상태 진단 시스템</h1>
      <div>
        <Link to="/upload">[ 드래그에서 사진 입력 (multer 넣기) ]</Link>
        <span> | </span>
        <Link to="/plantinfo">[ 식물 정보 입력 ]</Link>
      </div>
      <hr />
      <div>
        <Link to="/plantdiagnosis">[ 식물 상태 진단 ]</Link>
      </div>
    </div>
  );
};

export default Home;