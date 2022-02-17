import styled from 'styled-components';
import PropTypes from 'prop-types';

Status.propTypes = {
  isGreen: PropTypes.bool,
};

export default function Status({ isGreen }) {
  return (
    <Wrapper>
      Status:
      <StatusBot isGreen={isGreen}>
        <span className="sr-only">{isGreen ? 'green' : 'red'}</span>
      </StatusBot>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: #ddd;
`;

const StatusBot = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => (props.isGreen ? 'green' : 'red')};
`;
