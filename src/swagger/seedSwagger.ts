/**
 * @swagger
 * tags:
 *   name: Seeds
 *   description: API endpoints for managing seeds
 */

/**
 * @swagger
 * /api/seeds:
 *   post:
 *     summary: Create a new seed
 *     tags: [Seeds]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Seed'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seed'
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/seeds:
 *   get:
 *     summary: Get all seeds
 *     tags: [Seeds]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: The number of seeds per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: The field to sort seeds by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: The sorting order (ascending or descending)
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: The search query to filter seeds by name
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPages:
 *                   type: integer
 *                   description: The total number of pages
 *                 currentPage:
 *                   type: integer
 *                   description: The current page number
 *                 pageSize:
 *                   type: integer
 *                   description: The number of seeds per page
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Seed'
 *       500:
 *         description: Internal server error
 */