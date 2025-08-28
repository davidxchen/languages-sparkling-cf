import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Word } from './word/word';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Word],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('languages-sparkling-cf');
}
