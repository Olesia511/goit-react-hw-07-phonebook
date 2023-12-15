import styled from 'styled-components';

import { ErrorMessage, Field, Form } from 'formik';

export const ErrMsg = styled(ErrorMessage)`
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.brown};
  opacity: 0.8;
  font-size: ${props => props.theme.fontSize.fs20};
  padding: ${p => p.theme.spacing(1)};
  width: auto;
  border-radius: ${props => props.theme.radii.md};
`;

export const InputForm = styled(Field)`
  padding: ${p => p.theme.spacing(2)};
  font: inherit;
  border-radius: ${props => props.theme.radii.md};

  &::placeholder {
    color: ${props => props.theme.colors.gray};
    opacity: 0.5;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: ${p => p.theme.spacing(5)};
`;

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(10)};
`;

export const ButtonForm = styled.button`
  width: auto;
  height: auto;
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-right: ${p => p.theme.spacing(6)};
  white-space: nowrap;
  border-radius: ${props => props.theme.radii.lg};

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.beige};
  }
`;
