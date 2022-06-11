const api = {
  hostname: 'http://localhost:3000',
  sendMessage(data) {
    return fetch(`${this.hostname}/messages`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    }).then((response) => response.json());
  },
};

export default api;
