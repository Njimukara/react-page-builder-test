import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableInput from './components/DraggableInput';
import DraggableText from './components/DraggableText';
import Preview from './components/Preview';
import Header from './components/Header';
import { Box, Grid, Typography } from '@mui/material';
import DraggableButton from './components/DraggableButton';

function App() {
    return (
        <DndProvider backend={HTML5Backend} >
          <Box style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <div >
            <Header />
          </div>
          <div style={{margin: '10px 0', backgroundColor: '#f7fafc', flex: 1, }}>
            
            <Grid container spacing={1} height= '80vh'>
              {/**************************
                          *************** components  *************
                                                  ****************************/}
              <Grid xs={4} item style={{ display: 'flex', justifyContent: 'center'}}>
                <Box style={{border: '1px solid #3487bf', borderRadius: '10px',  padding: '3%', backgroundColor: '#fff', height: '100%', width: '90%'}}>
                  <Typography style={{padding: '2%', margin: '10px 0', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}}>Components</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <DraggableInput />
                    </Grid>
                    <Grid item xs={5}>
                      <DraggableText />
                    </Grid>
                    <Grid item xs={5}>
                      <DraggableButton style={{marginTop: 10}} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/**************************
                          *************** Preview  *************
                                                  ****************************/}
              <Grid xs={8} item style={{ display: 'flex', justifyContent: 'center', }}>
                <Box style={{border: '1px solid #3487bf', borderRadius: '10px',  padding: '3%', backgroundColor: '#fff',maxHeight: '100%', width: '50%'}}>
                  <Typography style={{marginBottom: '1%', textAlign: 'center'}}>Place Components to design</Typography>
                  <Preview />
                </Box>
              </Grid>

            </Grid>
          </div>

          </Box>
        </DndProvider>
      );
}

export default App