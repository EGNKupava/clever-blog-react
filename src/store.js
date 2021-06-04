const DEFAULT_STATE = {
  purchases: {
    tv: 0,
    fridge: 0,
    washingMashine: 0,
    sumPrice: 0,
  },
  isModalVisible: false,
};

export class Store {
  constructor() {
    this.state = DEFAULT_STATE;
  }

  onBuy(goods, count, price) {
    console.log("goods: ", goods);
    console.log("count: ", count);
    console.log("price: ", price);
    this.state = {
      ...this.state,
      purchases: {
        ...this.state.purchases,
        [goods]: this.state.purchases[goods] + count,
        sumPrice: this.state.purchases.sumPrice + price,
      },
    };
    console.log("this.state: ", this.state);
  }

  onBuyAll() {
    if (this.state.purchases.sumPrice > 3000) {
      this.state = {
        ...this.state,
        isModalVisible: true,
      };
    }
  }

  onClose() {
    this.state = {
      ...this.state,
      isModalVisible: false,
    };
  }

  onClear() {
    this.state = DEFAULT_STATE;
  }
}
