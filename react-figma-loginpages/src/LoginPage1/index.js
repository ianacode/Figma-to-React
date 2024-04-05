import React from 'react'
import './index.css'

function LoginPage1() {
	return (
		<div className='login-page-1'>
			{/* <button className='btn btn-primary'>Bootstrap button</button> */}
			<div className="row">
				<div className='col-md-6 d-flex align-items-center justify-content-center'>
					<div className='text-part d-flex flex-column'>

						<h1>LOGIN</h1>

						<input type="text" placeholder='Username' />
						<input type='text' placeholder='Password' />

						<button>LOGIN</button>

						<div className='d-flex justify-content-between mt-2'>
							<a href=''>Forgot Password</a>
							<a href=''>Register</a>
						</div>



					</div>

				</div>

				<div className='col-md-6 d-flex align-items-center justify-content-center'>
					<img
						src='https://static.vecteezy.com/system/resources/previews/007/038/677/original/burger-illustration-vector.jpg'
						alt=''
					/>

				</div>

			</div>
			<div className='login-page-1-rectangle'>

			</div>
		</div>
	)
}

export default LoginPage1
