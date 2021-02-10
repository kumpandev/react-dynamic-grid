import { FormEvent, KeyboardEvent, Ref } from "react";
import styled from "styled-components";

type Props = {
  inputRef?: Ref<any>;
  value?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => any;
  onBlur?: (event: FormEvent<HTMLInputElement>) => any;
  onFocus?: (event: FormEvent<HTMLInputElement>) => any;
  onKeyPress?: (event: KeyboardEvent<any>) => any;
  type?: string;
  defaultValue?: string;
};

export const Input = (props: Props) => {
  const {
    inputRef,
    value,
    onChange,
    onBlur,
    onFocus,
    type,
    defaultValue,
    onKeyPress,
  } = props;

  return (
    <InputContainer>
      <StyledInput
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type || "text"}
        defaultValue={defaultValue}
        onKeyPress={onKeyPress}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #eee;
  height: 32px;
  border-radius: 24px;
  background-color: #fff;
  padding: 4px 8px;
  border: 1px solid #d1d1d1;
`;

const StyledInput = styled.input`
  padding-left: 10px;
  padding-bottom: 2px;
  flex-grow: 1;
  width: 100%;
  background: none;
  border: none;
  color: #000;
  font-size: 14px;
`;
