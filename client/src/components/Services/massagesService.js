export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();

            return data;
        } catch (error) {
            return response;
        }

    } catch (error) {
        alert(error.message);
        throw error
    }
};

function getOption(method = 'get',body){
  
    const options = {
        method,
        headers:{ 
            //'Content-Type': 'application/json',
            //'X-Authorization': token
            //'X-Parse-Application-Id': 'L3A2gZGIu7UpTKTKwO3yTGs4QS0j6JGEeR4qKv5U',
            //'X-Parse-REST-API-Key': 'sNs8wSD5FQtaOMFoGdxg5A4pNT5EmbCtFNrHvvsX'
        }
    }
  
     const token = sessionStorage.getItem('authToken');
  
    // if (token != null) {
                //'X-Authorization' = token
    //     options.headers['X-Parse-Session-Token'] = token;
    // }
  
    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-Authorization'] = token;
        options.body = JSON.stringify(body);
    }
  
    return options;
  
  };

  export async function get(url){
    return  await request(url,getOption());
  }