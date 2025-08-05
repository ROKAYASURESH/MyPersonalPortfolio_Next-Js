'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import HeroImg from '../Common/HeroImg';
import Image from 'next/image';
import { getDataAPI } from '@/app/lib/getDataAPI';

export default function About() {
	const [aboutData, setAboutData] = useState([])

	const getAboutData = async () => {
		const { about } = await getDataAPI()
		setAboutData(about)
		console.log(about.my_skill)
	}
	useEffect(() => {
		getAboutData()
		// console.log(about)
		// Update the document title using the browser API
		document.title = `About page`;
	}, []);
	return (
		<>
			{/* <HeroImg heading="About" text="Some Special about Me !!!!!" /> */}
			<section id="about" className="about_wrapper">
				<div className="container-fluid bg-dark">
					<div className="row justify-content-between align-items center">
						<div className="col-lg-10 mx-auto">
							<div className="row">
								<div className="col-lg-5 mb-4 mb-lg-0 imx ">
									{/* <img src={about} className="img-fluid my-5" alt="About us" /> */}
									<Image src='/images/image.jpg' alt='' width={100} height={100} className='img-fluid my-5' />
								</div>

								<div className="col-lg-7 ps-lg-5 text-center text-lg-start py-4">
									<div className="my-3 mb-lg-0 text-center about-content">
										<span className="subtitle"><h3> About my Details</h3>  </span>
										<h2>About Me</h2>
										<p>{aboutData.about_pra}</p>
									</div>
									{/* nav-tabbar */}
									<div className="py-5 ">
										<ul className="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab" role="tablist ">
											<li className="nav-item" role="presentation ">
												<button className="nav-link active " id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><div className="btt">Main Skill</div></button>
											</li>

											<li className="nav-item" role="presentation">
												<button className="nav-link" id="pills-Experiance-tab" data-bs-toggle="pill" data-bs-target="#pills-Experiance" type="button" role="tab" aria-controls="pills-Experiance" aria-selected="false"><div className="btt">Experiance</div></button>
											</li>
											<li className="nav-item" role="presentation">
												<button className="nav-link" id="pills-Education-tab" data-bs-toggle="pill" data-bs-target="#pills-Education" type="button" role="tab" aria-controls="pills-Education" aria-selected="false"> <div className="btt">Education</div></button>
											</li>
										</ul>
										<div className="tab-content" id="pills-tabContent">
											{/* Skilll */}
											<div className="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab" tabIndex={0}>

												{aboutData.my_skill?.length > 0 ? (aboutData.my_skill.map((skills, index) => (
													<div className="single-progress" key={index}>
														<h6>{skills.title}</h6>

														<div className="progress">
															<div className="progress-bar" role="progressbar" style={{ width: `${skills.width}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
															<div><span className="label">{skills.Percentages}</span></div>
														</div>
													</div>
												))) : (<p>No skills data available</p>)}
												<div style={{ height: "50px" }}></div>
											</div>
											{/* Experiance */}
											<div className="tab-pane fade" id="pills-Experiance" role="tabpanel" aria-labelledby="pills-Experiancet-tab" tabIndex={0}>
												<ul className="text-start ps-0">
													{aboutData.experience?.length > 0 ? (
														<ul className="text-start ps-0">
															{aboutData.experience?.map((exp, index) => (
																<li key={index} className="mb-4">
																	<h6>{exp.role} at {exp.company}</h6>
																	<p className="text-muted">{exp.duration}</p>
																	{exp.responsibilities?.map((resp, respIndex) => (
																		<div key={respIndex} className="mb-2">
																			<strong>{resp.technology}</strong>
																			<ul className="ps-4">
																				{resp.tasks.map((task, taskIndex) => (
																					<li key={taskIndex}>{task}</li>
																				))}
																			</ul>
																		</div>
																	))}
																</li>
															))}
														</ul>
													) : (<p>Not available data</p>)}
													<li>No work Experience</li>

													<li><a href="/">I am maked many project by use html, css , javascrip and React JS:-  <span style={{ color: '#ff004f' }}>Ecomerce: 2023</span></a> </li>

												</ul>
												<button className='More' ><Link href="/portfolio">Project</Link></button>
												<button className='More'><Link href="/service">Service</Link></button>
												<div style={{ height: "20px" }}></div>

											</div>

											{/* Education */}
											<div className="tab-pane fade" id="pills-Education" role="tabpanel" aria-labelledby="pills-Education-tab" tabIndex={0}>
												<ul className="text-start ps-0">
													<li><a href=''> School Level <span>-{aboutData.education?.school}</span></a> :-2017 </li>
													<li><a href=''> +2  <span>-{aboutData.education?.plus2.name}</span></a> : {aboutData.education?.plus2.duration}  </li>

													<li><a href=''> Bac.IT <span>-{aboutData.education?.bachelor.name}</span></a> {aboutData.education?.bachelor.duration}</li>

												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	)
}
