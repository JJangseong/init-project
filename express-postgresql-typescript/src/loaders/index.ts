import expressLoader from './express';
import postgresLoader from './postgres';
// import mongooseLoader from './mongoose';

export default async ({ expressApp }) => {
    await postgresLoader();
    console.log('Postgressql Initalized');

    await expressLoader({ app: expressApp });
    console.log('Express Intialized');
}