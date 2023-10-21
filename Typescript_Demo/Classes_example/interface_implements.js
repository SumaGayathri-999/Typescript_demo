class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        console.log(this.cameraMode);
    }
    createStory() {
        return "story created";
    }
}
