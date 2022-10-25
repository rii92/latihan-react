import React from 'react'
import { Admin, EditGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import {PostCreate, PostEdit, PostList} from './posts';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name='users' list={UserList} icon={UserIcon} recordRepresentation="name"/>
  </Admin>
);

export default App;