// 3. Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product
// y funciones para agregar y buscar productos.

interface IProduct {
    name: string;
    price: number;
  }
  
  interface IInventory {
    products: IProduct[];
    addProduct(product: IProduct): void;
    findProduct(name: string): IProduct | undefined;
  }
  
  class BasicInventory implements IInventory {
    products: IProduct[] = [];
  
    addProduct(product: IProduct): void {
        this.products.push(product);
        console.log(`Producto ${product.name} agregado al inventario.`);
    }
  
    findProduct(name: string): IProduct | undefined {
        return this.products.find(product => product.name === name);
    }
  }
  
  const inventory: IInventory = new BasicInventory();
  inventory.addProduct({ name: "xiaomi", price: 510000 });
  inventory.addProduct({ name: "oppo", price:145000 });
  
  const foundProduct: IProduct | undefined = inventory.findProduct("Phone");
 


  









// interface Product {
//     name: string;
//     price: number;
// }
// interface Inventory {
//     [index: number]: string;
//     getProduct: (name: string) => string;
//     addProduct: (name: string) => string;

// }
// function getProduct(name: string) {
//     return name;


// }

// function addProduct(name:string) {
    
// }



// let ProductList: Inventory = ['iphone', "xiaomi", "oppo"];

// ProductList[1];
// ProductList[0];
