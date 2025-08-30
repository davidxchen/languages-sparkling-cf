import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word',
  imports: [JsonPipe],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.data = data['data'];
    });
  }
}
