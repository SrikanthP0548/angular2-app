export class student{
    public name: string;
    public DOB : Date;
    public clas : string;
    public section : string;
    public imagePath :string;

    constructor(name: string,DOB : Date,clas : string,section : string,imagePath :string){
        this.name = name;
        this.DOB =DOB;
        this.clas = clas;
        this.section =section;
        this.imagePath =imagePath;
    }

    
}