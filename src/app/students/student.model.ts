import { Marks } from './../shared/marks.model';

export class student{
    public name: string;
    public DOB : Date;
    public clas : string;
    public section : string;
    public imagePath :string;
    public sid: number;
    public marks : Marks [];

    constructor(sid:number,name: string,DOB : Date,clas : string,section : string,imagePath :string,marks:Marks[]){
        this.sid = sid;
        this.name = name;
        this.DOB =DOB;
        this.clas = clas;
        this.section =section;
        this.imagePath =imagePath;
        this.marks = marks;
    }

    
}