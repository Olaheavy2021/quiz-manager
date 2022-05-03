import { QuizController } from './quiz.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [QuizController],
})
export class QuizModule {}
