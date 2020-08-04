import { React, Component } from "react"
import axios from "axios"
import ClapButton from 'react-clap-button';
import styled, { css } from 'styled-components'
import { ThumbsUp } from 'react-feather'


const API = "https://dyf2090bn3.execute-api.us-east-2.amazonaws.com/Prod/applause-button";

const CustomIcon = styled(ThumbsUp)`
  stroke: ${({ theme: { secondaryColor } }) => secondaryColor};
  stroke-width: 1px;
  fill: none;
  ${({ isClicked, theme: { secondaryColor } }) => isClicked && css`
      fill: ${secondaryColor};
      stroke: white;
    `};
`

const SocialReactions = css`{
    display: flex;
    align-items: center;
    justify-content: center;
  }  
  `


export default class ClapSocialButton extends Component {

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

        const updateClaps = ({ count, countTotal }) => {
            axios.put(`${API}` + (this.props.url ? `?url=${this.props.url}` : "")).then(
                (response) => {
                    this.setState({ data: parseInt(response.data) });
                });
        };

        return (
            <div>
                <div css={SocialReactions}>
                    <ClapButton
                        count={0}
                        maxCount={10}
                        countTotal={this.state.data}
                        isClicked={false}
                        onCountChange={updateClaps}
                        iconComponent={props => <CustomIcon {...props} size={38} />}
                    />                    
                </div >
                <div css={SocialReactions}>{this.state.data} likes</div>
                <div css={SocialReactions}>Hit 'Like'</div>   
            </div>
        );
    }

}