import React from 'react';
// import { MdShowChart } from 'react-icons/lib/md/show-chart';
// import {FaBeer} from 'react-icons/lib/fa';
import { MdShowChart } from 'react-icons/md'

class Statistics extends React.Component {
    render() {
        return(
            <React.Fragment>
                <p>This is the statistics page for {this.props.match.params.shortid}</p>
                <p>Clicks <MdShowChart /></p>
            </React.Fragment>
        )
    }
}

export default Statistics;