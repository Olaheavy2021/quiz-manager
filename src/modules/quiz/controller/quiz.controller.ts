import { CreateQuizDto } from '../dto/create-quiz.dto';
import { QuizService } from '../services/quiz.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number) {
    return await this.quizService.getQuizById(id);
  }
}
