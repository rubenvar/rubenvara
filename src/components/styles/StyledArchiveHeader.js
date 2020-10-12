import styled from 'styled-components';

const StyledArchiveHeader = styled.div`
  margin: 0 0 ${(props) => props.theme.gap100};
  @media only screen and (min-width: 480) {
    margin-bottom: ${(props) => props.theme.gap100};
  }
  h1 {
    margin-bottom: ${(props) => props.theme.gap30};
    @media only screen and (min-width: 480) {
      margin-bottom: ${(props) => props.theme.gap70};
    }
    span {
      background: ${(props) => props.theme.grey200};
      padding: 0 ${(props) => props.theme.gap10};
    }
  }
  p {
    color: ${(props) => props.theme.grey600};
    margin: 0 0 ${(props) => props.theme.gap50};
  }
`;

export default StyledArchiveHeader;
