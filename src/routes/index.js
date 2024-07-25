import { Router } from "express";
const router = Router()

router.get('/', (req, res)=>{
    res.json({message: "bienvenido ruta principal"})
})

export default router;