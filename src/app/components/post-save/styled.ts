import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: block;
  height: calc(100vh - 180px);
  overflow-y: scroll;
  .container {
    padding: 0 26px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    min-height: calc(100vh - 180px);
    @media (max-width: 1024px) {
      grid-template-columns: auto;
    }
  }
  .pagination {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }
`;
