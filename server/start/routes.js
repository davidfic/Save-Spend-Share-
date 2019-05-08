'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/chores', () => {
  let chores = [
        {'id': 1, 'completed': false, 'title': 'hello'},
        {'id': 2, 'completed': false, 'title': 'this is'},
        {'id': 3, 'completed': false, 'title': 'a test'},
        {'id': 4, 'completed': false, 'title': 'blah'},
        {'id': 6, 'completed': false, 'title': 'why'},
        {'id': 5, 'completed': false, 'title': 'blah2'},
       ] 
  console.log(test2);
  return chores
})


Route.post('/wishlists', function (req, res) {
  return "hello from wishlists"
})

Route.get('/wishlists', () => {
  console.log('in wishlists')
  let wishlists = [
        {'id': 1, 'name': 'wish1', 'goal': 101, 'added': 12},
        {'id': 2, 'name': 'wish2', 'goal': 102, 'added': 38},
        {'id': 3, 'name': 'wish3', 'goal': 103, 'added': 82},
        {'id': 4, 'name': 'Xbox', 'goal': 300, 'added': 100},
    ]
    return wishlists
})


Route.get('/todos', () => {
  
  let todos = [
    {'id': 1, 'completed': false, 'title': 'hello'},
    {'id': 2, 'completed': false, 'title': 'this is'},
    {'id': 3, 'completed': false, 'title': 'a test'},
    {'id': 4, 'completed': false, 'title': 'blah'},
    {'id': 6, 'completed': false, 'title': 'why'},
    {'id': 5, 'completed': false, 'title': 'blah2'},
    ]
    return {todos}
})
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
