import { Question } from '../modules/quiz/entities/question.entity';
import { Quiz } from '../modules/quiz/entities/quiz.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: 'localhost',

  port: 5432,

  username: 'postgres',

  password: 'Pukipuki2022!',

  database: 'quiz',

  entities: [Quiz, Question],
  synchronize: true,
};
