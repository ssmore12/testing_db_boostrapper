import * as React from 'react'
import { css } from 'emotion'
import ReactPlayer from 'react-player'

interface VideoProps {
    videoUrl: string
}

class Video extends React.Component<VideoProps, {}> {
    
    constructor(props : VideoProps) {
        super(props)
    }
    
    render() {
        return (
            <ReactPlayer url={this.props.videoUrl}/>
        )
    }
}
export default Video;