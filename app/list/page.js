// Routing -> link pages with urls
// nextjs supports auto routing
// By making a folder, it automatically makes the route with the folder name.
// in this case '/list'
// 1. create a component
// 2. export default

export default function List() {
  return (
    <div>
      <h4 className="title">Product List</h4>
      <div className="food">
        <h4>Product 1 $40</h4>
      </div>
      <div className="food">
        <h4>Product 2 $50</h4>
      </div>
    </div>
  )
}