"use client"

import React from 'react'
import Link from 'next/link';
import { Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '@/utils/constants';
import Image from 'next/image';

const VideoCard = ({ video: { id: {
    videoId }, snippet
} }) => {
    const imgLink = snippet?.thumbnails
        ?.high?.url;
    console.log(imgLink);

    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', }}>
            <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={imgLink}
                    sx={{ width: { sm: '358px', xs: '100%' }, height: 180 }} />
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                    <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography color="white" variant='subtitle1' fontWeight="bold ">
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard

