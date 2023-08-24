import { Stack } from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
import MovieIcon from '@mui/icons-material/Movie';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import PaidIcon from '@mui/icons-material/Paid';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { data } from '../Constant/data'

const Interest = () => {

  return (
    <Stack direction="column" spacing={2} className="InterestCard">
        <h2
                style={{
                padding: 0,
                margin: 0
            }}>
                Interest
        </h2>

        <p className='InterestList'>
            Books | Movies and Tv series | Music | Sports | Digital Currency and Art | Drones
        </p>
        <p> {data.code} 
        <BookIcon fontSize='small'/> Daily Stoic By Ryan Holiday </p>
        <p> {data.code}
        <MovieIcon fontSize='small'/> MCU & Breaking Bad</p>
        <p>{data.code} 
        <MusicNoteIcon /> Music By Camila Cabello</p>
        <p> {data.code} 
        <SportsCricketIcon fontSize='small' /> Cricket and Vollyball </p>
        <p>{data.code} 
        <PaidIcon fontSize='small' /> Etherium and CryptoPunks </p>
        <p>{data.code} 
        <PaidIcon fontSize='small' /> DJI Mavic 3 </p>
    </Stack>
  )
}

export default Interest