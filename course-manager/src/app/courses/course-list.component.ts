import { Component, OnInit} from "@angular/core";
import { Course } from "./course";
import { CouseService } from "./course.service";


@Component({
        selector: 'app-course-list',
        templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    constructor(private courseService: CouseService) {}

    ngOnInit(): void {
        this.courses = this.courseService.retriveAll();
    }
}