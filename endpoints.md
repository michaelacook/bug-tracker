# Endpoints 
All endpoints return JSON and may accept query parameters that modify their functionality. This document serves as a guide to all endpoints and the structure of the JSON returned by them.

## **/users** 
All endpoints beginning with `/users`

- **`/users/all`** 
- Returns a JSON array of all users 
- Options 
  - `?projects=true` to get each user's associated projects

```
[
    {
        id: INT,
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        roleId: INT,
        createdAt: "",
        updatedAt: ""
    },
    {
        id: INT,
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        roleId: INT,
        createdAt: "",
        updatedAt: ""
    }
]
```

With Projects:

```
[
    {
        id: INT,
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        roleId: INT,
        createdAt: "",
        updatedAt: "",
        Projects: [
            {
                id: INT,
                title: "",
                description: "",
                projectManager: INT,
                createdAt: "",
                updatedAt: "",
                ProjectUser: {
                    projectId: INT,
                    userId: INT,
                    createdAt: "",
                    updatedAt: ""
                }
            }
        ]
    }
]
```
- **`/users/:id`** 
- Returns a JSON object for a single user
- Parameters   
  - `id` user id (primary key)
- Options 
  - `?projects=true` to get each user's associated projects

```
{
    id: INT,
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    roleId: INT,
    createdAt: "",
    updatedAt: ""
}
```

With Projects: 

```
{
    id: INT,
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    roleId: INT,
    createdAt: "",
    updatedAt: "",
    Projects: [
        {
            id: INT,
            title: "",
            description: "",
            projectManager: INT,
            createdAt: "",
            updatedAt: "",
            ProjectUser: {
                projectId: INT,
                userId: INT,
                createdAt: "",
                updatedAt: ""
            }
        }
    ]
}
```