import {
  FacebookOutlined,
  GithubOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import {
  ButtonStyled,
  CloseAuth,
  Container,
  Form,
  FormContainer,
  Input,
  SocialIcons,
  Toggle,
  ToggleContainer,
  TogglePanel,
  Wrapper,
} from './styled';

import { FormInput, FormPassword } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@store/auth/auth.selector';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import LoginScheme from './scheme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthForm = ({ closeFunc }: any) => {
  const { t } = useTranslation(['common']);

  const [active, setActive] = useState(false);
  const form = useForm<{ email: string; password: string }>({
    resolver: yupResolver(LoginScheme(t)),
  });
  const { handleSubmit } = form;

  const { onLogin } = useAuth();

  const onSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data: any) => {
      console.log(data);

      onLogin(data);
    },
    [onLogin],
  );

  return (
    <Wrapper>
      <CloseAuth onClick={closeFunc} />
      <Container className={classNames({ active: active })}>
        {/* Sign up */}
        <FormContainer className="form-container sign-up">
          <FormProvider {...form}>
            <Form>
              <h1>Create Account</h1>
              <SocialIcons>
                <a
                  href="#"
                  className="icon">
                  <GooglePlusOutlined />
                </a>
                <a
                  href="#"
                  className="icon">
                  <FacebookOutlined />
                </a>
                <a
                  href="#"
                  className="icon">
                  <GithubOutlined />
                </a>
                <a
                  href="#"
                  className="icon">
                  <LinkedinOutlined />
                </a>
              </SocialIcons>
              <span>or use your email for registration</span>
              <Input
                type="text"
                placeholder="Name"
              />
              <Input
                type="email"
                placeholder="Email"
              />
              <Input
                type="password"
                placeholder="Password"
              />
              <ButtonStyled htmlType="submit">Sign Up</ButtonStyled>
            </Form>
          </FormProvider>
        </FormContainer>
        {/* Sign in */}
        <FormContainer className="form-container sign-in">
          <FormProvider {...form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h1>Sign In</h1>
              <SocialIcons>
                <a
                  href="#"
                  className="icon">
                  <GooglePlusOutlined />
                </a>
                <a
                  href="#"
                  className="icon">
                  <FacebookOutlined />
                </a>
                <a
                  href="#"
                  className="icon">
                  <GithubOutlined />
                </a>
                <a
                  href="#"
                  className="icon">
                  <LinkedinOutlined />
                </a>
              </SocialIcons>
              <span>or use your email password</span>
              <FormInput
                name="email"
                type="email"
                placeholder="Email"
              />
              <FormPassword
                name="password"
                placeholder="Password"
              />
              <a href="#">Forget Your Password?</a>
              <ButtonStyled htmlType="submit">Sign In</ButtonStyled>
            </Form>
          </FormProvider>
        </FormContainer>
        <ToggleContainer className="toggle-container">
          <Toggle>
            <TogglePanel className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <ButtonStyled
                className={classNames('toggle')}
                id="login"
                onClick={() => setActive(false)}>
                Sign In
              </ButtonStyled>
            </TogglePanel>
            <TogglePanel className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <ButtonStyled
                className={classNames('toggle')}
                id="register"
                onClick={() => setActive(true)}>
                Sign Up
              </ButtonStyled>
            </TogglePanel>
          </Toggle>
        </ToggleContainer>
      </Container>
    </Wrapper>
  );
};

export default AuthForm;
