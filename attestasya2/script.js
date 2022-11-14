class Message{
    constructor (author,text){
    
        this.author=author;
        this.text=text;
        this.time=new Date();
    }
    toString(){
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}:${this.text} `
    }
   }

class Messenger {
  constructor(){
   this.texts=[]
  }
  send(author,text){
const mesaj= new Message(author,text)
this.texts.push(mesaj.toString())

 }
show_history(author,text){
this.texts.forEach(a=>console.log(a))
}}
  
const x= new Messenger()
x.send('Tunzale','salam')
x.send('Humay','sagol')
x.show_history()