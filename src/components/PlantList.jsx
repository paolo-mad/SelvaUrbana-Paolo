import Plant from './Plant';
import useFetch from '../hooks/useFetch';

const PlantList = () => {

    const {data: plants, isPending, error} = useFetch('https://selva-api.vercel.app/products/')
    
    return (
      <>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {plants && <Plant plants = {plants}/>}
      </>
    )
  }

    
export default PlantList