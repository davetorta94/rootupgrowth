"use client"

import styled from 'styled-components';

export const VideoSample = () => {
  return (
    <>
    <StyledWrapper>

    
            <div className="container">
            <span className="top-border" />
     
            <video className='video' width="320" height="592" autoPlay muted loop >
                <source src={'https://p0czmulpqym8d3xv.public.blob.vercel-storage.com/videotiktok.mp4'} type="video/mp4"/>
            </video>
     
            <span className="right-border top" />
        </div>
    
    </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  /* Container styles */
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px; /* Fixed height */
    width: 285px; /* Fixed width */
    border: 4px solid black; /* Border */
    border-radius: 1rem; /* Rounded corners */
    background-color: #000; /* Light gray background */
    box-shadow: 5px 5px 2.5px 6px rgb(0, 0, 0); /* Shadow effect */
    z-index: 1;
  }

  .video {
    position: absolute;
    z-index: -1;
    display: flex;
    border-radius: 2.5rem;
  }

  .project-description{
    background-color: #301f4b;
    border: 1px solid #CCFF00;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .button-style{
    background-color: #CCFF00;
    border: 1px solid #301f4b;
    border-radius: 10px;
    padding: 5px;
  }

  .button-style:hover{
    background-color: #301f4b;
    border: 1px solid #CCFF00;
    border-radius: 10px;
  }

  .button-style a{
    color: black;
    font-weight: bold;
  }

  .button-style a:hover{
    color: white;
    font-weight: bold;
  }

  /* Top border styles */
  .top-border {
    border: 1px solid black; /* Border */
    background-color: black; /* Black background */
    width: 80px; /* Width of the top border */
    height: 8px; /* Height of the top border */
    border-bottom-left-radius: 1rem; /* Rounded bottom corners */
    border-bottom-right-radius: 1rem; /* Rounded bottom corners */
  }

  /* Right border styles */
  .right-border {
    position: absolute;
    border: 4px solid black; /* Border */
    right: -8px; /* Positioning */
    border-radius: 0.375rem; /* Rounded corners */
  }

  /* Top right border */
  .right-border.top {
    top: 56px; /* Positioning */
    height: 28px; /* Height of the top right border */
  }`;
