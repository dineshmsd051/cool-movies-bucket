import styled from 'styled-components';


export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 40px 20px; 
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: white;
`;

export const Divider = styled.hr`
  color: #ffffff;
  width: 100px;
`;
