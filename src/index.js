const personalTasks = [
    'Learn english', 'Learn German', 
    'Learn writing in Spanish ', 'Learn English grammar', 
    'Learn to program', 'Learn JavaScript', 
    'Learn Python', 'Learn unit test'
]
const randomString = () => {
    const string = personalTasks[Math.floor(Math.random() * personalTasks.length)]
    return string
}
module.exports = randomString
