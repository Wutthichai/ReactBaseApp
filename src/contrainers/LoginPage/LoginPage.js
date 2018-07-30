import React from 'react';
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {

  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3'>
            <div className='login-panel panel panel-default'>
              <div className="panel-heading">
                <h3 className="panel-title">Please Sign In</h3>
              </div>
              <div className="panel-body">
                <form name="form" >
                  <fieldset>
                    <div className="form-group">
                      <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-lg btn-primary btn-block">Login</button>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="panel-footer">
                <div className='row'>
                <div className='col-md-9'>
                  <Link class to='/forgetpassword'>Forget Password?</Link>
                </div>
                <div className='col-md-3 text-right'>
                  TH/EN
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
