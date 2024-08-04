import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './Items.css'
import Footer from '../Footer/Footer';

function Items() {
    const [items, setItems] = useState([
        {
            user: 'Mandy Clark',
            url: 'https://i.pinimg.com/originals/b3/d3/28/b3d328ec12ad91c2f68393b79777eb63.jpg',
            brand: 'Nike',
            gender: 'Female',
            size: 'M'
          },
          {
            user: 'Ravi Leo',
            url: 'https://i.pinimg.com/originals/c3/55/0d/c3550d5cda19c918e25f81dd75be893a.jpg',
            brand: 'Adidas',
            gender: 'Male',
            size: 'L'
          },
          {
            user: 'Mole Terra',
            url: 'https://i.pinimg.com/originals/c3/55/0d/c3550d5cda19c918e25f81dd75be893a.jpg',
            brand: 'Puma',
            gender: 'Male',
            size: 'M'
          },
          {
            user: 'Alex Green',
            url: 'https://i.pinimg.com/originals/03/33/7a/03337a394c31e4368b4cdeaf29d85565.jpg',
            brand: 'Under Armour',
            gender: 'Female',
            size: 'S'
          },
          {
            user: 'Sarah Blue',
            url: 'https://i.pinimg.com/originals/b9/35/32/b93532492235dcdd6b644db189226b90.jpg',
            brand: 'Reebok',
            gender: 'Female',
            size: 'L'
          },
          {
            user: 'Tom White',
            url: 'https://i.pinimg.com/564x/bc/f4/08/bcf408ec43647ca1318d647ab4caccc7.jpg',
            brand: 'Asics',
            gender: 'Male',
            size: 'XL'
          },
          {
            user: 'Jane Doe',
            url: 'https://i.pinimg.com/474x/45/9d/2b/459d2b3c11f55be0ecd223f797c2f821.jpg',
            brand: 'New Balance',
            gender: 'Female',
            size: 'M'
          },
          {
            user: 'John Smith',
            url: 'https://i.pinimg.com/474x/4e/d6/99/4ed699b0f2a8023c73b67f376b0be648.jpg',
            brand: 'Champion',
            gender: 'Male',
            size: 'L'
          },
          {
            user: 'Lucy Black',
            url: 'https://i.pinimg.com/474x/63/e1/ae/63e1aeb53509c8dfc44d1ae88954a9b5.jpg',
            brand: 'Fila',
            gender: 'Female',
            size: 'S'
          },
          {
            user: 'Emma Brown',
            url: 'https://i.pinimg.com/564x/c7/60/10/c76010d6d100906a5bc2d80c05be2368.jpg',
            brand: 'H&M',
            gender: 'Female',
            size: 'M'
          },
          {
            user: 'Mike Davis',
            url: 'https://i.pinimg.com/564x/e3/c7/ef/e3c7eff66021b0698b49f7b08741e577.jpg',
            brand: 'Zara',
            gender: 'Male',
            size: 'M'
          },
          {
            user: 'Lily Johnson',
            url: 'https://i.pinimg.com/474x/f2/4c/68/f24c68aebd2e50880614f7252bff5016.jpg',
            brand: 'Uniqlo',
            gender: 'Female',
            size: 'L'
          }
        ]);
      
  return (
    <div>
        <div className='card-container'>
            {items.map(item => (
                <TinderCard
                className='swipe'
                key={item.user}
                preventSwipe={['up, down']}>
                    <div 
                    className='card'
                    style={{backgroundImage: `url(${item.url})`}}>
                        <div className='card-details'>
                        <h3>Swapper: {item.user}</h3>
                        <h4>Brand: {item.brand}</h4>
                        <h4>Gender: {item.gender}</h4>
                        <h4>Size: {item.size}</h4>
                        </div>
                    </div>
                </TinderCard>

            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Items