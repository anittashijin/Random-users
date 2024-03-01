import React, { useState } from 'react';
import './App.css'

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [boxColor, setBoxColor] = useState('#FFFFFF'); // Initial color white

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      const randomUserIndex = Math.floor(Math.random() * userData.users.length);
      const randomUser = userData.users[randomUserIndex];
      setUserDetails(randomUser);
      changeBoxColor();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const changeBoxColor = () => {
    const randomColor = getRandomColor();
    setBoxColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
   <>
   <div className='out'>
       <button className='btn btn-info' onClick={fetchRandomUser}>Get Random User</button>

      <div className='container first'>
        <div style={{ backgroundColor: boxColor, padding: '20px', width:'50%', height:'100vh', marginTop: '20px' }}>
          {userDetails && (
            <div>
                    <h1 className='text-black text-center'>Random User Details</h1>
  
              <h2 className='text-danger'>User Details</h2>
              <div>
                <p className='text-black'>ID: {userDetails.id}</p>
                <p className='text-black'>First Name: {userDetails.firstName}</p>
                <p className='text-black'>Last Name: {userDetails.lastName}</p>
                <p className='text-black'>Maiden Name: {userDetails.maidenName}</p>
                <p className='text-black'>Age: {userDetails.age}</p>
<div className='image'>
                  {userDetails.image && <img src={userDetails.image} alt="User" />} {/* Display user image if available */}
  
</div>  <div className='bt mt-4'>
                  <button className='btn btn-info' onClick={fetchRandomUser}>Get Random User</button>
    
  </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
   </>
  );
}

export default App;