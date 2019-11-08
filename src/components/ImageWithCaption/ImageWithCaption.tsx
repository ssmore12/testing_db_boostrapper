import * as React from 'react'
import {
 Image
} from '@dailybruin/lux'

//felt like this was too simple, but we weren't sure really how we would implement states or props into this one

class ImageWithCaption extends React.Component {
    render() {
      return (
        <figure>
            <img>src="https://i.pinimg.com/originals/97/f4/56/97f4562ab00502f380a77903f6666113.jpg"
            width="600" height="540" alt="Bald Eagle"</img>
            <figcaption>Bald Eagle</figcaption>
        </figure>
      );
    }
  }
