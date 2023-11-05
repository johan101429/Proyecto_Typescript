// Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de
// usuario que acepte tanto User como Admin.

interface Iuser {
    id: number;
    email: string;
    name: string;
}

interface Iadmin extends Iuser {
    password: string;
}

function user1(usuario:Iuser|Iadmin):void {
    console.log(usuario);
    
    console.log('user1 : id =' + usuario.id +' , email = '+ usuario.email +', name ='+ usuario.name +', password =' + usuario.password);
}

let usuario :Iuser = user1;
usuario(1,'test@gamil.com','pedre','holaas'); 