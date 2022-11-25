import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})
export class DiscussionForumComponent implements OnInit {

  imagePath: any;
  constructor() {
    this.imagePath = 'assets/star.png'
   }

  ngOnInit(): void {
  }

}
