import * as React from 'react'

interface ComponentState {
    title : String
    author : String
}

interface ComponentProps {
    title : String
    author : String
}

class ComponentName extends React.Component<ComponentProps, ComponentState> {
    constructor(props : ComponentProps) {
        super(props)
        this.state = {
            title : "TEST",
            author : "Sarthak"
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.state.title}
                </div>
                <h1>

                </h1>
            </>
        )
    }
}
export default ComponentName;