import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo-login-3.png';

import { Container, Content  } from './styles';

interface signInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit =  useCallback(async (data: signInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Deve ser um email valido'),
        password: Yup.string()
          .required('Senha obrigatoria'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <img src={logoImg} alt="Regionaliz" />

            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
