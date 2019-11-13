import * as React from 'react'
import { css } from 'emotion'
import { PullQuote } from '@dailybruin/lux'

interface PullQuoteProps {
    content : String
    source : String
}

class PullQuoteCustom extends React.Component<PullQuoteProps, {}> {
    constructor(props : PullQuoteProps) {
        super(props)
    }

    render() {
        return (
            <>
                <PullQuote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat, erat volutpat iaculis auctor, eros nisl tempus lectus, vitae fermentum eros nisi sit amet urna. Fusce lobortis dolor maximus augue tempor, at iaculis quam faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ultricies vulputate lacinia. Duis elementum justo ut felis dapibus scelerisque." />
            </>
        )
    }
}
export default PullQuoteCustom;