// src/movies/movie.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async searchMovies(title: string): Promise<any> {
    const apiKey = this.configService.get<string>('OMDB_API_KEY');
    const omdbApiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

    try {
      const searchResponse = await this.httpService.get(omdbApiUrl).toPromise();

      if (searchResponse.data?.Response === 'False') {
        return [];
      }

      const movies = searchResponse.data?.Search;

      if (!movies || movies.length === 0) {
        return [];
      }

      const detailedInfoRequests = movies.map(async (movie) => {
        const detailUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`;
        const detailResponse = await this.httpService.get(detailUrl).toPromise();
        return detailResponse.data;
      });

      return Promise.all(detailedInfoRequests);
    } catch (error) {
      // Handle errors here
      console.error('Error fetching movie data:', error.message);
      throw new Error('An error occurred while fetching movie data');
    }
  }

  async searchMoviesByName(title: string): Promise<any> {
    const apiKey = this.configService.get<string>('OMDB_API_KEY');
    const omdbApiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;

    try {
      const searchResponse = await this.httpService.get(omdbApiUrl).toPromise();

      if (searchResponse.data?.Response === 'False') {
        return [];
      }

      return [searchResponse.data];
    } catch (error) {
      // Handle errors here
      console.error('Error fetching movie data:', error.message);
      throw new Error('An error occurred while fetching movie data');
    }
  }
}
