import * as React from 'react'
import PullQuote from '../PullQuote/PullQuote'
import { css } from 'emotion'
import Video from '../Video/Video'

interface ArticleProps {
    /** The paragraphs of content for the story. */
    content: Content[]
    /** An object of {value: ReactNode} mappings to map custom content types to articles. */
    customTypeComponentMapping?: { [key: string]: React.ComponentType<any> }
    /** Whether to add a dropcap on the first paragraph. */
    dropcap: boolean
    /** custom css for the article component */
    style?: string
}

enum ContentType {
    Text = 'text',
    Video = 'video',
    // Image = 'image',
    Line = 'line',
}

interface Content {
    type: string
    value: string
}

interface Text {
    value: string
}

class Article extends React.Component<ArticleProps, {}> {
    constructor(props : ArticleProps) {
        super(props)
    }
    
    render() {

        const renderedContent = this.props.content.map(
            (content: any, i: number) => {
                console.log(content)
              switch (content.type) {
                case ContentType.Text:
                  const text = content as Text
                  return (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: content.value.value,
                      }}
                    />
                  )
                // case ContentType.Image:
                //   const image = JSON.parse(content.value) as ImageProps
                //   return <Image key={i} {...image} />
                case ContentType.Line:
                  return <hr />
                default:
                  if (
                    this.props.customTypeComponentMapping &&
                    Object.keys(this.props.customTypeComponentMapping).includes(
                      content.type
                    )
                  ) {
                    const Component = this.props.customTypeComponentMapping[
                      content.type
                    ]
                    const data = JSON.parse(content.value)
                    return <Component key={i} {...data} />
                  }
                  break
              }
            }
          )
        
        return (
            <div className={css`
                margin-left: auto;
                margin-right: auto;
                max-width: 620px;
                padding: 1rem;
                text-align: left;
                ${this.props.style};
            `}>
                {renderedContent}
            </div>
        )
    }
}
export default Article;