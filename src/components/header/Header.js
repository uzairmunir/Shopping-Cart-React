import { Close, ViewList } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export class Header extends React.Component {
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { toggle } = this.state;

    return (
      <header>
        <div className='menu' onClick={this.menuToggle}>
          <ViewList />
        </div>
        <div className='logo'>
          <h1>
            <Link to='/'>Nike</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? 'toggle' : ''}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to='/product'>Product</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
            <li>
              <Link to='/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/login'>Login / Register</Link>
            </li> */}
            <li className='close' onClick={this.menuToggle}>
              <Close />
            </li>
          </ul>
          <div className='nav-cart'>
            {/* <span>0</span> */}
            <Link to='/cart'>
              <ShoppingCartIcon />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
