import ChannelCard from "@/components/ChannelCard";
import VideoCard from "@/components/VideoCard";
import { Box, Stack } from "@mui/material";
import React from "react";

const Videos = ({ videos }) => {



    return <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {
            videos.map((item, index) => <Box key={index} sx={{}}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>)
        }
    </Stack>;
};

export default Videos;