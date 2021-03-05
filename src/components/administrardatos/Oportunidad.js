import React from 'react';
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab';
import { Checkbox, FormControl, FormLabel, FormControlLabel, Grid, 
        InputAdornment, Paper, RadioGroup, Radio, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import 'react-smarttab/dist/index.css';
import { createStyles } from '@material-ui/core';
import { CargaCircular } from 'components/estado/progreso';
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const styles = createStyles({
      paper: {
        margin: 10,
        padding: 10,
        height: '98%'
      }
  });

const OportunidadH = () => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper style={ styles.paper }>
            <FormControl fullWidth margin="normal">
              <FormLabel component="label">Tipo de Oportunidad</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  value="Compras"
                  control={<Radio color="primary" />}
                  label="Compras"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="Ventas"
                  control={<Radio color="primary" />}
                  label="Ventas"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error={false}
                id="txt1"
                label="Codigo del socio de Negocios"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error
                id="txt2"
                label="Nombre del socio de Negocios"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                id="cbx1"
                select
                label="Persona de contacto"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error={false}
                id="txt3"
                label="Importe de factura total"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error
                id="txt4"
                label="Terrritorio del socio de negocios"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                id="cbx2"
                select
                label="Empleado de ventas"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error={false}
                id="txt5"
                label="Propietario"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  onChange={handleChange}
                  name="chkmoneda"
                  color="primary"
                />
              }
              label="Visualizar en moneda del sistema"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={ styles.paper }>
            <FormControl fullWidth margin="normal">
              <TextField
                error={false}
                id="txt6"
                label="Nombre de Oportunidad"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error
                id="txt7"
                label="Numero de Oportunidad"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error={false}
                id="txt8"
                label="Estado del documento"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error
                id="txt9"
                label="Fecha de Inicio"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error={false}
                id="txt10"
                label="Fecha de Cierre"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                error
                id="txt11"
                label="Actividades abiertas"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label style={{ marginBottom: 10 }}>% de carga</label>
              <div style={{ display: 'block', margin: 'auto' }}>
                <CargaCircular valor={29} variant="h3" size={200}/>
              </div>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
    );
} 
const Oportunidad = () => {
 
  return (
      <Tabs
        tabName="tab1"
        selected={true}
        theme="pills"
        orientation="horizontal"
        justified={true}
        enableURLhash={true}
        >
        <TabNav>
          <TabNavItem>Potencial</TabNavItem>
          <TabNavItem>General</TabNavItem>
          <TabNavItem>Etapas</TabNavItem>
          <TabNavItem>Socios de Negocios</TabNavItem>
          <TabNavItem>Competidores</TabNavItem>
          <TabNavItem>Resumen</TabNavItem>
          <TabNavItem>Anexos</TabNavItem>
        </TabNav>
 
        <TabContent>
          <TabPanel>
            Tab 1 Content
          </TabPanel>
          <TabPanel>
            Tab 2 Content
          </TabPanel>
          <TabPanel>
            Tab 3 Content
          </TabPanel>
          <TabPanel>
            Tab 4 Content
          </TabPanel>
          <TabPanel>
            Tab 5 Content
          </TabPanel>
          <TabPanel>
            Tab 6 Content
          </TabPanel>
          <TabPanel>
            Tab 7 Content
          </TabPanel>
        </TabContent>
      </Tabs>
  )
}
 
export { Oportunidad, OportunidadH }