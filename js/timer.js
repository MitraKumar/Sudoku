class Timer {

    constructor() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
        this.stoped = false;
    }

    reset() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
    }

    show() {
        return `
            <h2>Time Consumed: 
            <span>
                ${Timer.addZero(this.hour)}:${Timer.addZero(this.min)}:${Timer.addZero(this.sec)}
            </span></h2>
        `;
    }

    stop() {
        this.stoped = true;
    }

    start() {
        this.stoped = false;
    }

    update() {
        if (!this.stoped) {
            this.sec++;
            if (this.sec > 60) {
                this.min++;
                this.sec = 0;
            }
            if (this.min > 60) {
                this.hour++;
                this.min = 0;
            }
        }
    }

    static addZero(number) {
        return `${parseInt(number / 10)}${parseInt(number % 10)}`;
    }
}