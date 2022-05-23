const app = new Vue({
    el: '#root',
    data: {
        newTask: "",
        completedTasks: "",
        tasks: [{
                text: "Fare la spesa",
                checked: false
            },
            {
                text: "Fare gli esercizi di js",
                checked: false
            },
            {
                text: "Fare la doccia",
                checked: false
            }
        ],
    },

    methods: {

        addTask: function() {
            const task = this.newTask.trim();
            if (task) {
                this.tasks.push({ text: task, checked: false });
                this.newTask = "";
            }
        },

        removeTask: function(task) {
            const index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        },

        check: function(task) {
            task.checked = true;
        },

        isChecked: function(task) {
            return task.checked;
        }

    }
});