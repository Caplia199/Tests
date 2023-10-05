module.exports = {
    serverPort: 8081,
    serverHost: '0.0.0.0',
    frontendDb: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5431,
            user: 'testing',
            password: 'testing',
            database: 'frontend',
        },
        pool: { min: 0, max: 5 },
    },
    backendDb: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5431,
            user: 'testing',
            password: 'testing',
            database: 'backend',
            pool: { min: 0, max: 5 },
        }
    }
};
