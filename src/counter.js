class Counter{

    constructor(){
        this.counter=0;
    }
    updateCounter(){
        document.querySelector("#counter").innerHTML=`${this.counter}`;
    }
    reset(){
        this.counter=0;
        this.updateCounter();
    }
    increment(){
        this.counter++;
        this.updateCounter();

    }

    decrement(){
        this.counter--;
        this.updateCounter();
        }

        render(){
           
            const counterContainer = document.createElement('div');
            counterContainer.className = 'card';
            counterContainer.style.width = '18rem';
            counterContainer.id = 'counterContainer';
            
            const counterBodyDiv = document.createElement('div');
            counterBodyDiv.className = 'card-body';
            counterBodyDiv.id = 'counterBodyDiv';
            
            const counterTitle = document.createElement('h5');
            counterTitle.className = 'card-title';
            counterTitle.textContent = 'Counter';
            counterTitle.id = 'counterTitle';
            
            const counter = document.createElement('p');
            counter.className = 'card-text';
            counter.textContent = `${this.counter}`;
            counter.id = 'counter';
            
            const bttnContainerDiv = document.createElement('div');
            bttnContainerDiv.className = 'bttn-container';
            bttnContainerDiv.id = 'bttn-container';
            
            const incButton = document.createElement('button');
            incButton.type = 'button';
            incButton.className = 'btn btn-primary';
            incButton.textContent = 'Inc';
            incButton.id = 'inc-btn';
            
            const decButton = document.createElement('button');
            decButton.type = 'button';
            decButton.className = 'btn btn-primary';
            decButton.textContent = 'Dec';
            decButton.id = 'dec-btn';
            
            const resetButton = document.createElement('button');
            resetButton.type = 'button';
            resetButton.className = 'btn btn-primary';
            resetButton.textContent = 'Reset';
            resetButton.id = 'reset-btn';
            
            decButton.onclick=this.decrement.bind(this);
            incButton.onclick=this.increment.bind(this);
            resetButton.onclick=this.reset.bind(this);
            
            bttnContainerDiv.appendChild(incButton);
            bttnContainerDiv.appendChild(decButton);
            bttnContainerDiv.appendChild(resetButton);
            
            counterBodyDiv.appendChild(counterTitle);
            counterBodyDiv.appendChild(counter);
            counterBodyDiv.appendChild(bttnContainerDiv);
            counterContainer.appendChild(counterBodyDiv);
            
            return counterContainer;
            

        }

        mount(el){
            if(el){
                el.appendChild(this.render())
            }
            else document.body.appendChild(this.render())

        }


//defer async 
};
export default Counter;