import { React, Component } from "react"
import axios from "axios"

const API = "https://dyf2090bn3.execute-api.us-east-2.amazonaws.com/Prod/applause-button";

export default class Reactions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: 0,
        }

    }

    componentDidMount() {
        axios.get(`${API}` + (this.props.url ? `?url=${this.props.url}` : "")).then(
            (response) => {
                this.setState({ data: parseInt(response.data) });
            });
        return this.state;
    }

    render() {
        return (
            <div>
                {this.state.data} Likes
            </div >
        );
    }

}