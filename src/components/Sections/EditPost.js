import React, { useEffect, useState } from 'react'
import FullButton from '../Buttons/FullButton'
import styled from "styled-components";



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

function EditPost() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id,setId]=useState(null)

  useEffect(() => {
    getPosts();
  }, [])
  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setPosts(resp)
        setTitle(resp[0].title)
       
        setBody(resp[0].body)
        setId(resp[0].id)
      })
    })
  }
  function updateUser()
  {
    let item={title,body}
    console.warn("item",item)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getPosts()
      })
    })
  }
  return (
    <div className="flexCenter white radius8" >
      <table border="1" style={{ float: 'right' }}>
      </table>
      <div>
      <input
          style={cardStyles.userName} type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br /><br />
        <textarea
          style={cardStyles.container2} type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} /> <br /><br />
          <BtnWrapper style={{float:"right"}} >
        <FullButton onClick={updateUser} title="Edit"/>  
        </BtnWrapper>
      </div>
    </div>
  );
}
export default EditPost;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;