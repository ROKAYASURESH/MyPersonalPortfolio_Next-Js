import React from 'react'

export default function HeroSection(props) {
	return (
		<>
			<div className='hero-img'>
				<div className='heading'>
					<h1>{props.heading}</h1>
					<p>{props.text}</p>
					<div className="homebtn">
						<button className='btn1 dn'><a href={logo} download="Suresh Rokaya CV">Get Resume <span style={{ fontSize: "20px" }}><FaDownload /></span>
						</a>
						</button>
						<button className=' btn1 at'> <Link to="/contact">Contact <span style={{ fontSize: "20px", }}><AiFillContacts /></span> </Link></button>
					</div>
				</div>
			</div>
		</>
	)
}
