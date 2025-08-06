'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';
import { getDataAPI } from './lib/getDataAPI';

export default function Home() {
	const [data, setData] = useState([]);

	const getHomeData = async () => {
		const { profile } = await getDataAPI()
		setData(profile)
		console.log(profile.name)

	}
	useEffect(() => {
		document.title = `Home page`;
		getHomeData()
	}, []);

	const [text] = useTypewriter({
		words: ['🔺Frontend Developer🔺', '🔺Graphic Design🔺', '🔺Custom Website🔺'],
		loop: {},
		typeSpeed: 700,
		deleteSpeed: 700,
	});

	return (
		<>
			<section className='home-section' >
				<div className="container">
					<div className="row home-main">
						<div className="col-lg-6 home-info">
							<h3>WELCOME TO MY WEBSITE</h3>
							<h1>I'm {data.name} <br />
								<span className='tex' > {text}</span>
								<Cursor cursorColor='pink' /><br />
								based in Nepal
							</h1>
							<p>{data.bio}</p>
							<div className="home-btn">
								<button className='btn1 dn'><a href='/images/MY_RESUME.pdf' download="Suresh Rokaya CV">Get Resume <span style={{ fontSize: "20px" }}><FaDownload /></span>
								</a>
								</button>
								<button className=' btn1 at'> <Link href="/contact">Hire me <span style={{ fontSize: "20px", padding: '5px' }}></span> </Link></button>
							</div>

						</div>

						<div className="col-lg-6 order-1 order-lg-2 ssr">
							{/* <div className="animated">
								<Image className='img-fluid animated' src={data.rocicon || '/images/default-image.gif'} width={100} height={100} alt='ffd' />
							</div>
							<Image className='myphoto' src={data.profileImage || '/images/default-image.gif'} alt='' width={100} height={100} />
							<div className="text"><h2> 🔺Frontent Developer🔺</h2></div> */}
						</div>

					</div>
				</div>
			</section>

			<div className='about'>
				<div className='left'>
					<h1 style={{ color: 'white', fontSize: '4rem' }}>Who Am I?</h1>
					<p style={{ color: 'white', fontSize: '2rem' }}> I am Suresh Rokay, a Software Developer with a BSc in IT. I specialize in full-stack development using Django, React, and Next.js, with  <strong>One Year Plus </strong>experience in building responsive web applications. Skilled in Bootstrap/Tailwind CSS and Redux, I create intuitive e-commerce platforms and portfolios. Explore my projects or connect for opportunities.</p>
					<Link href='/about'  ><button className='btn' style={{ color: 'white', fontSize: '2rem', background: 'blue' }}>More..</button></Link>
				</div>

				<div className='right' >
					<div className='img-container'>
						<div className='img-stack top'>

							<Image src="/images/IMG_3682.jpg" width={100} height={100} alt='' />

						</div>

						<div className='img-stack bottom'>
							<Image
								src={data.image1 || '/images/default-image.gif'}
								width={100}
								height={100}
								alt="ffd"
							/>
						</div>

					</div>
				</div>
			</div>

			{/* ........Contact............... */}
			<section className='cont'>
				<div className="containers ">
					<div className="content">
						<div className="left-side">
							<div className="address details">
								<i className="fas fa-map-marker-alt" />
								<div className="topic">Address</div>
								<div className="text-one">{data.address}</div>
							</div>
							<div className="phone details" style={{ textAlignc: "start" }}>
								<i className="fas fa-phone-alt" />
								<div className="topic">Phone</div>
								<div className="text-one">{data.phone}</div>
							</div>
							<div className="email details">
								<i className="fas fa-envelope" />
								<div className="topic">Email</div>
								<div className="text-one">{data.email}</div>
								<div className="text-two">{data.opt_email}</div>
							</div>
						</div>
						<div className="right-side">
							<div className="topic-text">Send us a message</div>
							<p style={{ fontSize: '1.5rem' }}>{data.h_contact_pra}</p>
							<form action="#">
								<div className="input-box">
									<input type="text" placeholder="Enter your name" />
								</div>
								<div className="input-box">
									<input type="text" placeholder="Enter your email" />
								</div>
								<div className="input-box message-box">
									<input type="text" placeholder="Comment" />

								</div>
								<div className="button">
									<input type="button" defaultValue="Send Now" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
