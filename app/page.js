// 1. JSX requires only one outer tag, meaning that all elements must be nested inside a single parent element.
// 2. The class attribute in HTML is reserved in JavaScript, so instead of using "class", we use "className" to apply CSS classes to our JSX elements.
// 3. To include a JavaScript variable's value in your HTML, you can use curly braces { } to surround the variable name. This process is called data binding.
// 4. To apply inline styles to your JSX elements, you can use double curly braces {{ }} to pass a JavaScript object containing the styles. 
//    However, since object keys cannot have dashes in them, you'll need to use camelCase instead.

export default function Home() {

  let name = 'soo';
  let link = 'http://google.com';

  return (
    <div>
      
      <h4 className="title">demo</h4>
      <p className="title-sub">by {name}</p>
      <a href={link} style={{color: 'red', fontSize: '30px'}}>link</a>
    </div>
  )
}