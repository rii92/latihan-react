import React from 'react'
import { Datagrid, List, ReferenceField, TextField, EditButton, TextInput, Edit, SimpleForm, ReferenceInput, Create, useRecordContext, SimpleList} from 'react-admin'
import { useMediaQuery } from '@mui/material';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}` : '' } </span>;
};

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];


export const PostList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => (
                        <ReferenceField label="User" source="userId" reference="users" />
                    )}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users" />
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};

export const PostEdit = props => (
    <Edit title={<PostTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source='title' />
            <TextInput multiline source='body' />
        </SimpleForm>
    </Create>
);

export default PostList;