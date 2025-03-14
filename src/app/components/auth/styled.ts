import { CloseOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000003b;
`;

export const move = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: fixed;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
  }
  span {
    font-size: 12px;
  }
  a {
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
  }
  button.hidden {
    background-color: transparent;
    border-color: #fff;
  }
  form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
  }
  input {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }

  &.active .sign-in {
    transform: translateX(100%);
  }

  &.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: ${move} 0.6s;
  }
  &.active .toggle-container {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
  }
  &.active .toggle-right {
    transform: translateX(200%);
  }
  &.active .toggle-left {
    transform: translateX(100%);
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
`;

export const SocialIcons = styled.div`
  margin: 20px 0;

  a {
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
  }
`;

export const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
`;

export const Toggle = styled.div`
  background-color: #512da8;
  height: 100%;
  background: linear-gradient(to right, #5c6bc0, #512da8);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
`;

export const TogglePanel = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;

  &.toggle-left {
    transform: translateX(-200%);
  }

  &.toggle-right {
    right: 0;
    transform: translateX(0);
  }
  h1 {
    font-size: 28px;
    font-weight: 600;
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: #512da8;
  color: #fff;
  font-size: 12px;
  padding: 7px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;

  &.hidden {
    background-color: transparent;
    border-color: #fff;
  }
  &.toggle {
    background-color: #5339ac;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
`;

export const CloseAuth = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  color: #fff;
`;
