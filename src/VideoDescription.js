import React, { createContext, useState } from 'react';
import './App.css';
export const Context = createContext({});

function VideoDescription() {
  return (
    <article className="description">
        <p>This is the article</p>
    </article>
  );

}

export default VideoDescription