var ProgressManager = {

    getMaxTotalNeededHours: function(songs) {
        return songs.reduce(function(maxTotalNeededHours, song) {
            var totalNeededHours = this.calculateSumTask(song.tasks).neededHours;
            return Math.max(totalNeededHours, maxTotalNeededHours);
        }.bind(this), 0);
    },

    calculateSumTask: function(tasks) {
        var sumTask = {
                workedHours: 0,
                neededHours: 0
            };

        if (!tasks) {
            return sumTask

        } else {
            return tasks.reduce(function(sumTask, task) {
                return {
                    workedHours: sumTask.workedHours + task.workedHours,
                    neededHours: sumTask.neededHours + task.neededHours
                };
            }, sumTask);
        }
    }
};