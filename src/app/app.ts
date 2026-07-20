import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menus } from "./Menus/menus/menus";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  snowArray = Array.from({length: 28}).map((_, i) => {
    // create randomized values for each flake
    const left = Math.floor(Math.random() * 100) + '%';
    const size = `${Math.floor(Math.random() * 14) + 10}px`; // 10px - 24px
    const dur = `${Math.floor(Math.random() * 12) + 7}s`;     // 7s - 18s
    const delay = `${(Math.random() * 3).toFixed(2)}s`;
    const opacity = (0.6 + Math.random() * 0.4).toFixed(2);
    return { left, size, dur, delay, opacity };
  });
  protected readonly title = signal('ToDoAppl');
}
