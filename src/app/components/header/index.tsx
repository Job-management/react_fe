// src/components/Header.js
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { WrapperStyled } from './styled';
import AuthForm from '@components/auth';
const Header = () => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);
  return (
    <>
      {isOpenAuth && <AuthForm closeFunc={() => setIsOpenAuth(false)} />}
      <WrapperStyled>
        <header className="bg-white text-black w-full">
          <div className="flex justify-between items-center p-4 w-full">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold w-[10rem]">Career Connect</div>
              <nav className="flex space-x-4">
                <div className="hover:text-gray-400 cursor-pointer">
                  <a href="#a">Find jobs</a>
                </div>
                <div className="hover:text-gray-400 cursor-pointer">
                  <a href="#a">VietnamSalary</a>
                </div>
                <div className="hover:text-gray-400 cursor-pointer">
                  <a href="#a">Career Opportunity</a>
                </div>
              </nav>
            </div>
            <div className="flex justify-between items-center w-36">
              <div className="flex hover:text-gray-400 cursor-pointer w-[5.5rem] justify-between">
                <div className="w-[26px] h-[26px] rounded-[50px] bg-[#5d677a] text-white flex justify-center items-center">
                  <UserOutlined />
                </div>
                <a onClick={() => setIsOpenAuth(true)}>Sign up</a>
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <a onClick={() => setIsOpenAuth(true)}>Login</a>
              </div>
            </div>
          </div>
        </header>
        <div className="border-bottom"></div>
      </WrapperStyled>
    </>
  );
};

export default Header;
