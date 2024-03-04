import { EventEmitter } from "@angular/core"

export class UserService{
    users =[
        {name:'Bhavani', job:'Software Engineer', gender:'Female',country:'India'},
        {name:'Gayathri', job:'Teacher ', gender:'Female',country:'US'},
        {name:'selva', job:'civil Engineer', gender:'Male',country:'India'},
        {name:'Viji', job:'Mechanical Engineer', gender:'male',country:'India'},
        {name:'Kavith', job:'Chemical Engineer', gender:'Male',country:'India'},
    ]
    onShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string}>
    ShowUserDetails(user:{name: string, job: string, gender: string, country: string}){
        this.onShowDetailsClicked.emit(user);

    }
}