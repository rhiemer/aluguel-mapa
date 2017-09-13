import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    Panel,
    Button
} from 'react-bootstrap';
import HeaderMapa from './HeaderMapa'
import GeoLocalizacao from './GeoLocalizacao'
import FiltroMapa from './FiltroMapa'
import {RowGeoLocalizacao,RowFiltro} from './styles'

export default class Mapa extends Component {


    render() {       
        return (            
          <Form vertical>
                <FormGroup>                    
                    <Row>
                       <Col sm={12}>
                         <HeaderMapa/>
                       </Col>
                    </Row>
                   <RowFiltro> 
                      <Col sm={12}>
                          <FiltroMapa/>
                      </Col>
                    </RowFiltro>
                    <RowGeoLocalizacao>
                        <Col sm={12}>
                            <GeoLocalizacao/>
                        </Col>
                    </RowGeoLocalizacao>                  
                </FormGroup>
            </Form>             
        );
    }
}
