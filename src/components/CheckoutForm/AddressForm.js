import { Button, Grid, Typography } from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import { Link } from "react-router-dom";
import AddressInput from './AddressInput';
import {actionTypes} from "../../reducer";
import {useStateValue} from "../../StateProvider";


 const AddressForm = ({nextStep}) => {
   const methods = useForm();
   const[{shippingData}, dispatch] = useStateValue();
  return (
    <>
    <Typography variant = 'h6' gutterBottom>
    Dirección de Envío
   </Typography>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data=>{
          dispatch({
            typer:actionTypes.SET_SHIPPINGDATA,
            shippingData:data,
          });
          nextStep();
      })}>
        <Grid container spacing={3}>
          <AddressInput required name="firstName" label="Nombre"/>
          <AddressInput required name="lastName" label="Apellido"/>
          <AddressInput required name="address1" label="Dirección"/>
          <AddressInput required name="email" label="Correo"/>
          <AddressInput required name="city" label="Ciudada"/>
          <AddressInput required name="postCode" label="Codigo Postal"/>
        </Grid>
  <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
        <Button component ={Link} to ="/checkout-page">Regresar a la pagina de Pago</Button>
        <Button type="submit" variant ="contained" color="primary">Siguiente</Button>
  </div>
      </form>
    </FormProvider>
         </>
  )
}

export default AddressForm