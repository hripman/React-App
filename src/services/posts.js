class PostsService {
    constructor(key) {
        this.key = key;
    }

    get() {
      return fetch(`http://reduxblog.herokuapp.com/api/posts?key=${this.key}`, 
            {
                method: 'GET'
            })
            .then((data) => data.json());
    }

    getById(id) {
      return fetch(`http://reduxblog.herokuapp.com/api/posts/${id}/?key=${this.key}`, 
            {
                method: 'GET'
            })
            .then((data) => data.json());
    }

    add(post) {
        return fetch(`http://reduxblog.herokuapp.com/api/posts?key=${this.key}`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
          })
          .then((data) => data.json())
    }

    delete(id) {
         return fetch(`http://reduxblog.herokuapp.com/api/posts/${id}/?key=${this.key}`, 
            {
                method: 'DELETE'
            })
            .then((data) => data.json());
    }
}

export default new PostsService('111');