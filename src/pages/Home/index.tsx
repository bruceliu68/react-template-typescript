import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { connect } from "react-redux";

class Home extends PureComponent<any, any> {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: "global/changeState",
            payload: {
                count: 2
            }
        });
    }

    linkTo = () => {
        const { history } = this.props;
        history.push("/about");
    }

    render() {
        const { globalState } = this.props;

        return (
            <Button type="primary" onClick={this.linkTo}>
                Link to about
                {globalState.count}
            </Button>
        )
    }
}

const mapStateToProps = (state: any) => ({
    globalState: state.global
});

export default connect(mapStateToProps)(Home);

