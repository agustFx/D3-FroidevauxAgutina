import express from 'express'
import ProductManager from './productManager'

const app = express()

const productManager = new ProductManager()

app.get('/products'), (res) => {
    const products = productManager.getProducts()
    res.json(products)
}

app.get('/products:pim'), (req, res) => {
    const id = req.productManager.id 
    const product = productManager.getProductsById('id', id)
    res.json(product)
}

app.listen(8080, () => {
    console.log("Servidor conectado :)")
})