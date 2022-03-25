/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddPost from "./Sections/AddPost";
import DeletePost from './Sections/DeletePost'
import './Sections/Hover.css'
import EditPost from "./Sections/EditPost";

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
  maindiv: {
    display: "flex",
  },
 
};




const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page = 1) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = (e) => {
    console.log(e.selected);
    setLoading(true);
    getPost(e.selected + 1);
  }
   const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  
  

  console.log(posts)
  return (
   
      <div >
       
        
       <div >
         <br/>
         <br/>
         <br/>
         <div style={cardStyles.container2} >
           <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={cardStyles.container2} >
          <AddPost/>
          </div>
            </div>       
          <br />
          <br/>
          <div style={{float:"right"}}>
          <div style={cardStyles.container2} >
          {/* <EditPost/> */}
          </div>
          </div>
          </div>
          
          <br />
          <br />
          <form >
          <br/>
         
          {
          posts?.map(function(item, key) {             
             return (
               <div className="flexCenter white radius8" style={cardStyles.container} >
           <div id="cspace" >
             <p key = {key}>
<div style={{float:'right'}}>
      
           </div>
      <p >USERNAME<span style={{width:"90px"}}>  {item.userId} </span>.</p> 
    <p><span style={{color: "green"}}>{item.title} .</span></p>
    <p >{item.body}.</p>
    
    </p>
    {" "}
    <br/>
   
    </div>
    <span>
                <DeletePost
                style={{color: "green"}}
                id={item.id}
                key={item.id}
                onDelete={onDelete}
                />
            </span>
</div>

    )
}  
   )
}
         <br/>
            
          
        </form>
      </div>
    </div>
  );
}


export default Posts;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;


