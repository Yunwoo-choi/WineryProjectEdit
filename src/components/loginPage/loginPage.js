import React from 'react';
import FormRight from './form-right';
import FormLeft from './form-left';

const Login = props => {
    return (

        <div className='container'>
            <div>
                <header className="Wineries-Database-Header">
                <h1 className = "header text-center font-weight-bold">Winery Pickery</h1>
                <h2 className = "header text-center font-weight-bold">Pick a Winery to match your Specific Tastes!</h2>
                </header>
            </div>


            <div className="row forms-div">


                {/* Left Half of Page */}
                <div className="col">
                    <div className="col form-left gray">
                    <h2 className = "left-header"> Login </h2>
                    <FormLeft loginUser={props.loginUser}
                        userVerify = {props.userVerify} 
                        pageChanger = {props.pageChanger}
                        backgroundChanger = {props.backgroundChanger}
                    />
                    </div>
                </div>


                {/* Right Half of Page */}
                <div className="col offset-md-2 ">

                    <div className="col list-right gray">
                    <h2 className = "right-header"> Sign up!</h2>
                    <FormRight addToUsers={props.addToUsers} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;