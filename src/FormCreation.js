import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function FormCreation() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pin, setPin] = useState("");
  const [selectedValue, setSelectedValue] = useState('');
  const [formstates, setFormStates] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  console.log(selectedValue)

  return (
    <Grid container xs={12} xl={12}>
      {/* display:{xs:"none",xl:"flex"}, */}
      <Grid container item xs={12} lg={7} xl={4} sx={{bgcolor:{xs:"brown",sm:"brown",md:"brown",lg:"brown",xl:"brown"},display:{xs:"flex",sm:"flex",xl:"flex"} }}>
        <Grid item xs={10}>
          <Typography variant="h3" component="h2" sx={{ paddingTop: "50px",fontSize:{xs:"20px",xl:"40px"},marginLeft:{xs:"60px",xl:"60px"} }}>
            FORM
             SUBMISSION:
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize:{xs: "15px" , xl:"20px"},
              padding: "10px 160px 10px 0px",
              marginRight:{xs:"0" ,xl:"16%"},
            }}
          >
            First Name:
          </Typography>
          <TextField
            id="outlined-basic"
            type="name"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
              bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{
              padding: "20px 160px 10px 0px",
              fontSize:{xs: "15px" , xl:"20px"},
              marginRight:{xs:"0" ,xl:"16%"},
              
            }}
          >
            Last Name:
          </Typography>
          <TextField
            id="outlined-basic"
            type="name"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
                            bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{
              padding: "20px 160px 10px 0px",
              fontSize:{xs: "15px" , xl:"20px"},
              marginLeft: "7%",
              marginRight:{xs:"0" ,xl:"17%"},

            }}
          >
            Address Line1:
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
                            bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="Address Line 1"
            onChange={(e) => setAddress1(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize:{xs: "15px" , xl:"20px"},           
              padding: "20px 160px 10px 0px",
              marginLeft: "7%",
              marginRight:{xs:"0" ,xl:"17%"},

            }}
          >
            Address Line2:
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
                            bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="Address Line 2"
            onChange={(e) => setAddress2(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize:{xs: "15px" , xl:"20px"},   
                         padding: "20px 160px 10px 0px",
              marginRight: {xs:"15%",xl:"29%"},
            }}
          >
            PIN:
          </Typography>
          <TextField
            type="number"
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
                            bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="PIN"
            onChange={(e) => setPin(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize:{xs: "15px" , xl:"20px"},
              padding: "20px 160px 10px 0px",
              marginRight:{ xs: "8%",xl:"23%"},
            }}
          >
            Gender:
          </Typography>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e)=>setSelectedValue(e.target.value)}
            value={selectedValue}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              sx={{ paddingLeft: "80px" }}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              sx={{ paddingLeft: "50px" }}
            />
          </RadioGroup>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              padding: "20px 160px 10px 0px",
              fontSize:{xs: "15px" , xl:"20px"},
              marginRight:{ xs:"13%",xl:"26%"},
              
            }}
          >
            State:
          </Typography>
          <TextField
            id="outlined-basic"
            type="name"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
                            bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="State"
            onChange={(e) => setFormStates(e.target.value)}
          />

          <Typography
            variant="h4"
            component="h2"
            sx={{
              padding: "20px 160px 10px 0px",
              fontSize:{xs: "15px" , xl:"20px"},
              marginRight:{ xs:"9%",xl:"22%"},
            }}
          >
            Country:
          </Typography>
          <TextField
            id="outlined-basic"
            type="name"
            label=""
            variant="outlined"
            sx={{
              width: "80%",
              height:{ xs:"5.7%",xl:"4.5%"},
                            bgcolor: "white",
              borderRadius: "7px",
              marginLeft: "50px",
            }}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />

          <Button
            variant=""
            onClick={() =>
              setData([
                ...data,
                {
                  firstname,
                  lastname,
                  address1,
                  address2,
                  pin,
                  selectedValue,
                  formstates,
                  country,
                },
              ])
            }
            sx={{
              width: "80%",
              bgcolor: "black",
              color: "white",
              padding: "10px 10px 10px 10px",
              height: "5%",
              marginLeft:{ xs:"50px",xl:"10%"},
              marginTop: "20px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid container item xs={12}  lg={7} xl={8} sx={{ bgcolor: "blue",overflowX:"scroll" }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ paddingLeft:{xs:"150px", xl:"40px"}, paddingTop: "50px" ,fontSize:{xs: "25px" , xl:"50px"}, }}
          >
            Temprory Database
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          xl={11}
          sx={{
            height: "60px",
            display: "flex",
            marginLeft: "80px",
            paddingTop: "5px",
            justifyContent: "space-around",
           marginBottom:"100%",
           paddingBottom:"10px"
          }}
        >
      <Table  aria-label="simple table"sx={{minWidth:"950",padding:"0 70px 0 70px" }} >
          <TableHead  >
          <TableRow  >
            <TableCell  sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}>FirstName</TableCell>
            <TableCell    sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}} >LastName</TableCell>
            <TableCell  sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}> Address1</TableCell>
            <TableCell  sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}> Address2</TableCell>
            <TableCell   sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}> Pincode</TableCell>
            <TableCell  sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}> Gender</TableCell>
            <TableCell   sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}>  State</TableCell>
            <TableCell   sx={{color:"white",fontSize:{xs:"10px",xl:"20px"}}}> Country</TableCell>

          </TableRow>
        </TableHead>
         <TableBody>
          {data.map((item) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 1 }}}
            >
              
              <TableCell align="right" sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.firstname}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.lastname}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.address1}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.address2}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.pin}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.selectedValue}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.formstates}</TableCell>
              <TableCell align="right"sx={{fontSize:{xs:"9px",xl:"13px"}}}>{item.country}</TableCell>

            </TableRow>
          ))}
        </TableBody>
         </Table>

        </Grid>
         
      </Grid>
      </Grid>
  );
}


export default FormCreation;
