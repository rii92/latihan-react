import React from 'react'
import { Admin, CustomRoutes, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import {PostCreate, PostEdit, PostList} from './posts';
import { Route } from "react-router-dom";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import ButtonMui from './ButtonMui';
import MyLayout from './layout/MyLayout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin layout={MyLayout} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name='users' list={UserList} icon={UserIcon} recordRepresentation="name"/>
    <CustomRoutes>
        <Route path="/button-mui" element={<ButtonMui />} />
    </CustomRoutes>
  </Admin>
);

export default App;