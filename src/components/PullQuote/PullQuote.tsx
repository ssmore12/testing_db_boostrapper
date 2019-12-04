import * as React from 'react'
import { css } from 'emotion'

interface PullQuoteProps {
    text : string
    source : string
    style?: string
}

class PullQuoteCustom extends React.Component<PullQuoteProps, {}> {
    
    constructor(props : PullQuoteProps) {
        super(props)
    }
    
    render() {
        const pullQuoteStyle = css`
            display: flex;
            ${this.props.style};
        `
        return (
            <div className={pullQuoteStyle}>
                <h1>“</h1>
                <div
                    className={css`
                    margin-left: 10px;
                    width: calc(100% - 100px);
                `}>
                    {this.props.text}
                </div>
            </div>
            )
        }
    }
    export default PullQuoteCustom;