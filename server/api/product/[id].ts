import { PRODUCT_LIST } from '@/data/products.js'
export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')
    return PRODUCT_LIST.find(item => item.id === Number(id))
})