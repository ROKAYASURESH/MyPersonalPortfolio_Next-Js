'use client'
import React, { useEffect, useState } from 'react'
import { getDataAPI } from '@/app/lib/getDataAPI';
import { ServiceCard } from './ServiceCard';
export default function Servic() {
	const [data, setData] = useState([])
	const getServiceData = async () => {
		const { service } = await getDataAPI()
		setData(service)
	}
	useEffect(() => {
		getServiceData()
		// Update the document title using the browser API
		document.title = `Service-Page`;
	});


	return (
		<>
			{/* <HeroImg heading="Service" text="Customer service should not be a department. It should be the entire company." /> */}

			<div className="container-fluid py-5 bg-dark ">
				<div className="row gy-5">

					<div className="col-lg-11 mx-auto">
						<div className="hed">
							<h1>Our Services</h1>
							<p>As a web developer, I have a strong understanding of web technologies and the ability to create and maintain websites and web applications. I have a good grasp of programming languages such as HTML, CSS, and JavaScript, as well as experience with frameworks and libraries like AngularJS, React, and Vue.js.npm </p>
						</div>

						<div className="row gy-5 serv">
							{data.map((service) => (
								<ServiceCard key={service.id} service={service} />
							))}
						</div>
					</div>

				</div>
			</div>

		</>
	)
}
