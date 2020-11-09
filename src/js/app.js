export default class Team1 {

    constructor(char1, char2, char3) {
        this.char1 = char1,
        this.char2 = char2,
        this.char3 = char3
    }

    [Symbol.iterator]() {
        let position = -1; 
        const that = this; 
        
        return { 
            next() { 
              position++; 
              switch(position) { 
                  case 0: 
                    return { 
                        value: that.char1, 
                        done: false 
                    }; 
                  case 1: 
                    return { 
                        value: that.char2, 
                        done: false 
                    }; 
                  case 2: 
                    return { 
                        value: that.char3, 
                        done: false 
                    }; 
                  default: 
                    return { 
                        done: true } 
                    } 
                } 
            }
    

    }
}
