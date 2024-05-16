/**
 * @swagger
 * components:
 *   schemas:
 *     Farmer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the farmer
 *         name:
 *           type: string
 *           description: The name of the farmer
 *         email:
 *           type: string
 *           description: The email address of the farmer
 *         phone:
 *           type: string
 *           description: The phone number of the farmer
 *         address:
 *           type: string
 *           description: The address of the farmer
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - address
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Fertilizer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the fertilizer
 *         name:
 *           type: string
 *           description: The name of the fertilizer
 *         description:
 *           type: string
 *           description: The description of the fertilizer
 *         price:
 *           type: number
 *           description: The price of the fertilizer
 *         quantity:
 *           type: integer
 *           description: The quantity of the fertilizer
 *       required:
 *         - name
 *         - description
 *         - price
 *         - quantity
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Seed:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the seed
 *         name:
 *           type: string
 *           description: The name of the seed
 *         description:
 *           type: string
 *           description: The description of the seed
 *         price:
 *           type: number
 *           description: The price of the seed
 *         quantity:
 *           type: integer
 *           description: The quantity of the seed
 *       required:
 *         - name
 *         - description
 *         - price
 *         - quantity
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the order
 *         farmerId:
 *           type: integer
 *           description: The ID of the farmer who placed the order
 *         landSize:
 *           type: number
 *           description: The size of the land in acres
 *         fertilizerQuantity:
 *           type: number
 *           description: The total quantity of fertilizers in the order
 *         seedQuantity:
 *           type: number
 *           description: The total quantity of seeds in the order
 *         status:
 *           type: string
 *           description: The status of the order
 *       required:
 *         - farmerId
 *         - landSize
 *         - fertilizerQuantity
 *         - seedQuantity
 *         - status
 *     OrderItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the order item
 *         orderId:
 *           type: integer
 *           description: The ID of the associated order
 *         fertilizerId:
 *           type: integer
 *           description: The ID of the fertilizer in the order item
 *         seedId:
 *           type: integer
 *           description: The ID of the seed in the order item
 *         fertilizerQuantity:
 *           type: number
 *           description: The quantity of the fertilizer in the order item
 *         seedQuantity:
 *           type: number
 *           description: The quantity of the seed in the order item
 *       required:
 *         - orderId
 *         - fertilizerId
 *         - seedId
 *         - fertilizerQuantity
 *         - seedQuantity
 */

