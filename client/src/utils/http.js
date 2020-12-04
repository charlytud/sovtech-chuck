class Http {
  static async get(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      }
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      const subString = error.split('"')[1].split('"')[0];
      const errors = { error: { [subString]: error } };
      throw new Error(JSON.stringify(errors));
    }
    data = await response.json();
    return data;
  }

  static async post(url, dataBody) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        //"Content-Type": "application/json; charset=UTF-8",
        //"Content-type": "multipart/form-data boundary=----webkitformboundary2020500416541564164156415645"
      },
      body: dataBody
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      console.log(error);
      const subString = error.split('"')[1].split('"')[0];
      const errors = { error: { [subString]: error } };
      throw new Error(JSON.stringify(errors));
    }
    data = await response.json();
    return data;
  }
  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      }
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      const subString = error.split('"')[1].split('"')[0];
      const errors = { error: { [subString]: error } };
      throw new Error(JSON.stringify(errors));
    }
    data = await response.json();
    return data;
  }
}

export default Http;
