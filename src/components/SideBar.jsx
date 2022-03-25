/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "./Buttons/FullButton";
import AddPost from "./Sections/AddPost";
import DeletePost from './Sections/DeletePost'
import './Sections/Hover.css'
import EditPost from "./Sections/EditPost";
import ReactPaginate from 'react-paginate';
// import { FixedSizeList } from 'react-window';

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
    await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
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
            <div >
              <label className="flexCenter white radius8" style={cardStyles.userName}>
               <AddPost/>
              </label>
            </div>
          <br />
          <br />
          <form >
          <div style={cardStyles.container}>
          <div style={cardStyles.container2}>
           <label style={cardStyles.userName} >
              <EditPost/>
           </label>
           </div>    
          </div>
          
        </form>
      </div>
    </div>
  );
}


export default Posts;


