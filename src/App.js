import React from 'react'
import logo from './logo.svg'
import './App.css'
import PullQuote from './components/PullQuote/PullQuote'
import Article from './components/Article/Article'
import Header from './components/Header/Header'
import Video from './components/Video/Video'

const content = [
{
    type: 'text',
    value: {
    isHTML: false,
    value:
        'Former UCLA doctor James Heaps is facing a growing number of civil suits for alleged sexual abuse.',
    },
},
{
    type: 'text',
    value: {
    isHTML: false,
    value:
        'Two more civil lawsuits from nine women alleging sexual abuse by Heaps were filed Tuesday, according to a press release from Manly, Stewart & Finaldi, the law firm representing the women. This brings the total number of civil suits against Heaps up to at least five. Three of the nine women were UCLA students at the time of the alleged incidents, according to court documents.',
    },
},
{
    type: 'text',
    value: {
    isHTML: false,
    value:
        'Heaps worked at the Ronald Reagan UCLA Medical Center from 2014 to 2018 as an obstetrician-gynecologist and held medical staff privileges there for about 30 years. Prior to his employment at the medical center, he worked at what is now the UCLA Arthur Ashe Student Health and Wellness Center as a part-time doctor from 1983 to 2010.',
    },
},
{
    type: 'image',
    value: {
    imageURL:
        'https://dailybruin.com/images/2018/06/web.sp_.kellihayes.KH_.1-640x426.jpg',
    imageCaption:
        'Anna Tsai, a first-year physics student, designed "The Garden of Eden" for the 18th Fashion and Student Trends runway show, which took place Thursday night in Pauley Pavilion.',
    imageCredit: 'Joe Bruin',
    imageStaffPosition: 'Daily Bruin senior staff',
    imageCreditProfileURL: 'https://google.com',
    },
},
{
    type: 'text',
    value: {
    isHTML: true,
    value:
        '\n<p>Additionally, the city approved an NWWNC-endorsed bid&nbsp;<a href="https://dailybruin.com/2018/04/24/broxton-avenue-proposed-to-turn-into-pedestrian-only-area-for-events/" target="_blank" rel="noreferrer noopener">to transform the south side of Broxton Avenue into a pedestrian plaza</a>, which would permanently close the area off to traffic and reserve it for people and events, Skiles said.</p>\n',
    },
}
]

function App() {
    return (
        <div className="App">
            <Header title="HelloWorld" author="Sarthak" ImageSource="pexels" ImageURL="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <Article content={content}/>
            <Video videoUrl="https://www.youtube.com/watch?v=C2CVlvSSFO4"/>
        </div>
    );
}
    
export default App;
    