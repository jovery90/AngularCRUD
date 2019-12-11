import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

posts = [];
inputPost = [];

clearPosts() {
    this.posts !== [] ? this.posts = [] : this.posts = [];
}

deletePost(post) {
  let index;
  index = this.posts.indexOf(post);
  this.posts.splice(index, 1);
    // placeholder
}

editPost(post) {
  // Delete original post from array
  // Keep index spot saved
  // Add new post in indexed spot
  let index;
  index = this.posts.indexOf(post);
  this.posts.splice(index, 1, this.inputPost)

  // this.posts.splice(index, 0, this.inputPost)

}

createPost(event: any) {
  this.posts.push(this.inputPost);
  console.log(this.posts);
}

getInput(event: any) {
  this.inputPost = [];
  let bar = event.target.value;
  this.inputPost.push(bar);
  console.log(this.inputPost);
}

logTarget(event: any) {
  let val = event.target.value;
  console.log(val);
}

eraseInputPostArray()  {
  this.inputPost = [];
}

}
