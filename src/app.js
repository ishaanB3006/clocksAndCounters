import Counter from "./counter.js";
import Timer from "./timer.js";
class App{
    constructor(root){
        this.CompCalc=true;
        this.timer=new Timer();
        this.counter=new Counter();
        //this.counter.mount(root);
        this.timer.mount(root);
        
    }
   deleteChild(p) {
        var child = p.lastElementChild; 
        while (child) {
            p.removeChild(child);
            child = p.lastElementChild;
        }
   }
    toggle(){

        this.CompCalc=this.CompCalc===true?false:true;
       const parent=document.querySelector("#compHolder");
      this.deleteChild(parent);

       if(this.CompCalc){
        this.counter.mount(parent);
       }else{
        this.timer.mount(parent);
       }

    }
    addEventListener(){
        document.querySelector("#switch").addEventListener("click",app.toggle.bind(this));
    }



};
const root=document.querySelector("#compHolder");
const app=new App(root);
app.addEventListener();
// const counter=new Counter();
// const timer=new Timer();

//document.querySelector("#switch").addEventListener("click",app.toggle.bind(this))



