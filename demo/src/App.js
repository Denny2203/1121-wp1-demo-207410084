import './App.css';

import Book_84 from './components/Book_84';

function App() {
  return (
    <section className="booklist">
      <Book_84 
        key='1'
        img="https://images-na.ssl-images-amazon.com/images/I/81-XJpj2BoL._AC_UL210_SR195,210_.jpg"
        title="Just Because"
        author="Matthew McConaughey"
      />
      <Book_84 
        key='2'
        img="https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL210_SR195,210_.jpg"
        title="The Housemaid"
        author="Freida McFadden"
      />
      <Book_84 
        key='3'
        img="https://images-na.ssl-images-amazon.com/images/I/71gF5ocV6cL._AC_UL210_SR195,210_.jpg"
        title="The Outsiders"
        author="S. E. Hinton"
      />
     </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/81-XJpj2BoL._AC_UL210_SR195,210_.jpg" alt="" />
      <h1>Just Because</h1>
      <h4> Matthew McConaughey</h4>
    </article>
  )
}
export default App;
