/**
 * @swagger
 * tags:
 *   name: Farmers
 *   description: API endpoints for managing farmers
 */

/**
 * @swagger
 * /api/farmers:
 *   post:
 *     summary: Create a new farmer
 *     tags: [Farmers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farmer'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/farmers/{id}:
 *   get:
 *     summary: Get a farmer by ID
 *     tags: [Farmers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the farmer to retrieve
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       404:
 *         description: Farmer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/farmers:
 *   get:
 *     summary: Get all farmers
 *     tags: [Farmers]
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
 *         description: The number of farmers per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: The field to sort farmers by
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
 *                   description: The number of farmers per page
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Farmer'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/farmers/{id}:
 *   put:
 *     summary: Update a farmer by ID
 *     tags: [Farmers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the farmer to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farmer'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       404:
 *         description: Farmer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/farmers/{id}:
 *   delete:
 *     summary: Delete a farmer by ID
 *     tags: [Farmers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the farmer to delete
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Farmer not found
 *       500:
 *         description: Internal server error
 */