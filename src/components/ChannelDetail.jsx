import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelInfo(data.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <>
      <Box>
        <Box>
          <div 
            style={{
              background: 'rgb(128,222,255) linear-gradient(109deg, rgba(128,222,255,1) 0%, rgba(197,0,255,1) 61%, rgba(255,70,245,1) 100%)',
              height: '250px',
              zIndex: '10',
            }}
          />
            <ChannelCard channel={channelInfo} marginTop="-115px" subscriberCount={channelInfo ? channelInfo.statistics.subscriberCount + " subscribers" : 0}/>
        </Box>
        <Stack position="absolute" direction="row" flexWrap="wrap" justifyContent="center" gap={2} sx={{backgroundColor:"black"}}>
        {videos !== null && videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        ))}
      </Stack>
      </Box>
    </>
  );
};

export default ChannelDetail;
