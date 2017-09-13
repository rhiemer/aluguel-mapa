import styled from 'styled-components';
import { Row,Col } from 'react-bootstrap';


export const NoSpaceRowGeoLocalizacao = styled(Row)`
> div {
  padding-right: 2px;
  padding-left: 0px;
  text-align: left;
  height: 500px;
}
`;

export const ColMapa = styled(Col)`
> div {  
  padding-left: 10px;
  padding-right: 20px;  
}
`;
