import { Injectable } from "@angular/core";
import { Course } from "./course";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CouseService{

    private courseUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient){}
    
    retriveAll(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.courseUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.courseUrl}`, course);
        }
    }

    deleteById(id: number): Observable<number> {
        return this.httpClient.delete<number>(`${this.courseUrl}/${id}`);
    }

}

// var COURSES: Course[] = [
//     {
//         id: 1,
//         name: 'Angular: CLI',
//         relaseDate: 'November 2, 2019',
//         description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
//         duration: 120,
//         code: 'XLF-1212',
//         rating: 3,
//         price: 12.99,
//         imageUrl: '/assets/images/cli.png',
//     },
//     {
//         id: 2,
//         name: 'Angular: Forms',
//         relaseDate: 'November 4, 2019',
//         description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
//         duration: 80,
//         code: 'DWQ-3412',
//         rating: 3.5,
//         price: 24.99,
//         imageUrl: '/assets/images/forms.png',
//     },
//     {
//         id: 3,
//         name: 'Angular: HTTP',
//         relaseDate: 'November 8, 2019',
//         description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
//         duration: 80,
//         code: 'QPL-0913',
//         rating: 4.0,
//         price: 36.99,
//         imageUrl: '/assets/images/http.png',
//     },
//     {
//         id: 4,
//         name: 'Angular: Router',
//         relaseDate: 'November 16, 2019',
//         description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
//         duration: 80,
//         code: 'OHP-1095',
//         rating: 4.5,
//         price: 46.99,
//         imageUrl: '/assets/images/router.png',
//     },
//     {
//         id: 5,
//         name: 'Angular: Animations',
//         relaseDate: 'November 25, 2019',
//         description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
//         duration: 80,
//         code: 'PWY-9381',
//         rating: 5,
//         price: 56.99,
//         imageUrl: '/assets/images/animations.png',
//     }
// ];