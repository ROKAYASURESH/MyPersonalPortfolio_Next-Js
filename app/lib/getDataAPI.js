
export async function getDataAPI() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
    // cache: 'force-cache',
  });
  return res.json();
}