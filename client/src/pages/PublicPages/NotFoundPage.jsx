import {NavLink} from 'react-router-dom';
import Button from '../../components/Button';
import '../../assets/styles/NotFound.css'

export const NotFoundPage = () => {
  return (
    <section>
      <div className='flex flex-col items-center'>
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1> 
        </div>
        <h3 className="h2">Look like you`re lost</h3>
        <p>The page you are looking for not avaible!</p>
        <Button rounded className='inline my-10' success>
          <NavLink to='/'>Back to Homepage</NavLink>
        </Button>
      </div>
    </section>
  )
}
