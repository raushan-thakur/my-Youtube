import React from "react";

const commentsData = [
  {
    name: "Raushan Thakur",
    text: "This movie was in danger because of it's release date but now after kas films will get a clear and long run.",
    replies: [],
  },
  {
    name: "Raushan Thakur",
    text: "Jo accident bolta hai unhe bolne do humhe pata h Accident nahi date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
    replies: [
      {
        name: "Raushan Thakur",
        text: "This movie was in danger because of it's release date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
        replies: [],
      },
      {
        name: "Raushan Thakur",
        text: "Jo accident bolta hai unhe bolne do humhe pata h Accident nahi tha sochi samjhi saajish thi.... Jai Shree Ram️",
        replies: [
          {
            name: "Raushan Thakur",
            text: "Movies should be like this acting top level no special effects no overacting no vulgarity pure talent we wanna see movies like this ",
            replies: [
              {
                name: "Raushan Thakur",
                text: "Exited to se this full movie",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Raushan Thakur",
        text: "This movie was in danger because of it's release date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
        replies: [],
      },
    ],
  },
  {
    name: "Raushan Thakur",
    text: "The after kalki 2899 ad is postponed this films will get a clear and long run.",
    replies: [],
  },
  {
    name: "Raushan Thakur",
    text: "In the Year when I was small 2899 ad is postponed this films will get a clear and long run.",
    replies: [],
  },
  {
    name: "Raushan Thakur",
    text: "Jo accident bolta hai unhe bolne do humhe pata h Accident nahi date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
    replies: [
      {
        name: "Raushan Thakur",
        text: "This movie was in danger because of it's release date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
        replies: [],
      },
      {
        name: "Raushan Thakur",
        text: "Jo accident bolta hai unhe bolne do humhe pata h Accident nahi tha sochi samjhi saajish thi.... Jai Shree Ram️",
        replies: [
          {
            name: "Raushan Thakur",
            text: "Movies should be like this acting top level no special effects no overacting no vulgarity pure talent we wanna see movies like this ",
            replies: [
              {
                name: "Raushan Thakur",
                text: "Exited to se this full movie",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Raushan Thakur",
        text: "This movie was in danger because of it's release date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
        replies: [],
      },
    ],
  },
  {
    name: "Raushan Thakur",
    text: "This Swiper library ws not to be used in films will get a clear and long run.",
    replies: [],
  },
  {
    name: "Raushan Thakur",
    text: "This movie was in danger because of it's release date but now after kalki 2899 ad is postponed this films will get a clear and long run.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments : </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
