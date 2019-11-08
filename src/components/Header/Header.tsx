import React from 'react'
import { css } from 'emotion'

interface HeaderState {
    title : String
    author : String
    ImageURL : String
    ImageSource: String
    
}

interface HeaderProps {
    title : String
    author : String
    ImageURL : String
    ImageSource : String
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props : HeaderProps) {
        super(props)
        this.state = {
            title : this.props.title, //We were exactly sure what to put for state or how to set it up with kirchoff
            author : "Author",
            ImageURL: this.props.ImageSource,
            ImageSource: this.props.title
        }
    }
// also didnt know exact how to style the title,author,ect b/c we havent trouble running with yarn
    render() {
        return (
            <div>
                <img
                    src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className={css`
                    height: auto; 
                    width: 100%;
                    `}
                />
                <h1
                    className={css`
                        position: absolute;
                        bottom: 30px;
                        left:15;
                        font-size: 30px;
                    `}         
                >
                    {this.props.title}
                </h1>

                <h2 
                className={css`
                    position: absolute;
                    bottom: 25px;
                    left:15;
                    font-size: 12px;
                    `}
                    
                >
                    {this.props.author}
                </h2>
                <footer
                    className={css`
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    font-size: 4px;
                    `}
                    
                >
                    {this.props.ImageSource}
                </footer>
            </div>
        )
    }
}
export default Header;