const fetchFacebookData = async (user_id:string, access_token:string) => {
  try {
    const response = await fetch(`https://graph.facebook.com/vX.X/${user_id}/albums?fields=id,name,photos{picture}&access_token=${access_token}`);
    const data = await response.json();

    if (!data || data.error) {
      console.error('Error fetching albums and photos', data.error);
      return [];
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching albums and photos', error);
    return [];
  }
};

export default fetchFacebookData;