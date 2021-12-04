import { createSlice } from '@reduxjs/toolkit'

const ProductSlice = createSlice({
  name: 'recycleCard',
  initialState: {
    products: [
      {
        id: '1',
        name: 'Бумажный Пакет',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: '',
        cost: 30000,
        artikul: '54561343124',
        img: 'http://pngimg.com/uploads/shopping_bag/shopping_bag_PNG6382.png',
        actionName: 'paket'
      },
      {
        id: '2',
        name: 'Визитка',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: [{ format: 'на 250гр Обычная', charge: 300, saleCharge: 200 }, { format: 'на 250гр Бархатная Ламинациячная', charge: 400, saleCharge: 300 }, { format: 'на 250гр Матовая Ламинация', charge: 500 }],
        cost: 300,
        artikul: '52131343124',
        img: 'https://img.freepik.com/free-vector/black-business-card-with-red-triangle-shapes_1017-26129.jpg?size=338&ext=jpg',
        actionName: 'vizitka'
      },
      {
        id: '3',
        name: 'Флаер',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: [{ format: '115g', charge: '' }, { format: '135g', charge: '' }, { format: '150g', charge: '' }, { format: '170g', charge: '' }],
        cost: 900,
        artikul: '52111343124',
        img: 'https://aquarell.by/public/upload/1.jpg',
        actionName: 'flaer'
      },
      {
        id: '4',
        name: 'Печать на ручке ',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: '',
        cost: 6000,
        artikul: '52111343124',
        img: 'https://print-luxlite.ru/upload/iblock/84d/84dfeb6e981507edafc677de509c8e33.jpg',
        actionName: 'ruchka'
      },
      {
        id: '5',
        name: 'Календарь настольный',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: [{ format: 'A4', charge: 25000 }, { format: 'A5', charge: 21000 }],
        cost: 115000,
        artikul: '52111343124',
        img: 'https://files.gifts.ru/reviewer/tb/26/2808.10_21_500.jpg',
      },
      {
        id: '6',
        name: 'Календарь на стене',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: [{ format: 'A4', charge: 25000 }, { format: 'A5', charge: 21000 }],
        cost: 100000,
        artikul: '52111343124',
        img: 'https://images.wbstatic.net/big/new/16960000/16961927-1.jpg',
      },
      {
        id: '7',
        name: 'Бокал белый',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: '',
        cost: 50000,
        artikul: '52111343124',
        img: 'https://images.satu.kz/41231848_w640_h640_bokal-dlya-belogo.jpg',
        actionName: 'whiteBokal'
      },
      {
        id: '8',
        name: 'Бокал Фосфорный / Чёрный',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: '',
        cost: 60000,
        artikul: '52111343124',
        img: 'https://seller.uz/uploads/categories/5ab8fcf328700.png',
        actionName: 'blackBokal'
      },
      {
        id: '9',
        name: 'Буклет',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit commodi debitis quisquam consequatur, error ipsum.',
        size: [{ format: '115g', charge: '' }, { format: '135g', charge: '' }, { format: '150g', charge: '' }, { format: '170g', charge: '' }],
        cost: 3000,
        artikul: '52155543124',
        img: 'https://aquarell.by/public/upload/1.jpg',
        actionName: 'buklet'
      },
    ],
    cardItem: [],
    onlineShop: [
      {
        id: '1',
        name: 'Название услуги',
        cost: 20,
        img: 'https://static.wixstatic.com/media/11062b_d596b2e902ce47a5a77e28eca5e3de84~mv2.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/11062b_d596b2e902ce47a5a77e28eca5e3de84~mv2.webp'
      },
      {
        id: '2',
        name: 'Название услуги',
        cost: 22,
        img: 'https://static.wixstatic.com/media/11062b_0c38ef3c732948b7af9083cc851294f0~mv2.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/11062b_0c38ef3c732948b7af9083cc851294f0~mv2.webp'
      }
    ],
    total: 0,
    bool: true,
  },
  reducers: {
    setCardItem(state, action) {
      const { id, name, cost, count, chooseSize, img, actionName } = action.payload;
      state.bool = true

      state.cardItem && state.cardItem.map(r => {
        if (r.name === name) {
          r.count = r.count + (+count)
          r.price = r.price + cost * (+count)
          state.bool = false
        }
        return r
      })

      state.bool && state.cardItem.push({
        id,
        name,
        size: chooseSize,
        img,
        cost,
        count: +count,
        price: cost * +count,
        actionName
      })
    },

    totalPrice(state) {
      if (state.cardItem.length !== 0) {
        let prevTotal = 0
        state.cardItem.map(item => {
          return prevTotal = item.price + prevTotal
        })
        state.total = prevTotal
      } else {
        state.total = 0
      }
    },

    deleted(state, action) {
      state.cardItem = state.cardItem.filter(i => i.id !== action.payload)
    },

    removeCount(state, action) {
      let oldPrice = action.payload.cost 
      state.cardItem.map(item => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count 
          item.price = item.price - oldPrice
        }
        return item
      })
    },
    addCount(state, action) {
      let oldPrice = action.payload.cost
      state.cardItem.map(item => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count
          item.price = oldPrice + action.payload.cost * action.payload.count
        }
        return item
      })
    },
    // products charge filter
    flaer(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 100:
              r.cost = 900
              break
            case action.payload.count > 100 && action.payload.count <= 500:
              r.cost = 800
              break
            case action.payload.count > 500 && action.payload.count <= 1000:
              r.cost = 700
              break
            case action.payload.count > 1000 && action.payload.count <= 5000:
              r.cost = 600
              break
            default:
              r.cost = 550
              break
          }
          r.price = action.payload.count * r.cost
        }
        return r
      })
    },
    buklet(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 100:
              r.cost = 3000
              break
            case action.payload.count > 100 && action.payload.count <= 500:
              r.cost = 2500
              break
            case action.payload.count > 500 && action.payload.count <= 1000:
              r.cost = 2000
              break
            case action.payload.count > 1000 && action.payload.count <= 5000:
              r.cost = 1800
              break
            default:
              r.cost = 1500
              break
          }
          r.price = action.payload.count * r.cost
        }
        return r
      })
    },
    paket(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 50:
              r.cost = 30000
              break;
            case action.payload.count > 50 && action.payload.count <= 100:
              r.cost = 25000
              break;
            case action.payload.count > 100 && action.payload.count <= 250:
              r.cost = 18000
              break;
            case action.payload.count > 250 && action.payload.count <= 500:
              r.cost = 15000
              break;
            case action.payload.count > 500 && action.payload.count <= 1000:
              r.cost = 12000
              break;
            default:
              r.cost = 10000
              break;
          }
          r.price = r.cost * action.payload.count
        }
        return r
      })
    },
    ruchka(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 100:
              r.cost = 6000
              break;
            case action.payload.count > 100 && action.payload.count <= 300:
              r.cost = 5000
              break;
            case action.payload.count > 300 && action.payload.count <= 500:
              r.cost = 4000
              break;
            default:
              r.cost = 3000
              break;
          }
          r.price = r.cost * action.payload.count
        }
        return r
      })
    },
    whiteBokal(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 5:
              r.cost = 50000
              break;
            case action.payload.count > 5 && action.payload.count <= 10:
              r.cost = 40000
              break;
            default:
              r.cost = 35000
              break;
          }
          r.price = r.cost * action.payload.count
        }
        return r
      })
    },
    blackBokal(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 5:
              r.cost = 60000
              break;
            case action.payload.count > 5 && action.payload.count <= 10:
              r.cost = 50000
              break;
            default:
              r.cost = 45000
              break;
          }
          r.price = r.cost * action.payload.count
        }
        return r
      })
    },
    vizitka(state, action) {
      state.cardItem.map(r => {
        if (r.id === action.payload.id) {
          switch (true) {
            case action.payload.count <= 1000:
              r.cost = +action.payload.chooseSize
              break;
            case action.payload.count > 1000:
              r.cost = +action.payload.chooseSize - 100
              break;
            default:
              break;
          }
          r.price = r.cost * action.payload.count
        }
        return r
      })

    }
  }
})

export const { setCardItem, totalPrice, deleted, changeCount, removeCount, addCount, flaer, buklet, paket, ruchka, whiteBokal, blackBokal, vizitka } = ProductSlice.actions

export default ProductSlice.reducer
