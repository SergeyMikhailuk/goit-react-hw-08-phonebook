import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 10px;
  span {
    margin-right: 8px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`;
