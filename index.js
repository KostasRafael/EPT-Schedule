import express from 'express';
const app = express();

const noParginNoPadding = "margin: 0; padding: 0;"

const collectiveInfo = `<h1>Open Main Event</h1>
                        <h2 style="color: red; ${noParginNoPadding}">December 2</h2>
                        <h3 style="${noParginNoPadding}">12:00 pm <span style="background-color: red;">1/A</span></h3>
                        <h3 style="${noParginNoPadding}">18:00 pm <span style="background-color: red;">1/B</span></h3>

                        <h2 style="color: red; ${noParginNoPadding}">December 3</h2>
                        <h3 style="${noParginNoPadding}">11:00 am <span style="background-color: red;">1/C</span></h3>
                        <h3 style="${noParginNoPadding}">18:00 pm <span style="background-color: red;">1/D</span></h3>


                        <h2 style="color: red; ${noParginNoPadding}">December 4</h2>
                        <h3 style="${noParginNoPadding}">11:00 am <span style="background-color: red;">1/E</span></h3>
                        <h3 style="${noParginNoPadding}">17:30 pm <span style="background-color: red;">1/F</span></h3>

                        <h4><span style="color: red">Starting Stack: </span>30000</h4>
                        <h4><span style="color: red">Plays to: </span> 15% of the field</h4>
                        <h4><span style="color: red">Pays: </span> 15% of the field, whoever qualifies to Day 2</h4>
                        <h4><span style="color: red">Winner: </span> 400000 dollars</h4>
                        <h4><span style="color: red">Players: </span> 3000</h4>
                        <h4><span style="color: red">ITM: </span> 450</h4>
                
                        `


app.get('/open', (req, res) => {
   res.send(collectiveInfo)
   
})

const PORT = process.env.PORT || 5051;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



