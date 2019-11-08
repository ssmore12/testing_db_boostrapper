import * as React from 'react';
import { css } from 'emotion';

interface CardGridProps {
  Cards: {
    Blurb: String,
    Title: String,
    ImageURL: String,
    Contributor: String,
  }[]
}

function ArticleCard(props : any) {
  return (
    <div>
      <div>{props.Card.Title}</div>
      <div>{props.Card.Blurb}</div>
      <img src={props.Card.ImageURL}/>
      <div>{props.Card.Contributor}</div>
    </div>
  );
}

class CardGrid extends React.Component<CardGridProps, {}> {

  render() {

    const { Cards } = this.props;
    return (
      <div className={css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 40px;
        padding-left: 2em;
        padding-right: 2em;
        // media queries
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
      `}>
        {Cards.map((card) => <ArticleCard Card={card}/>)}
      </div>
    );
  }
}

export default CardGrid;