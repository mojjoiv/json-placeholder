import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from '../Buttons/FullButton'
import { FaTrash, FaPencilAlt, FaRegEye, FaPlus } from 'react-icons/fa';


const cardStyles = {
  container: {
    display: "flex",
    // height: 100,
    // width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 30,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  container2: {
    display: "flex",
    height: 100,
    width: 400,
 
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
      flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chooseFile:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '20vw',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    color: 'green',
},
  userName: {
    fontWeight: "bold",
  },
 
};

const AddPost = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
        const [message, setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setTitle("");
          setBody("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
      console.log('success')
    };
  
    return (
      <div className="flexCenter white radius8" >
        <form onSubmit={handleSubmit}>
          <input
          style={cardStyles.userName}
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
           <br/>
          <textarea
          style={cardStyles.container2}
            type="text"
            value={body}
            placeholder="content"
            onChange={(e) => setBody(e.target.value)}
          />
          <br/>
          <BtnWrapper style={{float:"right"}} >
            <FullButton  type="submit" title="Create Post" /> 
          </BtnWrapper>
  
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    );
  }

export default AddPost;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;



