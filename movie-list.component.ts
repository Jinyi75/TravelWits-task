import { Component, OnInit } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { MOVIES } from "../../../app/movieData";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  CATEGORIES = ["Action", "Comedy", "Thriller", "Drama"];
  keyword: string;

  constructor() { }

  ngOnInit() {
    this.movies = MOVIES;
  }

  getMoviesByCategory(category): Movie[] {
    if (category == "") {
      return this.movies;
    } else {
      return this.movies.filter((movie) => movie.category == category);
    }
  }

  getMoviesByName(name: string): void{
    if (name.length > 0) {
      this.movies = MOVIES.filter((movie) => movie.title == name);
    } else {
      this.movies = MOVIES;
    }
  }

  getURL(title: string): string {
    var tokens = title.split("\\s");
    var url = "https://www.imdb.com/find?q=" + title;
    return url.replace(" ", "%20");
  }

  calculateStars(rating): number {
    return Math.round(rating / 2);
  }
}