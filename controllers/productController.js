import { Producto } from "../models/productModel.js"


const crearproducto = async (req, res)=> {
    try {
      Producto.create(req.body)
      res.json (

        {message:"usuario creado correctamente"}
      )
    } catch (error) {
     res.json (
        { message:"No se pudo resgitrar$ (error)"}
     )
    }
     
}

const listarProducto = async ()=> {


}

const listarProductos = async ()=> {
}

const editarProducto = async ()=> {

}

const eliminarProducto = async ()=>{

}

export {
    crearproducto,
    listarProducto,
    listarProductos,
    editarProducto,
    eliminarProducto,
}
