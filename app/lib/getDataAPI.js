

export const getDataAPI = async () => {
	const api = await fetch(`${process.env.NEXT_BASE_URL}/data.json`, {
		cache: "force-cache"
	})
	return api.json()
}


