import { Component } from '@angular/core';
import {ShortenTextPipe} from './shorten-text.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-app';
  blogs:Blog[];
  persons: any[];
  appStatus = new Promise((resolve, reject)=>{
      setTimeout(()=>{
         resolve("stable");
      }, 5000)
  });
  filterName: string;
  
  constructor(private shortenTextPipe: ShortenTextPipe){
  
  }
  ngOnInit(){
  
  
  this.filterName = '';
    this.blogs =[{content:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, title:'Blog1', summary:''}, 
    {content: `here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, title: 'Blog2', summary:''},
    {content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, title: 'Blog3', summary:''}
    ];
    this.blogs.map((bl)=>{
      bl.summary = bl.content;
    });
    this.persons = [{name:'kiran', status:'inactive' },{ name:'sashi',status:'active'},{ name:'bavani', status:'inactive'}, {name: 'rekha', status:'active'}];
  }
  showFullText = (index: number)=>{
  
    this.blogs[index].content = this.blogs[index].summary;
   
  }
  shortenBlogText = (index: number)=>{
  let value: string;
   value = this.shortenTextPipe.transform(this.blogs[index].content, 20);
   
   this.blogs[index].content = value;
  }
}
export interface Blog{
  title: string;
  content: string;
  summary: string;
}
