# Schema Design 

## Nouns 
- Project 
- Issue 
- User 
- History (specifically, IssueHistory)
- Comment
- Notification

## Tables 
- Projects
- Issues
- Users
- Roles
- Priorities (this is for issues)
- IssueHistory
- ProjectUsers
- Comments  
- Notifications

## Table Columns 
* All tables will have `createdAt` and `updatedAt` columns with a type of `DATE`, as is the default behaviour of Sequelize

**Users**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **first_name** | STRING | |
| **last_name** | STRING | |
| **email** | STRING | |
| **password** | STRING | |
| **role_id** | INT | FK |

**Roles**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **role** | STRING | |

**Projects**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **title** | STRING | |
| **description** | TEXT | |
| **project_manager_id** | INT | FK |
|  | | |

**Priorities**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **level** | STRING | |

**Issues**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **priority_id** | INT | FK |
| **title** | STRING | |
| **description** | TEXT | |

**IssueHistory**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **issue_id** | INT | FK |
| **previous_value** | TEXT | |
| **new_value** | TEXT | |

**ProjectUsers** (Junction Table)
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| project_id | INT | FK |
| user_id | INT | FK |

**Comments**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **user_id** | INT | PK |
| **target_user_id** | INT | | 
| **body** | TEXT | |

**Notifications**
| Name | Data Type | PK/FK |
| ----- | -------- | ----- |
| **id** | INT | PK |
| **target_user_id** | INT | FK |
| **source_user_id** | INT | FK |
| **reference_item_id** | INT | FK | (The Issue, Comment, or other item that has been updated triggering the notification)
| **body** | TEXT | |

## Relations
- Project hasMany User 
- User hasMany Project
- Project hasMany Issue
- Issue hasOne Project
- Issue hasMany Comment 
- Comment hasOne Issue 
- Issue hasMany IssueHistory 
- IssueHistory hasOne Issue
- User hasOne Role
- Role hasMany User
- User hasMany Notification 
- Notification hasOne User* (this may not be right)