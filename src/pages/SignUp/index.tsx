import React, { useRef, useCallback  } from 'react';
import { FormHandles } from '@unform/core'; // tipagem das funçoes do form handle
import { Form } from '@unform/web'; //lidando com formulario
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros'; // ira fazer um forEcha dos erros recebidos e retornar

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo-login-2.png';

import { Container, Content  } from './styles';

interface signInFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null); // usando ref do unform para setar erros

  const handleSubmit =  useCallback(async (data: object) => {
    console.log(data)
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatorio'),
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Deve ser um email valido'),
        password: Yup.string()
          .min(6,'Minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <img src={logoImg} alt="Regionaliz" />

            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="forgot">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
