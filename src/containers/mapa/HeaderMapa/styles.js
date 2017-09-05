import styled from 'styled-components';
import { Row,Table,Well } from 'react-bootstrap';

export const Titulo = styled.th`
text-align: center;
`;

export const NoSpaceRowBuscarLocalidade = styled(Row)`
> div {
  padding-right: 0;
  padding-left: 32px;
  text-align: left;
}
`;

export const ScrollWell = styled(Well)`
overflow-x: auto;
text-align: center;
height: 115px;
padding: 5px !important;
> div {
  font-size: 10px;
  vertical-align: middle;
  text-align: center;
}
`;

export const StatusTable = styled(Table)`

  border-collapse: separate;

  tbody > tr > td {
    border: none !important;
    vertical-align: top !important;
    padding-top: 15px !important;
  }

  td {
    text-align: center;
    padding: 0;
  }

  td > span:nth-child(2) {
    font-size: 10px;
    display: block;
  }

  .fa {
    font-size: 18px !important;
  }

  th {
    background-color: #f5f5f5;
    font-weight: normal;
    padding: 0;
    font-size: 12px;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    text-align: center;
  }
`;