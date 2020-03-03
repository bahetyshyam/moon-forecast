import React from 'react';
import { Container} from '@material-ui/core';


class Forecast extends React.Component {
    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col s12">
                        <div className="card light-blue accent-2">
                            <div className="row card-content">
                                <div className="col s6 center">
                                    <p><b>Moon Rise</b></p>
                                    <p>{this.props.moonrise}</p>
                                </div>
                                <div className="col s6 center">
                                    <p><b>Moon Set</b></p>
                                    <p>{this.props.moonset}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Forecast;