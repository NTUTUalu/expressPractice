// import React from 'react'
import React, {useEffect, useState} from 'react';

function Index() {
  const [message, setMessage] = useState("Loading");
  const [people , setPeople] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
     
        setMessage(data.message)
        setPeople(data.people)
      }
    )  .catch(error => {
      console.error('Error fetching data:', error);
      setMessage('Error fetching data');
    });
  },[])//we added an array here so that the request should not run multiple times
  
  return (
    <div>
    <div>{message}</div>
    {
      people.map((person, index) =>(<div key={index}>
        {person}
      </div>))
    }
    </div>
  )
}

export default Index