import React, { forwardRef } from 'react'
import './SearchResultList.style.css'
import { Track } from '../../../models/track';
import { Button, Table, TableBody, TableCell, TableRow, Typography, useMediaQuery } from '@mui/material';

interface SearchResultListProps {
    track: Track;
}

const SearchResultList = forwardRef<HTMLTableRowElement, SearchResultListProps>(
  ({ track }, ref) => {
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    // <TableBody className='searchResultTable'>
      // {list.map((track, index) => (
        <TableRow ref={ref}>
          <TableCell>
            <span className='searchResultImgContainer'>
              <img className='searchResultImg' src={track.album?.images[0].url ?? '/noimg.png'}></img>
              <span className='searchResultImgInfoContainer'>
                <Typography fontWeight={700}>{track.name ?? 'No name'}</Typography>
                <Typography color='text.secondary'>{track.album?.artists[0].name ?? 'Unknown'}</Typography>
              </span>
            </span>
            </TableCell>
            {isMobile ? '' : <TableCell>{track.album?.name}</TableCell>}
            <TableCell>
              <Button variant='outlined'>추가</Button>
            </TableCell>
        </TableRow>
      // ))}
    // </TableBody>
  )
}
);

export default SearchResultList
