# Project Features

This document describes on a high level how I plan to go about building key application features for this project. The descriptions are high level to allow for flexibility in implementation and serve as a guide and set of plans that will form the basis for a Software Requirement Specification document.

**Dynamic Client-side Application**
The client-side application will use the open-source SB Admin 2 Bootstrap theme. I will convert the SB Admin 2 static theme into a dynamic stateful application composed of React components. For simplicity the template JavaScript files will not be converted into webpack bundles but will be linked in as script tags in `index.html`.

**Real-time Notifications**
The application will persist notifications in a `Notifications` table. When a user interaction occurs that requires another user or set of users to be notified, a notification row will be added to the Notifications table that includes the target users('s) id(s), the text for the notification, and the id for the project or issue being referenced. If the target users have a live connection, the notification will also be sent directly to the client(s) with web sockets. When a user's client application mounts, it will send an API request to the notifications endpoint and populate state with an array of notifications to be displayed to the user, and visually display a notifications signal. Notifications will have a `null` value for the column `viewed` by default. Once the target user clicks the notification, an API request will be made to update the notification `viewed` column to `true`.

Notification JSON structure:

```json
{
  "count": "2",
  "notifications": [
    {
      "id": "1",
      "date": "Tues October 20",
      "sourceUser": {
        "id": "1",
        "name": "Jane Doe"
      },
      "sourceItem": {
        "id": "1",
        "type": "project"
      },
      "text": "You have been assigned to a new project."
    },
    {
      "id": "2",
      "date": "Mon October 19",
      "sourceUser": {
        "id": "1",
        "name": "Jane Doe"
      },
      "sourceItem": {
        "id": "2",
        "type": "issue"
      },
      "text": "Jane mentioned you in a comment."
    }
  ]
}
```
