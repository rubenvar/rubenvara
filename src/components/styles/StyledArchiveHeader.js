import styled from 'styled-components';

const StyledArchiveHeader = styled.div`
  margin: 0 0 36px;
  h1 {
    margin-bottom: 17px;
    span {
      background: ${props => props.theme.grey200};
      padding: 0 4px;
    }
  }
  p {
    color: ${props => props.theme.grey700};
    &.updated {
      color: ${props => props.theme.grey400};
      font-size: 0.85rem;
      font-style: italic;
    }
  }
`;

export default StyledArchiveHeader;