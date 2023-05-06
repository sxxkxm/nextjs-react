// Routing -> link pages with urls
// nextjs supports auto routing
// By making a folder, it automatically makes the route with the folder name.
// in this case '/list'
// 1. create a component
// 2. export default

// for loop html -> good to have key attribute to set unique key
// img src / -> puglic folder

// img - lazy loading, layout shift, size optimization
// using image component -> needs to import image to put in a html
// import Image from "next/image"
// import img from '/public/img1.jpeg'

export default function List() {

  let products = ['Tomatoes', 'Pasta', 'Coconut'];

  return (
    <div>
      <h4 className="title">Product List</h4>
      {
        products.map((product, i)=>{
          return(
            <div className="food" key={i}>
              {/* <Image src={img} className="food-img"/> */}
              {/* <Image src="https://s3.amazonaws.com/my-bucket/profile.png" width={500} height={400} className="food-img" /> */}
              <img src={`/img${i+1}.jpeg`} className="food-img" />
              <h4>{product} $40</h4>
            </div>    
          )
        })
      }
    </div>
  )
}