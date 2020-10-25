module.exports = {
  count: 2,
  notifications: [
    {
      id: 1,
      date: "Tues Oct 20",
      sourceUser: {
        id: 1,
        name: "Jane Doe",
        sourceItem: {
          id: 1,
          type: "project",
        },
      },
      text: "You have been assigned to a new project.",
    },
    {
      id: 2,
      date: "Mon Oct 19",
      sourceUser: {
        id: 1,
        name: "Jane Doe",
        sourceItem: {
          id: 2,
          type: "issue",
        },
      },
      text: "Jane mentioned you in a comment.",
    },
  ],
}
