export default function() {
  this.namespace = '/api';
  this.get('/bug-reports', function() {
    return {
      data: [{
        id : 1,
        type : 'bug-report',
        attributes : {
          title : 'test1',
          done : true,
          date : new Date(),
          user : 'guest1'
        }
      },{
        id : 2,
        type : 'bug-report',
        attributes : {
          title : 'test2',
          done : true,
          date : new Date(),
          user : 'guest2'
        }
      },{
        id : 3,
        type : 'bug-report',
        attributes : {
          title : 'test3',
          done : true,
          date : new Date(),
          user : 'guest3'
        }
      }]
    };
  });
  // this.post('/bug-reports', function(store, request) {
  //   var attrs = JSON.parse(request.requestBody);
  //   var bugReport = store['bug-report'].insert(attrs);
  //   return { 'bug-report': bugReport };
  // });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
