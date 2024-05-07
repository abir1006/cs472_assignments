// The schedule function will run After the loop because it will handled by WebAPI and Callback Queue,
// but loop will run first because it is running in global EC stack
// Console log will going to show: 100000000