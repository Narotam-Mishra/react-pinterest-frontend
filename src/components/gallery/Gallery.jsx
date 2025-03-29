import React from 'react'
import './Gallery.css';
import GalleryItems from '../galleryItems/GalleryItems';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import InfinteScroll from 'react-infinite-scroll-component';

const fetchPins = async ({ pageParam, search, userId, boardId }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await axios.get(
    `${apiUrl}/pins?cursor=${pageParam}&search=${search || ""}&userId=${
      userId || ""
    }&boardId=${boardId || ""}`
  );
  return response.data;
}; 

const Gallery = ({ search, userId, boardId }) => {
  // fetch pin data

  // queries
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins", search, userId],
    queryFn: ({ pageParam=0 }) => fetchPins({ pageParam, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  // if(error){
  //   return "An error has occurred: "+ error.message;
  // }

  if(status === "pending"){
    return "Loading...";
  }

  if(status === "error"){
    return "Something went wrong...";
  }

  console.log("Pins data:", data);

  const allPins = data?.pages.flatMap(page => page.pins) || [];

  return (
    <InfinteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins</h4>}
      endMessage={<h3>All Posts Loaded!!</h3>}
    >
      <div className="gallery">
        {allPins?.map((item) => (
          <GalleryItems key={item._id} item={item} />
        ))}
      </div>
    </InfinteScroll>
  );
}

export default Gallery;