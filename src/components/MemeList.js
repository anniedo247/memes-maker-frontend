import React from "react";
import { Card, CardColumns } from "react-bootstrap";

const MemeList = ({ memes, showDetail }) => {
  return (
    <>
      {memes?.length > 0 ? (
        <CardColumns>
          <ul className="list-unstyled">
            {memes.map((meme) => (
              <MemeCard meme={meme} showDetail={showDetail} key={meme.id} />
            ))}
          </ul>
        </CardColumns>
      ) : (
        <p className="text-center">There are no memes</p>
      )}
    </>
  );
};

const MemeCard = ({ meme, showDetail }) => {
  return (
    <Card
    border="secondary"
    className="mouse-hover mb-4"
    style={{width:"18em"}}
    onClick={() => showDetail(meme)}
    >
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_BACKEND_API}/${
        meme.outputMemePath.split("public/")[1]
      }?${meme.updateAt}`}
      />
    </Card>
  );
};

export default MemeList;
