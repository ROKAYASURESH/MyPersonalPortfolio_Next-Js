import { getDataAPI } from '@/app/lib/getDataAPI';
import React from 'react';

export default async function ServiceDetailPage({ params }) {
	const { id } = params;
	const serData = await getDataAPI()
	const service = serData.service.find((item) => item.id === parseInt(id));

	if (!service) {
		return (
			<div>
				<h2>Service Not Found</h2>
				<p>No service found with ID {id}.</p>
			</div>
		);
	}

	return (
		<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
			<h1>{service.heading}</h1>
			<div>
				{service.icon && <p>Icon: {service.icon}</p>}
			</div>
			<p>{service.paragraphs}</p>
			<p>{service.paragraph}</p>
			{service.Project && (
				<img
					src={service.Project}
					alt={service.heading}
					style={{ maxWidth: '100%', height: 'auto' }}
				/>
			)}
		</div>
	);
}