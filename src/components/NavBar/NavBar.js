import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/New">New Order</Link>       
    </nav>
  )
}

export default NavBar