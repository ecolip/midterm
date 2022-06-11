const api = {
  hostname: 'http://localhost:3000',
  getMessages() {
    return fetch(`${this.hostname}/messages`).then(
      (response) => response.json()
    );
  },
  sendMessage(data) {
    return fetch(`${this.hostname}/messages`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    }).then((response) => response.json());
  },
  deleteMessage(id) {
    return fetch(`${this.hostname}/messages/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    }).then((response) => response.json());
  },
};

export default api;
