class Timer {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timerId = null;
    }
    updateCounter(){
        document.querySelector("#timer").innerHTML=this.formatTime();
    }

    reset() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.updateCounter();
    }

    start() {
        this.timerId = setInterval(() => {
            this.increment();
        }, 1000);
    }

    stop() {
        clearInterval(this.timerId);
    }

    increment() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
        this.updateCounter();
    }

   

    formatTime() {
        const padZero = (num) => (num < 10 ? '0' + num : num);
        return `${padZero(this.hours)}:${padZero(this.minutes)}:${padZero(this.seconds)}`;
    }

    render() {
        const timerContainer = document.createElement('div');
        timerContainer.className = 'card';
        timerContainer.style.width = '18rem';
        timerContainer.id = 'timerContainer';

        const timerBodyDiv = document.createElement('div');
        timerBodyDiv.className = 'card-body';
        timerBodyDiv.id = 'timerBodyDiv';

        const timerTitle = document.createElement('h5');
        timerTitle.className = 'card-title';
        timerTitle.textContent = 'Timer';
        timerTitle.id = 'timerTitle';

        const timerDisplay = document.createElement('p');
        timerDisplay.className = 'card-text';
        timerDisplay.textContent = this.formatTime();
        timerDisplay.id = 'timer';

        const bttnContainerDiv = document.createElement('div');
        bttnContainerDiv.className = 'bttn-container';
        bttnContainerDiv.id = 'bttn-container';

        const startButton = document.createElement('button');
        startButton.type = 'button';
        startButton.className = 'btn btn-primary';
        startButton.textContent = 'Start';
        startButton.id = 'start-btn';
        startButton.onclick = this.start.bind(this);

        const stopButton = document.createElement('button');
        stopButton.type = 'button';
        stopButton.className = 'btn btn-primary';
        stopButton.textContent = 'Stop';
        stopButton.id = 'stop-btn';
        stopButton.onclick = this.stop.bind(this);

        const resetButton = document.createElement('button');
        resetButton.type = 'button';
        resetButton.className = 'btn btn-primary';
        resetButton.textContent = 'Reset';
        resetButton.id = 'reset-btn';
        resetButton.onclick = this.reset.bind(this);


        bttnContainerDiv.appendChild(startButton);
        bttnContainerDiv.appendChild(stopButton);
        bttnContainerDiv.appendChild(resetButton);

        timerBodyDiv.appendChild(timerTitle);
        timerBodyDiv.appendChild(timerDisplay);
        timerBodyDiv.appendChild(bttnContainerDiv);
        timerContainer.appendChild(timerBodyDiv);

        return timerContainer;
    }

    mount(el){
        if(el){
            el.appendChild(this.render())
        }
        else document.body.appendChild(this.render())

    }
}

export default Timer;
