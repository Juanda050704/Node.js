import  Express  from "express";
import { crearproducto } from "../controllers/productController";

const productoRoutar = Express.Router()
productoRoutar.post('/',crearproducto)

export {
    productoRoutar
}