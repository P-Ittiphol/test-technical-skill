import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SubmitResponse } from "../models/assignment.model";

@Injectable({ providedIn: 'root' })
export class AssignmentService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    submitAssignment(data: any) {
        return this.http.post<SubmitResponse>(`${this.apiUrl}/submit`, data);
    }

    getQuestions() {
        return this.http.get<any[]>(`${this.apiUrl}/questions`);
    }
}