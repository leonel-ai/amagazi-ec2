const express = require('express')
const next = require('next')
// const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// const redirects = [
//   { from: '/miguel', to:'https://www.cfgdrbd.us/miguel' },
//   { from: '/schedule-call', to: 'https://www.cfgdrbd.us/amagazi' },
// ]

app.prepare().then(() => {
  const server = express()

  // redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
  //   server[method](from, (req, res) => {
  //     res.redirect(type, to)
  //   })
  // })

  server.get('/miguel', (req, res) => {
    return res.redirect('https://www.cfgdrbd.us/miguel')
  })

  server.get('/schedule-call', (req, res) => {
    return res.redirect('https://www.cfgdrbd.us/amagazi')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
