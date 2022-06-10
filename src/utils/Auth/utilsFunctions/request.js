export function request(baseUrl){
  return async function(path, parameters){
    const res = await fetch(`${baseUrl}${path}`, parameters);
    const data = await res.json();
    if (data.name === 'error' || data.error !== undefined) {
      return Promise.reject(new Error(data.message));
    } else {
      return data;
    }
  } 
}
