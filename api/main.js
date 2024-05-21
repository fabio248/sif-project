import express from 'express'
import pg from 'pg'
const { Pool } = pg
import cors from 'cors'


function main() {
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    const pool = new Pool({
        user: 'root',
        password: 'root',
        host: 'localhost',
        port: 5432,
        database: 'sif-db',
    })

    app.post('/login', async (req, res) => {
        try{

        const { user, password } = req.body

        const query = `select * from users where name = '${user}' AND password = '${password}';`

        const { rows: users }  = await pool.query(query)

        if(users.length === 0) {
            return res.status(401).json({ error: 'Credenciales invalidas' })
        }

        return res.json({ users })
        } catch (error) {
            res.status(401).json({ error: 'Credenciales invalidas' })
        }
    })

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    })
}

main();