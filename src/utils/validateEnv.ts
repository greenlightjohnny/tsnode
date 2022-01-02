import { cleanEnv, str, port } from 'envalid';
import { stringify } from 'querystring';

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        MONG_USER: str(),
        PORT: port({ default: 3000 }),
    });
}

export default validateEnv;
