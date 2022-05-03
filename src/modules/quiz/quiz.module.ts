import { QuestionRepository } from './repositories/question.repository';
import { QuestionService } from './services/question.service';
import { QuestionController } from './controller/question.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './services/quiz.service';
import { QuizController } from './controller/quiz.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
