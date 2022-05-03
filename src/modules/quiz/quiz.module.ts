import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
