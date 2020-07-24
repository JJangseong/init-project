

export default [
    {
        name: 'blogEntity',
        // Notice the require syntax and the '.default'
        model: require('./blog').default,
    }
]
