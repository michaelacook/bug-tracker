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
- IssueHistory
- ProjectUsers
- Comments  
- Notifications

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