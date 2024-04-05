import React from "react"
import './index.css'
import cart from './cart.svg'

function LoginPage10() {
	return (
		<div>
			<div className='login-page-10'>
				<div className='row align-items-center h-100'>
					<div className='col-md-5 first-part d-flex align-items-center justify-content-center flex-column'>
						<h1 className='text-start w-100'>Welcome Back</h1>
						<p className='text-start w-100'>
							Sign in with your credentionals
							to enjoy our uninterupted services

						</p>
						<p className='text-start w-100'>Dont have an account yet ?</p>
						<img src={cart} alt='' className='mt-5'></img>
						<button >SIGN UP</button>

					</div>

					<div className='col-md-7 second-part d-flex flex-column align-items-end'>
						<div className='text-part d-flex flex-column '>
							<h1>SIGN IN TO SHEY</h1>

							<div className='d-flex justify-content-center my-2'>
								<img
									className='mx-5'
									height='40'
									width='40'
									src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
									alt='' />

								<img
									className='mx-5'
									height='40'
									width='40'
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png'
									alt='' />

								<img
									className='mx-5'
									height='40'
									width='40'
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png'
									alt='' />
							</div>

							<p>OR</p>

							<span>Use email and Password</span>

							<input type='text' placeholder='username' />
							<input type='text' placeholder='password' />
							<button>LOGIN</button>

						</div>




					</div>
				</div>

			</div>

		</div>
	)
}

export default LoginPage10;
