import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './PieChart.jsx'
import { TextField, Table, TableBody, TableCell, TableRow, Grid, CardActionArea, Button, Card, CardContent, CardMedia, Typography, Paper } from '@mui/material';

function LyricsBox() {
  const [lyrics, setLyrics] = useState('');
  const [checkEnabled, setCheckEnabled] = useState(false);
  const [genre, setGenre] = useState('');
  const [probabilities, setProbabilities] = useState({});

  useEffect(() => {
    if (lyrics.length != 0) {
       console.log('length not 0');
      setCheckEnabled(true);
    } else {
        console.log('length is 0');
      setCheckEnabled(false);
    }
  });

  function checkGenre() {
      console.log("Checking genre...");
      setGenre('Checking...');
      axios.post('http://localhost:9090/lyrics/predict', lyrics)
        .then((response) => {
              var result = response.data;
              var genre = result.genre;
              setGenre(genre);
              console.log(result);

              const probabilities = [];
              Object.entries(result).forEach(([key, value]) => {
                if (key != "genre") {
                  probabilities.push({ x: key.replace('Probability', ''), y: value });
                }
              });
              probabilities.sort(function (a, b) {
                return b.probability - a.probability;
              });
              console.log(probabilities);
              setProbabilities(probabilities);
          },
          (error) => {
              console.log(error);
          }
      );
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <TextField
                id="outlined-multiline-static"
                label="Enter song lyrics..."
                multiline
                rows={10}
                placeholder="lyrics..."
                fullWidth
                onChange={event => setLyrics(event.target.value)}
          />
          <p/>
          <Button variant="contained" disabled={!checkEnabled} onClick={checkGenre}>Check</Button>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={4}>
                <PieChart data={probabilities}/>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/music.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Genre
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {genre}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
            </Paper>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>

    </div>
  );
}

export default LyricsBox;