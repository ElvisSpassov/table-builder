import { useState  } from 'react';
import { Tables } from "../data.json"
import React from 'react';


export default function Product() {
  let table = Tables.find((item) => item.wood == "Бряст");
  const [selectTable, setTable] = useState(table);
  const [selectPicture, setPicture] = useState(selectTable.pics[0].url);
  

  function changeTable(wood) {
    table = Tables.find((item) => item.wood == wood)
    setTable(table);
    setPicture(table.pics[0].url);
  }
  

  return (
    <div className="card">
      <section className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main">

              <img src={selectPicture} alt="green apple slice"/>
            </div>
            <div className="photo-album">
              <ul>
                { selectTable.pics.map((item) => <li> <img src={item.url} onClick={() => setPicture(item.url)}/></li> ) }
              </ul>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>Трапезна маса</h1>
          </div>
          <div className="price">
            <span>{selectTable.price}лв</span>
          </div>
          <div class="variant">
            <h3>Избери вид дърво</h3>
            <ul>
              <li><img src="https://korkos.com/wp-content/uploads/2019/08/%D0%97%D0%B5%D0%B1%D1%80%D0%B0%D0%BD%D0%BE.jpg" alt="green apple" onClick={()=>changeTable("Бряст")}/></li>
              <li><img src="https://korkos.com/wp-content/uploads/2019/08/%D0%92%D0%B5%D0%BD%D0%B3%D0%B5.jpg" alt="yellow apple" onClick={()=>changeTable("Орех")}/></li>
              <li><img src="https://korkos.com/wp-content/uploads/2019/08/%D0%94%D1%8A%D0%B1.jpg" alt="orange apple"/></li>
              <li><img src="https://korkos.com/wp-content/uploads/2019/08/%D0%A7%D0%B5%D1%80%D0%B5%D1%88%D0%B0.jpg" alt="red apple"/></li>
            </ul>
          </div>
          <div className="description">
            <h3>Описание</h3>
            <h3>Характеристики</h3>
            <ul>
              <li>Третирана с био ленено масло.</li>
              <li>Вид дървесина: {selectTable.wood}</li>
              <li>Брой места: 8</li>
              <li>Височина: 740мм</li>
              <li>Размер: 2000/800мм</li>
              <li>Дебелина на плота: 27мм</li>
              <li>Безплатна доставка за София и Монтана</li>
            </ul>
          </div>
          <button className="buy--btn">Изпрати запитване</button>
        </div>
      </section>
    </div>
  );
}
