import styled from 'styled-components';

export const FilterInput = styled.input`
  padding: ${p => p.theme.spacing(2)};
  font: inherit;
  border-radius: ${props => props.theme.radii.md};
  margin-bottom: ${p => p.theme.spacing(4)};

  &::placeholder {
    color: ${props => props.theme.colors.gray};
    opacity: 0.5;
  }
`;
