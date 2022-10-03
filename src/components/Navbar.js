import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {

  state={cliked: false}
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <>
        <nav>
            <a href='/'>.UAIENE</a>

            <div>
                <ul id='Navbar' className={this.state.clicked ? '#Navbar active' : '#Navbar'}>
                    <li><a href='/' className='
                    active'>Home</a></li>
                    <li><a href='/'>Sobre</a></li>
                    <li><a href='/'>Portifolio</a></li>
                    <li><a href='/'>Fotos</a></li>
                    <li><a href='/'>Contacto</a></li>
                </ul>
            </div>

            <div className='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    </>
  )
}
}

export default Navbar