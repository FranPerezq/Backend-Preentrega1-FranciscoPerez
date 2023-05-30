class ProductManager {

        constructor (Products) {
        this.ID = []
        this.title = []
        this.description = []
        this.price = []
        this.thumbnail = []
        this.code = []
        this.stock = []
        }

        getProducts = () => {return this.Products}

        getNextID = () => {
            const count = this.products.length
            if (count > 0) {

                return this.products[count - 1].ID + 1
            }
            else {return 1}


        addProduct = (ID, title , description, price, thumbnail, code, stock) => {
            const Product = {
                id: this.getNextID(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock,                
            }
            this.Products.push(Product)
        }

    }

    // const ProductCode = Products.reduce((result, obj) => {
    //     Object.keys(obj).forEach((v) => {
    //         if (!result.includes(v)) result.push(v);
    //     });
    
    //     return result;
    // }, []);


    const Manager = new ProductManager();
    Manager.addProduct('Remera', 'Negra, de invierno', 100, 0, 1001, 10);
    Manager.addProduct('Campera', 'Gris, de invierno', 1010, 0, 1002, 10);
    console.log(Manager.getProducts());






