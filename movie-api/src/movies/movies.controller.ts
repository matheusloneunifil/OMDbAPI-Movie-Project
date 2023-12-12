// src/movies/movies.controller.ts
import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { MovieService } from './movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async searchMovies(@Query('title') title: string, @Res() res: Response) {
    if (!title) {
      res.status(400).send({ error: 'Title query parameter is required' });
      return;
    }

    try {
      const result = await this.movieService.searchMovies(title);

      res.status(200).send(result);
      return;
    } catch (error) {
      res.status(500).send({ error: 'An error occurred while fetching movie data' });
      return;
    }
  }

  @Get('movies-by-name')
  async searchMoviesByName(@Query('title') title: string, @Res() res: Response) {
    if (!title) {
      res.status(400).send({ error: 'Title query parameter is required' });
      return;
    }

    try {
      const result = await this.movieService.searchMoviesByName(title);

      res.status(200).send(result);
      return;
    } catch (error) {
      res.status(500).send({ error: 'An error occurred while fetching movie data' });
      return;
    }
  }
}