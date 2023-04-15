// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
function getProduct(req, res) {
  res.status(200).json({ name: 'John Doe'})
}

export default fun={
  handler,
  getProduct
}
