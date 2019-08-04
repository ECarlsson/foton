import React from 'react';

export default function ImageThumbnail(props) {
  const albumId = props.album;
  const image = props.image;
  const url = `/gallery/files/${albumId}/thumbnails/${image}`;

  function changeToFallbackImage(event) {
    const fallbackUrl = `/gallery/files/${albumId}/${image}`;
    event.target.onError = null;
    event.target.src = fallbackUrl;
  }
  
  return (
    <div className="thumbnail">
      <img 
        src={url} 
        alt={image} 
        onError={changeToFallbackImage}
        onClick={props.onClick}
      />
    </div>
  );
}