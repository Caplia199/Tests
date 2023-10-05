const Knex = require('knex');
const { frontendDb, backendDb } = require('./config');

class DB {

    static privFrontend;

    static privBackend;

    static frontend() {
        if (!DB.privFrontend) {
            DB.privFrontend = Knex({
                client: 'pg',
                connection: frontendDb.connection,
                pool: { min: 0, max: 7 },
                useNullAsDefault: true,
            });
        }
        return DB.privFrontend;
    }

    static backend() {
        if (!DB.privBackend) {
            DB.privBackend = Knex({
                client: 'pg',
                connection: backendDb.connection,
                pool: { min: 0, max: 7 },
                useNullAsDefault: true,
            });
        }
        return DB.privBackend;
    }
}

const getSmsCode = async () => {
    const result = await DB.backend()('sms_tasks')
        .select('sms_tasks.input')
        .where('task', '=', 'login')
        .orderBy('sms_tasks.id', 'desc')
        .limit(1);
    return String(result[0].input.message);
};


module.exports = { getSmsCode, DB };

