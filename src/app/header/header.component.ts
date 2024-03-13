import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  div1:boolean=true;
  div2:boolean=true;
  div3:boolean=true;

  div1Function(){
      this.div1=true;
      this.div2=false;
      this.div3=false
  }

  div2Function(){
      this.div2=true;
      this.div1=false;
      this.div3=false
  }

  div3Function(){
      this.div3=true;
      this.div2=false;
      this.div1=false
  }
}
