import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import Tooltip from '../../components/Tooltip';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest} ) => {
  const inputRef = useRef<HTMLInputElement>(null); // para assim ter acesso ao elemento do input
  const [isFocused, setIsFocused] = useState(false); // estado criado para salvar o foco do input
  const [isField, setIsField] = useState(false); // estado para salvar se o campo foi preenchido
  const { fieldName, defaultValue, error, registerField } = useField(name);
  // utilizando o unforme para lidar com formularios no react

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);

  }, []);

  // sempre que for necessario criar uma função dentro do componente devemos usar o
  // useCallbeck

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  // usando o unfor para registar os campos, ref e semelhante ao query selector o JS
  // path dira .value para assim capturar o valor do campo

  return (
    <Container isErrored={!!error} isField={isField} isFocused={isFocused}>
      {Icon && <Icon size={20}/>}
      <input
        onFocus={handleInputFocus} // controla quando o input recebe o foco
        onBlur={handleInputBlur} // controla quando o input perde o foco
        defaultValue={defaultValue}
        ref={inputRef} {...rest}
      />

      {error &&
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>}
    </Container>
  );
}

export default Input;
