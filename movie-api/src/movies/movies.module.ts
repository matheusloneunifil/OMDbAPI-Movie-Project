import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesController } from './movies.controller';
import { MovieService } from './movie.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot(),
  HttpModule.register({
    timeout: 5000, // Optional timeout configuration
  })],
  controllers: [MoviesController],
  providers: [MovieService]
})
export class MoviesModule { }
