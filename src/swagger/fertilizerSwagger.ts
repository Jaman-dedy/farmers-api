/**
 * @swagger
 * tags:
 *   name: Fertilizers
 *   description: API endpoints for managing fertilizers
 */

/**
 * @swagger
 * /api/fertilizers:
 *   post:
 *     summary: Create a new fertilizer
 *     tags: [Fertilizers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fertilizer'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fertilizer'
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/fertilizers/{id}:
 *   get:
 *     summary: Get a fertilizer by ID
 *     tags: [Fertilizers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the fertilizer to retrieve
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fertilizer'
 *       404:
 *         description: Fertilizer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/fertilizers:
 *   get:
 *     summary: Get all fertilizers
 *     tags: [Fertilizers]
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
 *         description: The number of fertilizers per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: The field to sort fertilizers by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: The sorting order (ascending or descending)
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
 *                   description: The number of fertilizers per page
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Fertilizer'
 *       500:
 *         description: Internal server error
 */