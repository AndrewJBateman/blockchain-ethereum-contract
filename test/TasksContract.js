const TasksContract = artifacts.require("TasksContract");

contract("TasksContract", () => {
	before(async () => {
		this.tasksContract = await TasksContract.deployed();
	});

	it("migrate deployed app successfully", async () => {
		const address = this.tasksContract.address;

		assert.notEqual(address, null);
		assert.notEqual(address, undefined);
		assert.notEqual(address, 0x0);
		assert.notEqual(address, "");
	});

	it("get Tasks list", async () => {
		const taskCounter = await this.tasksContract.taskCounter();
		const task = await this.tasksContract.tasks(taskCounter);

		assert.equal(task.id.toNumber(), taskCounter);
		assert.equal(task.title, "my first example task");
		assert.equal(task.description, "clean the car");
		assert.equal(task.done, false);
		assert.equal(taskCounter, 1);
	});

	it("task created successfully", async () => {
		const result = await this.tasksContract.createTask(
			"a second task",
			"second task description"
		);
		const taskEvent = result.logs[0].args;
		const taskCounter = await this.tasksContract.taskCounter();

		assert.equal(taskCounter, 2);
		assert.equal(taskEvent.id.toNumber(), 2);
		assert.equal(taskEvent.title, "a second task");
		assert.equal(taskEvent.description, "second task description");
		assert.equal(taskEvent.done, false);
	});

	it("task toggle done", async () => {
		const result = await this.tasksContract.toggleDone(1);
		const taskEvent = result.logs[0].args;
		const task = await this.tasksContract.tasks(1);

    assert.equal(task.done, true);
    assert.equal(taskEvent.id.toNumber(), 1);
    assert.equal(taskEvent.done, true);
	});
});
