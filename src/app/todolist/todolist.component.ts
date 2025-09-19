import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  task: string = '';
  taskList: { id: number; task: string }[] = [];
  editId: number | null = null;

  addTask() {
    if (this.task.trim() === '') return; // avoid empty tasks

    if (this.editId !== null) {
      const index = this.taskList.findIndex((item) => item.id === this.editId);
      if (index > -1) {
        this.taskList[index].task = this.task;
      }
      this.editId = null;
    } else {
      this.taskList.push({
        id:
          this.taskList.length > 0
            ? this.taskList[this.taskList.length - 1].id + 1
            : 1,
        task: this.task,
      });
    }

    this.task = '';
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id !== id);
    this.task = '';
  }

  editTask(id: number) {
    const taskToEdit = this.taskList.find((item) => item.id === id);
    if (taskToEdit) {
      this.task = taskToEdit.task;
      this.editId = id;
    }
  }
}
