import React from 'react';
import { MdShowChart } from 'react-icons/md'
import {urlStatsAction} from "../_actions/urlstats.action";
import { connect } from 'react-redux';
import {Alert, Col, Container, Row} from "reactstrap";
import Moment from 'react-moment';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";


class Statistics extends React.Component {
    componentDidMount() {
        this.props.dispatch(urlStatsAction.getByID(this.props.match.params.shortid));
    }

    render() {
        console.log(this.props);
        if (!this.props.loading && this.props.stats)
        {
            return(
                <React.Fragment>
                    <Container>
                        <Row>
                            <Col>
                                <p className={'muted'}>Created on <Moment>{this.props.stats.created_at}</Moment></p>
                                <h3><a href={this.props.stats.short_domain + "/" + this.props.match.params.shortid}>{this.props.stats.url}</a></h3>
                                <p>{this.props.stats.count} Clicks <MdShowChart /></p>
                            </Col>
                        </Row>
                        <Row>
                            <StatsChart daily_stats={this.props.daily_stats} />
                        </Row>
                    </Container>
                </React.Fragment>
            );
        }

        if (!this.props.loading && this.props.error) {
            return(
                <React.Fragment>
                    <Container>
                        <Row>
                            <Col>
                                <Alert color={'danger'}>There was an error while loading the data!</Alert>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            )
        }

        return null;
    }
}

const StatsChart = (props) => {
    return(
        <BarChart width={600} height={300} data={props.daily_stats}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="day"/>
            <YAxis dataKey="clicks" />
            <Tooltip />
            <Legend />
            <Bar dataKey="clicks" fill="#801515" />
            <Bar dataKey="day" fill="#D46A6A" />
        </BarChart>
    )
};



function mapStateToProps(state) {
    const { stats, daily_stats, loading, error } = state.urlstats;
    return {
        stats,
        daily_stats,
        loading,
        error
    };
}

export default connect(mapStateToProps)(Statistics);