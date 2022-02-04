import styled from 'styled-components'

const Grid = styled.div`
  border: 1px solid red;
`;

const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `
}

const Col = styled.div`
  flex: ${(props) => props.size};
  /* border: 1px solid green;
  padding: 16px; */
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)}
`;

function App() {
  return (
    <div>
      <Grid>
        <Row>
          <Col size={1}>
            A nice column
          </Col>
        </Row>
        <Row>
          <Col size={2}>
            A twice bigly column
          </Col>
          <Col size={1} collapse="xs">
            Poof!
          </Col>
          <Col size={1}>
            Foofaloopa
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
